import { Test, TestingModule } from '@nestjs/testing';
import { RestgatewayController } from './restgateway.controller';
import { RestgatewayService } from './restgateway.service';

describe('RestgatewayController', () => {
  let controller: RestgatewayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestgatewayController],
      providers: [RestgatewayService],
    }).compile();

    controller = module.get<RestgatewayController>(RestgatewayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
