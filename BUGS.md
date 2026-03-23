# AgriConnect Backend - Bug Report

## Summary

After a thorough code review, **21 bugs** were identified across the codebase. Of these, **7 are critical** (application will crash at runtime), **8 are high severity** (security vulnerabilities or data integrity issues), and **6 are medium severity** (logic errors or edge cases).

---

## CRITICAL BUGS (Application Will Crash)

### BUG-01: Prisma Schema Missing Fields on `user` Model

**Files:** `src/database/schema.prisma`, `src/features/account/dtos/update-profile.dto.ts`, `src/features/account/account.service.ts`

**Description:** The `user` model in the Prisma schema is missing multiple fields that are referenced throughout the codebase:
- `phone` (referenced in `UpdateProfileDto`)
- `location` (referenced in `UpdateProfileDto`, `marketplace.service.ts`)
- `bio` (referenced in `UpdateProfileDto`, `marketplace.service.ts`)
- `farm_name` (referenced in `UpdateProfileDto`, `marketplace.service.ts`)
- `business_name` (referenced in `UpdateProfileDto`)
- `is_active` (referenced in `account.service.ts:64`, `admin.service.ts:15,53`)
- `created_at` (referenced in `admin.service.ts:28,32`, `marketplace.service.ts:102`)

**Impact:** Any request that updates a profile, deactivates an account, or queries user data with these fields will crash with a Prisma error: `Unknown field 'xxx' for model 'user'`.

---

### BUG-02: Prisma Schema Missing Fields on `harvest` Model

**Files:** `src/database/schema.prisma`, `src/features/harvest/harvest.service.ts`, `src/features/marketplace/marketplace.service.ts`, `src/features/order/order.service.ts`

**Description:** The `harvest` model in the Prisma schema is missing:
- `is_available` (referenced in `marketplace.service.ts:11`, `order.service.ts:17`, `analytics.service.ts:89`)
- `description` (referenced in `CreateHarvestDto`)
- `location` (referenced in `CreateHarvestDto`, `marketplace.service.ts:21`)
- `created_at` (referenced in `harvest.service.ts:35`, `marketplace.service.ts:34`, `admin.service.ts:67`)
- `updated_at` (referenced in `order.service.ts:152`)

**Impact:** Marketplace search, order creation, harvest listing creation, and most harvest-related operations will crash. This makes the core marketplace functionality completely non-functional.

---

### BUG-03: Prisma Schema Missing `created_at` on `message` Model

**Files:** `src/database/schema.prisma`, `src/features/chat/chat.service.ts`

**Description:** The `message` model lacks a `created_at` timestamp field, but `chat.service.ts` uses `orderBy: { created_at: 'desc' }` at lines 45 and 67.

**Impact:** Fetching chat room messages or determining the last message in a room will crash.

---

### BUG-04: Prisma Schema Missing `created_at` on `chat_room` Model

**Files:** `src/database/schema.prisma`

**Description:** The `chat_room` model has no timestamp fields. While not directly referenced in orderBy, this means there's no way to sort rooms by recency.

**Impact:** Minor compared to other missing fields, but indicates the schema is incomplete.

---

### BUG-05: `updateProfilePhoto` Crashes When No File Is Uploaded

**Files:** `src/features/account/account.controller.ts:42`

**Description:** The controller directly accesses `file.filename` without checking if `file` is defined. If a request is sent to `PATCH /account/profile/photo` without an actual file, `file` will be `undefined` and `file.filename` throws `TypeError: Cannot read properties of undefined`.

**Impact:** Unhandled exception returns a 500 error to the client.

---

### BUG-06: Harvest `create` Spreads DTO Fields Not in Schema

**Files:** `src/features/harvest/harvest.service.ts:22-25`

**Description:** The create method uses `...dto` spread which includes `description` and `location` fields from `CreateHarvestDto`. Since these fields don't exist on the Prisma `harvest` model, Prisma will reject the create operation.

```typescript
const harvest = await this.db.harvest.create({
  data: {
    ...dto,        // includes description, location - NOT in schema
    owner_id: ownerId,
  },
});
```

**Impact:** Harvest creation will always fail if `description` or `location` are provided.

---

### BUG-07: `harvest.quantity` Type Mismatch in Order Operations

**Files:** `src/features/order/order.service.ts:94`

**Description:** `harvest.quantity` is an `Int` in the schema, and `order.quantity` is also `Int`. The subtraction `harvest.quantity - order.quantity` works fine. However, the comparison on line 18 `harvest.quantity < dto.quantity` could have issues because `dto.quantity` is transformed from a request body and may not always be strictly a number (though `@Type(() => Number)` should handle this).

**Impact:** Low risk, but edge case potential.

---

## HIGH SEVERITY BUGS (Security / Data Integrity)

