import { Module } from '@nestjs/common';
import { RestgatewayService } from './restgateway.service';
import { RestgatewayController } from './restgateway.controller';

@Module({
  controllers: [RestgatewayController],
  providers: [RestgatewayService]
})
export class RestgatewayModule {}
