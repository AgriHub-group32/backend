import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('users')
  getUsers(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('type') type?: string,
    @Query('is_active') isActive?: string,
  ) {
    return this.adminService.getUsers(
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 20,
      type,
      isActive !== undefined ? isActive === 'true' : undefined,
    );
  }

  @Patch('users/:id/verify')
  verifyUser(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.verifyUser(id);
  }

  @Patch('users/:id/deactivate')
  deactivateUser(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.deactivateUser(id);
  }

  @Get('harvests')
  getHarvests(@Query('page') page?: string, @Query('limit') limit?: string) {
    return this.adminService.getHarvests(
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 20,
    );
  }

  @Delete('harvests/:id')
  removeHarvest(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.removeHarvest(id);
  }

  @Get('orders')
  getOrders(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
  ) {
    return this.adminService.getOrders(
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 20,
      status,
    );
  }

  @Patch('orders/:id/resolve')
  resolveDispute(@Param('id', ParseIntPipe) id: number) {
    return this.adminService.resolveDispute(id);
  }
}
