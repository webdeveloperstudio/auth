import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestgatewayService } from './restgateway.service';
import { CreateRestgatewayDto } from './dto/create-restgateway.dto';
import { UpdateRestgatewayDto } from './dto/update-restgateway.dto';

@Controller('restgateway')
export class RestgatewayController {
  constructor(private readonly restgatewayService: RestgatewayService) {}

  @Post()
  create(@Body() createRestgatewayDto: CreateRestgatewayDto) {
    return this.restgatewayService.create(createRestgatewayDto);
  }

  @Get()
  findAll() {
    return this.restgatewayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restgatewayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestgatewayDto: UpdateRestgatewayDto) {
    return this.restgatewayService.update(+id, updateRestgatewayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restgatewayService.remove(+id);
  }
}
