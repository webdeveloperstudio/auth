import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.APP_PORT || 3000;
  app.listen(PORT).then(() => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();
