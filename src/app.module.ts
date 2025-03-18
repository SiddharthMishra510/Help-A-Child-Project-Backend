import { Module } from '@nestjs/common';
import { ChildrenModule } from './children/children.module';

@Module({
  imports: [ChildrenModule],
})
export class AppModule {}
