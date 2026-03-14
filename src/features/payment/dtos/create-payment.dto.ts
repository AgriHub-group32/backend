import { IsNumber, IsIn, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaymentDto {
  @Type(() => Number)
  @IsNumber()
  order_id: number;

  @IsString()
  @IsIn(['mobile_money', 'bank_transfer', 'cash', 'platform_wallet'])
  method: string;
}
