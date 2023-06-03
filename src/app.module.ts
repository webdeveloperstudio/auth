import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppsModule } from './apps/apps.module';
import { RestgatewayModule } from './restgateway/restgateway.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongodb',
        url: process.env.MONGODB_URI,
        database: process.env.MONGODB_DB,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        subscribers: [__dirname + "/**/subscriber/*.subscriber{.ts,.js}"]
      }),
    }),    
    UsersModule,
    AppsModule,
    RestgatewayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
