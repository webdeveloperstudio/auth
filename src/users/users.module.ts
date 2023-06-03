import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTokenEntity } from './entities/user.token.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserTokenEntity]),
    JwtModule.register({
      global: true
    })
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
