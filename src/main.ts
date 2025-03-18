import { NestFactory } from '@nestjs/core';
import { ChildrenModule } from './children/children.module';

async function bootstrap() {
  const app = await NestFactory.create(ChildrenModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
