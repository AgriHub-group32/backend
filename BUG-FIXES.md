# AgriConnect Backend - Bug Fix Guide

This document provides step-by-step fix instructions for each bug identified in `BUGS.md`.

---

## FIX-01: Add Missing Fields to `user` Model in Prisma Schema

**File:** `src/database/schema.prisma`

Add the following fields to the `user` model:

```prisma
model user {
  id                                 Int         @id @default(autoincrement())
  full_name                          String      @db.VarChar(255)
  email                              String      @unique(map: "email") @db.VarChar(255)
  passwd                             String      @db.VarChar(255)
  profile                            String?     @db.VarChar(500)
  phone                              String?     @db.VarChar(20)
  location                           String?     @db.VarChar(255)
  bio                                String?     @db.Text
  farm_name                          String?     @db.VarChar(255)
  business_name                      String?     @db.VarChar(255)
  is_verified                        Boolean     @default(false)
  is_active                          Boolean     @default(true)
  type                               user_type
  created_at                         DateTime?   @default(now()) @db.Timestamp(0)
  // ... keep all existing relations
}
```

After updating the schema, run:
```bash
npx prisma db push    # or create a migration
npx prisma generate
```

---

## FIX-02: Add Missing Fields to `harvest` Model in Prisma Schema

**File:** `src/database/schema.prisma`

Add the following fields to the `harvest` model:

```prisma
model harvest {
  id               Int              @id @default(autoincrement())
  quantity         Int
  unit             String           @db.VarChar(20)
  owner_id         Int
  name             String           @db.VarChar(255)
  category         String           @db.VarChar(100)
  unit_price       Decimal          @db.Decimal(10, 2)
  description      String?          @db.Text
  location         String?          @db.VarChar(255)
  is_available     Boolean          @default(true)
  created_at       DateTime?        @default(now()) @db.Timestamp(0)
  updated_at       DateTime?        @default(now()) @updatedAt @db.Timestamp(0)
  // ... keep all existing relations and indexes
}
```

---

## FIX-03: Add `created_at` to `message` Model

**File:** `src/database/schema.prisma`

```prisma
model message {
  // ... existing fields ...
  created_at                          DateTime?  @default(now()) @db.Timestamp(0)
  // ... existing relations ...
}
```

---

## FIX-04: Add `created_at` to `chat_room` Model

**File:** `src/database/schema.prisma`

```prisma
model chat_room {
  // ... existing fields ...
  created_at                         DateTime?   @default(now()) @db.Timestamp(0)
  // ... existing relations ...
}
```

---

## FIX-05: Add Null Check for File Upload in Account Controller

**File:** `src/features/account/account.controller.ts`

```typescript
@Patch('profile/photo')
@UseInterceptors(FileInterceptor('photo', multerOptions))
updateProfilePhoto(
  @CurrentUser() user: user,
  @UploadedFile() file: Express.Multer.File,
) {
  if (!file) {
    throw new BadRequestException('Photo file is required');
  }
  const photoUrl = `/uploads/${file.filename}`;
  return this.accountService.updateProfilePhoto(user.id, photoUrl);
}
```

Don't forget to add `BadRequestException` to the imports.

---

## FIX-06: Fix Harvest Create to Explicitly Map DTO Fields

**File:** `src/features/harvest/harvest.service.ts`

Instead of spreading the entire DTO, explicitly map only the fields that exist in the schema:

```typescript
async create(ownerId: number, dto: CreateHarvestDto) {
  const category = await this.db.harvest_category.findUnique({
    where: { category: dto.category },
  });
  if (!category) throw new BadRequestException(`Category '${dto.category}' does not exist`);

  const harvest = await this.db.harvest.create({
    data: {
      name: dto.name,
      quantity: dto.quantity,
      unit: dto.unit,
      category: dto.category,
      unit_price: dto.unit_price,
      description: dto.description,
      location: dto.location,
      owner_id: ownerId,
    },
  });
  return { message: 'Harvest listing created', harvest };
}
```

