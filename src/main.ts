import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
})();
