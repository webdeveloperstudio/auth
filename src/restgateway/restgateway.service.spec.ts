import { Test, TestingModule } from '@nestjs/testing';
import { RestgatewayService } from './restgateway.service';

describe('RestgatewayService', () => {
  let service: RestgatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestgatewayService],
    }).compile();

    service = module.get<RestgatewayService>(RestgatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