**Note:** This fix only matters after FIX-02 adds the `description` and `location` fields to the schema.

---

## FIX-07: No action needed

The `@Type(() => Number)` decorator handles the conversion properly. This was a false positive on closer inspection.

---

## FIX-08: Fix Payment `getById` Authorization

**File:** `src/features/payment/payment.service.ts`

Replace the `getById` method:

```typescript
async getById(paymentId: number, userId: number) {
  const payment = await this.db.payment.findUnique({
    where: { id: paymentId },
    include: {
      order: {
        include: {
          harvest: {
            select: { id: true, name: true, owner_id: true },
          },
          user_order_buyer_idTouser: { select: { id: true, full_name: true } },
        },
      },
    },
  });
  if (!payment) throw new NotFoundException('Payment not found');

  // Check that the user is either the buyer or the harvest owner
  const isBuyer = payment.order.buyer_id === userId;
  const isFarmer = payment.order.harvest.owner_id === userId;
  if (!isBuyer && !isFarmer) {
    throw new ForbiddenException('Not authorized to view this payment');
  }

  return payment;
}
```

---

## FIX-09: Don't Return Reset Token in API Response

**File:** `src/features/auth/auth.service.ts`

For production, the token should be sent via email. For now, at minimum remove it from the response:

```typescript
async requestPasswordReset(dto: RequestResetDto) {
  const user = await this.db.user.findUnique({ where: { email: dto.email } });
  if (!user) {
    // Return same message whether user exists or not (also fixes BUG-10)
    return { message: 'If an account with that email exists, a reset link has been sent.' };
  }

  const resetToken = await this.authToken.genToken(user.id, 'access');
  this.resetTokens.set(resetToken, {
    userId: user.id,
    expiresAt: Date.now() + 15 * 60 * 1000,
  });

  // TODO: Send resetToken via email service
  // await this.emailService.sendResetEmail(user.email, resetToken);

  return { message: 'If an account with that email exists, a reset link has been sent.' };
}
```

---

## FIX-10: Fix User Enumeration (Covered by FIX-09)

Return the same response regardless of whether the email exists. See FIX-09 above.

---

## FIX-11: Reduce Bcrypt Rounds to 10-12

**File:** `.env`

```env
PASSWD_ENCRYP_ROUNDS=12
```

12 rounds provides strong security while keeping hash time under 300ms.

---

## FIX-12: Fix Race Condition in Order Accept

**File:** `src/features/order/order.service.ts`

Use Prisma's interactive transaction to prevent race conditions:

```typescript
async accept(orderId: number, farmerId: number) {
  const order = await this.getOrderForFarmer(orderId, farmerId);
  if (order.status !== 'pending')
    throw new BadRequestException('Can only accept pending orders');

  return this.db.$transaction(async (tx) => {
    // Re-read harvest inside transaction for consistency
    const harvest = await tx.harvest.findUnique({
      where: { id: order.harvest_id },
    });
    if (!harvest || harvest.quantity < order.quantity)
      throw new BadRequestException('Insufficient harvest quantity');

    const newQuantity = harvest.quantity - order.quantity;

    await tx.order.update({
      where: { id: orderId },
      data: { status: 'accepted' },
    });

    await tx.harvest.update({
      where: { id: order.harvest_id },
      data: {
        quantity: newQuantity,
        is_available: newQuantity > 0,
      },
    });

    return { message: 'Order accepted' };
  });
}
```

---

## FIX-13: Add Unique Constraint on Payment `order_id` or Use Transaction

**Option A: Schema change (recommended)**

**File:** `src/database/schema.prisma`

```prisma
model payment {
  id              Int            @id @default(autoincrement())
  order_id        Int            @unique  // Add unique constraint
  // ... rest unchanged
}
```

**Option B: Use transaction in code**

**File:** `src/features/payment/payment.service.ts`

