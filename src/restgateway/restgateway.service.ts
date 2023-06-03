import { Injectable } from '@nestjs/common';
import { CreateRestgatewayDto } from './dto/create-restgateway.dto';
import { UpdateRestgatewayDto } from './dto/update-restgateway.dto';

@Injectable()
export class RestgatewayService {
  create(createRestgatewayDto: CreateRestgatewayDto) {
    return 'This action adds a new restgateway';
  }

  findAll() {
    return `This action returns all restgateway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restgateway`;
  }

  update(id: number, updateRestgatewayDto: UpdateRestgatewayDto) {
    return `This action updates a #${id} restgateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} restgateway`;
  }
}
