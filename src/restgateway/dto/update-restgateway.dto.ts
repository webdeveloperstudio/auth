import { PartialType } from '@nestjs/mapped-types';
import { CreateRestgatewayDto } from './create-restgateway.dto';

export class UpdateRestgatewayDto extends PartialType(CreateRestgatewayDto) {}
