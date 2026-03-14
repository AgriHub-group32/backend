import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { CallGateway } from './call.gateway.js';

@Module({
  imports: [AuthModule],
  providers: [CallGateway],
})
export class CallModule {}
