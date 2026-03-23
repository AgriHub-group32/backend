import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ChatService } from './chat.service';
import type { user } from '../../generated/prisma/index';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('rooms')
  getRooms(@CurrentUser() user: user) {
    return this.chatService.getUserRooms(user.id);
  }

  @Post('rooms')
  createRoom(@CurrentUser() user: user, @Body('user_id', ParseIntPipe) otherUserId: number) {
    return this.chatService.findOrCreateRoom(user.id, otherUserId);
  }

  @Get('rooms/:id/messages')
  getMessages(
    @Param('id', ParseIntPipe) roomId: number,
    @CurrentUser() user: user,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.chatService.getRoomMessages(
      roomId,
      user.id,
      page ? parseInt(page) : 1,
      limit ? parseInt(limit) : 50,
    );
  }
}