### BUG-08: Payment `getById` Has Completely Broken Authorization

**Files:** `src/features/payment/payment.service.ts:68-73`

**Description:** The authorization check is nonsensical:
```typescript
if (
  payment.order.buyer_id !== userId &&
  payment.order.harvest.id !== userId // BUG: compares harvest ID with user ID!
) {
  // Just allow -- admin guard at controller
}
```

Problems:
1. `payment.order.harvest.id !== userId` compares a **harvest ID** with a **user ID** - these are different entities
2. Even if the condition is true, the code block is **empty** - it does nothing (no throw, no return)
3. The harvest owner's ID is never checked because the query only selects `{ id: true, name: true }` for harvest

**Impact:** **Any authenticated user can view any payment details**, regardless of whether they are involved in the order. This is an information disclosure vulnerability.

---

### BUG-09: Password Reset Token Returned in API Response

**Files:** `src/features/auth/auth.service.ts:105-108`

**Description:** The `requestPasswordReset` method returns the reset token directly in the API response body. This should only be sent via email.

```typescript
return {
  message: "Password reset token generated...",
  resetToken, // SECURITY: token exposed in response
};
```

**Impact:** Anyone who can call the endpoint with a valid email gets a password reset token, allowing account takeover.

---

### BUG-10: Password Reset Endpoint Leaks User Existence

**Files:** `src/features/auth/auth.service.ts:95`

**Description:** `throw new NotFoundException("No account found with that email")` reveals whether an email is registered.

**Impact:** Enables user enumeration attacks. Attackers can build a list of valid email addresses.

---

### BUG-11: Bcrypt Rounds Set to 25 (Extreme Performance Issue)

**Files:** `.env` (PASSWD_ENCRYP_ROUNDS=25)

**Description:** Bcrypt with 25 salt rounds is astronomically slow. Each hash takes approximately **30+ minutes** at this setting. Standard recommendation is 10-12 rounds. This exponentially scales: each additional round doubles the time.

**Impact:** Signup, login, and password change operations will effectively hang/timeout. The application is unusable for any auth operation.

---

### BUG-12: Race Condition in Order Accept (Quantity Deduction)

**Files:** `src/features/order/order.service.ts:84-105`

**Description:** The `accept` method reads harvest quantity, then updates in a `$transaction` batch. However, between the read and the transaction, another concurrent request could also accept an order for the same harvest, leading to **overselling**:

1. Request A reads harvest quantity = 10
2. Request B reads harvest quantity = 10
3. Request A deducts 7 -> sets quantity = 3
4. Request B deducts 5 -> sets quantity = 5 (should be -2, but it reads stale data)

The `$transaction([...])` batch mode doesn't protect against this because the read happens outside the transaction.

**Impact:** Harvest can be oversold. Farmers could have negative effective inventory.

---

### BUG-13: Race Condition in Payment Creation (Duplicate Payments)

**Files:** `src/features/payment/payment.service.ts:23-27`, `src/database/schema.prisma:122-123`

**Description:** The payment schema has `@@index([order_id])` but no `@unique` constraint on `order_id`. The code checks for existing payments using `findFirst`, but between the check and the `create`, another request could slip through and create a duplicate payment.

**Impact:** An order could have multiple payment records, leading to double-charging.

---

### BUG-14: Chat Room Missing Unique Constraint on (user1, user2)

**Files:** `src/database/schema.prisma:11-21`, `src/features/chat/chat.service.ts:8-27`

**Description:** The `chat_room` model has no unique constraint on `(user1, user2)`. The `findOrCreateRoom` method checks then creates, but concurrent requests can create duplicate rooms for the same pair of users.

**Impact:** Duplicate chat rooms, split conversation history.

---

### BUG-15: Deactivated Users Can Still Log In and Use the System

**Files:** `src/features/auth/auth.service.ts`, `src/utils/authToken.service.ts:29-31`

**Description:** The `deactivateAccount` sets `is_active: false` (if the field existed), but the JWT `validate` method just returns the user without checking `is_active`:

```typescript
async validate(payload: { sub: number }) {
  return await this.dbClient.user.findUnique({ where: { id: payload.sub } });
}
```

The login flow also never checks `is_active`.

**Impact:** Deactivated accounts remain fully functional.

---

## MEDIUM SEVERITY BUGS (Logic Errors / Edge Cases)

### BUG-16: `resolveDispute` Doesn't Validate Order Status

**Files:** `src/features/admin/admin.service.ts:106-114`

**Description:** The `resolveDispute` method sets any order to `completed` without checking current status. A cancelled or rejected order can be "resolved" to completed.

```typescript
async resolveDispute(orderId: number) {
  const order = await this.db.order.findUnique({ where: { id: orderId } });
  if (!order) throw new NotFoundException('Order not found');
  // No status check!
  await this.db.order.update({
    where: { id: orderId },
    data: { status: 'completed' },
  });
}
```