```typescript
async create(userId: number, dto: CreatePaymentDto) {
  return this.db.$transaction(async (tx) => {
    const order = await tx.order.findUnique({ where: { id: dto.order_id } });
    if (!order) throw new NotFoundException('Order not found');
    if (order.buyer_id !== userId)
      throw new ForbiddenException('Not the buyer of this order');
    if (order.status !== 'accepted')
      throw new BadRequestException('Can only pay for accepted orders');

    const existingPayment = await tx.payment.findFirst({
      where: { order_id: dto.order_id, status: { in: ['pending', 'completed'] } },
    });
    if (existingPayment)
      throw new BadRequestException('Payment already exists for this order');

    const payment = await tx.payment.create({
      data: {
        order_id: dto.order_id,
        amount: order.total_price,
        method: dto.method as any,
        transaction_ref: randomUUID(),
      },
    });

    return { message: 'Payment initiated', payment };
  });
}
```

---

## FIX-14: Add Unique Constraint on `chat_room` (user1, user2)

**File:** `src/database/schema.prisma`

```prisma
model chat_room {
  id                         Int       @id @default(autoincrement())
  user1                      Int
  user2                      Int
  created_at                 DateTime? @default(now()) @db.Timestamp(0)
  // ... relations ...

  @@unique([user1, user2], map: "unique_chat_room")
  @@index([user1], map: "user1")
  @@index([user2], map: "user2")
}
```

Then update `findOrCreateRoom` to use `upsert` or a try-catch on unique constraint violation.

---

## FIX-15: Check `is_active` During Authentication

**File:** `src/utils/authToken.service.ts`

```typescript
async validate(payload: { sub: number }) {
  const user = await this.dbClient.user.findUnique({ where: { id: payload.sub } });
  if (!user || !user.is_active) {
    return null; // Passport will throw UnauthorizedException
  }
  return user;
}
```

Also add the check in `auth.service.ts` login methods:

```typescript
async login(dto: LoginDto) {
  const user = await this.db.user.findUnique({ where: { email: dto.email } });
  if (!user) throw new UnauthorizedException('Invalid email or password');
  if (!user.is_active) throw new UnauthorizedException('Account has been deactivated');
  // ... rest of login
}
```

---

## FIX-16: Validate Order Status in `resolveDispute`

**File:** `src/features/admin/admin.service.ts`

```typescript
async resolveDispute(orderId: number) {
  const order = await this.db.order.findUnique({ where: { id: orderId } });
  if (!order) throw new NotFoundException('Order not found');

  if (['completed', 'cancelled', 'rejected'].includes(order.status)) {
    throw new BadRequestException(
      `Cannot resolve dispute: order is already ${order.status}`,
    );
  }

  await this.db.order.update({
    where: { id: orderId },
    data: { status: 'completed' },
  });
  return { message: 'Dispute resolved, order marked as completed' };
}
```

---

## FIX-17: Check for Active Orders Before Harvest Deletion

**File:** `src/features/harvest/harvest.service.ts`

```typescript
async delete(id: number, ownerId: number) {
  const harvest = await this.db.harvest.findUnique({ where: { id } });
  if (!harvest) throw new NotFoundException('Harvest not found');
  if (harvest.owner_id !== ownerId) throw new ForbiddenException('Not the owner of this harvest');

  // Check for active orders
  const activeOrders = await this.db.order.count({
    where: {
      harvest_id: id,
      status: { in: ['pending', 'accepted'] },
    },
  });
  if (activeOrders > 0) {
    throw new BadRequestException(
      'Cannot delete harvest with active orders. Cancel or complete them first.',
    );
  }

  await this.db.harvest_image.deleteMany({ where: { harvest_id: id } });
  await this.db.harvest.delete({ where: { id } });
  return { message: 'Harvest deleted' };
}
```

Apply the same check to `AdminService.removeHarvest`.

---

## FIX-18: Preserve Trending Sort Order

**File:** `src/features/marketplace/marketplace.service.ts`