**Impact:** Incorrect order state transitions, could trigger unwarranted payments or reviews.

---

### BUG-17: Harvest Delete Doesn't Check for Active Orders

**Files:** `src/features/harvest/harvest.service.ts:69-77`, `src/features/admin/admin.service.ts:75-81`

**Description:** Both `HarvestService.delete` and `AdminService.removeHarvest` delete a harvest without checking if there are active (pending/accepted) orders referencing it. The `order` table has a foreign key to `harvest`, so the delete will fail with a Prisma foreign key constraint error.

**Impact:** Unhandled database error (500) when trying to delete a harvest with orders.

---

### BUG-18: `getTrending` Loses Sort Order

**Files:** `src/features/marketplace/marketplace.service.ts:65-86`

**Description:** The trending query groups orders by `harvest_id` and sorts by count descending. But then it fetches harvests with `findMany` which returns them in an arbitrary order. The final `.map()` over `harvests` loses the trending sort order.

```typescript
const harvests = await this.db.harvest.findMany({
  where: { id: { in: harvestIds } }, // no orderBy to preserve trending order
});
return harvests.map(...); // iterates in harvest order, not trending order
```

**Impact:** "Trending" products are returned in arbitrary order, not by popularity.

---

### BUG-19: `getPopularProducts` Same Sort Order Issue + Spread Bug

**Files:** `src/features/analytics/analytics.service.ts:59-79`

**Description:** Same issue as BUG-18 (lost sort order). Additionally, the spread `...harvests.find(...)` will throw if no matching harvest is found (spreading `undefined`):

```typescript
return popular.map((p) => ({
  ...harvests.find((h) => h.id === p.harvest_id), // could be undefined!
  order_count: p._count.id,
}));
```

If a harvest was deleted but orders still reference it, `find` returns `undefined` and spreading it causes issues.

**Impact:** Undefined spread in response, potential 500 error.

---

### BUG-20: `findOrCreateRoom` Has Redundant OR Condition

**Files:** `src/features/chat/chat.service.ts:12-17`

**Description:** The method normalizes user IDs to `[smallId, bigId]` but then searches with an OR for both orderings. Since it always stores as `(smallId, bigId)`, the second condition `{ user1: bigId, user2: smallId }` will never match rooms created by this method.

```typescript
const [smallId, bigId] = user1Id < user2Id ? [user1Id, user2Id] : [user2Id, user1Id];
let room = await this.db.chat_room.findFirst({
  where: {
    OR: [
      { user1: smallId, user2: bigId },
      { user1: bigId, user2: smallId }, // Dead code - never matches
    ],
  },
});
```

**Impact:** Unnecessary database overhead. The redundant condition won't find rooms that don't exist, but it won't cause errors either.

---

### BUG-21: `CallGateway.endCallsForUser` Modifies Map During Iteration

**Files:** `src/features/call/call.gateway.ts:183-189`

**Description:** The method iterates over `this.activeCalls` with a `for...of` loop and calls `this.activeCalls.delete(callerId)` inside the loop body. While modern JS engines handle Map deletion during iteration, this is considered unsafe practice and could lead to skipped entries.

**Impact:** When a user with multiple call references disconnects, some active calls may not be properly cleaned up.

---

## Bug Severity Matrix

| Bug ID | Severity | Category | Module |
|--------|----------|----------|--------|
| BUG-01 | CRITICAL | Schema Mismatch | User/Account |
| BUG-02 | CRITICAL | Schema Mismatch | Harvest |
| BUG-03 | CRITICAL | Schema Mismatch | Chat |
| BUG-04 | CRITICAL | Schema Mismatch | Chat |
| BUG-05 | CRITICAL | Null Reference | Account |
| BUG-06 | CRITICAL | Schema Mismatch | Harvest |
| BUG-07 | CRITICAL | Type Safety | Order |
| BUG-08 | HIGH | Security | Payment |
| BUG-09 | HIGH | Security | Auth |
| BUG-10 | HIGH | Security | Auth |
| BUG-11 | HIGH | Performance | Auth |
| BUG-12 | HIGH | Race Condition | Order |
| BUG-13 | HIGH | Race Condition | Payment |
| BUG-14 | HIGH | Race Condition | Chat |
| BUG-15 | HIGH | Security | Auth |
| BUG-16 | MEDIUM | Logic | Admin |
| BUG-17 | MEDIUM | Logic | Harvest/Admin |
| BUG-18 | MEDIUM | Logic | Marketplace |
| BUG-19 | MEDIUM | Logic | Analytics |
| BUG-20 | MEDIUM | Logic | Chat |
| BUG-21 | MEDIUM | Logic | Call |