```typescript
async getTrending(limit: number = 10) {
  const trending = await this.db.order.groupBy({
    by: ['harvest_id'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: limit,
  });

  const harvestIds = trending.map((t) => t.harvest_id);
  const harvests = await this.db.harvest.findMany({
    where: { id: { in: harvestIds }, is_available: true },
    include: {
      harvest_image: true,
      user: { select: { id: true, full_name: true, location: true } },
    },
  });

  // Preserve trending order by mapping from trending array
  const harvestMap = new Map(harvests.map((h) => [h.id, h]));
  return trending
    .map((t) => {
      const harvest = harvestMap.get(t.harvest_id);
      if (!harvest) return null;
      return { ...harvest, order_count: t._count.id };
    })
    .filter(Boolean);
}
```

---

## FIX-19: Fix Popular Products Sort Order and Null Safety

**File:** `src/features/analytics/analytics.service.ts`

```typescript
async getPopularProducts() {
  const popular = await this.db.order.groupBy({
    by: ['harvest_id'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 10,
  });

  const harvestIds = popular.map((p) => p.harvest_id);
  const harvests = await this.db.harvest.findMany({
    where: { id: { in: harvestIds } },
    include: {
      harvest_image: { take: 1 },
      user: { select: { id: true, full_name: true, location: true } },
    },
  });

  const harvestMap = new Map(harvests.map((h) => [h.id, h]));
  return popular
    .map((p) => {
      const harvest = harvestMap.get(p.harvest_id);
      if (!harvest) return null;
      return { ...harvest, order_count: p._count.id };
    })
    .filter(Boolean);
}
```

---

## FIX-20: Simplify `findOrCreateRoom` Query

**File:** `src/features/chat/chat.service.ts`

```typescript
async findOrCreateRoom(user1Id: number, user2Id: number) {
  const [smallId, bigId] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];

  let room = await this.db.chat_room.findFirst({
    where: { user1: smallId, user2: bigId },
  });

  if (!room) {
    room = await this.db.chat_room.create({
      data: { user1: smallId, user2: bigId },
    });
  }

  return room;
}
```

---

## FIX-21: Collect Entries Before Deleting from Map

**File:** `src/features/call/call.gateway.ts`

```typescript
private endCallsForUser(userId: number) {
  // If this user was a caller
  const calleeId = this.activeCalls.get(userId);
  if (calleeId) {
    this.activeCalls.delete(userId);
    const calleeSocketId = this.onlineUsers.get(calleeId);
    if (calleeSocketId) {
      this.server.to(calleeSocketId).emit('call_ended', { user_id: userId });
    }
  }

  // If this user was a callee - collect first, then delete
  const callersToRemove: number[] = [];
  for (const [callerId, cId] of this.activeCalls) {
    if (cId === userId) {
      callersToRemove.push(callerId);
    }
  }
  for (const callerId of callersToRemove) {
    this.activeCalls.delete(callerId);
    const callerSocketId = this.onlineUsers.get(callerId);
    if (callerSocketId) {
      this.server.to(callerSocketId).emit('call_ended', { user_id: userId });
    }
  }
}
```

---

## Recommended Fix Order

1. **FIX-11** (Bcrypt rounds) - Quickest fix, makes app usable
2. **FIX-01, FIX-02, FIX-03, FIX-04** (Schema fixes) - Fixes all critical crashes
3. **FIX-14** (Chat room unique constraint) - Part of schema migration
4. **FIX-05** (File upload null check) - Quick code fix
5. **FIX-06** (Harvest create field mapping) - Quick code fix
6. **FIX-08** (Payment authorization) - Security fix
7. **FIX-09, FIX-10** (Reset token security) - Security fix
8. **FIX-15** (Deactivated user check) - Security fix
9. **FIX-12, FIX-13** (Race conditions) - Data integrity
10. **FIX-16 through FIX-21** (Logic fixes) - Quality improvements
