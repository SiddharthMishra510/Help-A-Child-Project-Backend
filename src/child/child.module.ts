import { Module } from '@nestjs/common';
import { ChildrenController } from './children.controller';
import { ChildrenService } from './children.service';

@Module({
  imports: [],
  controllers: [ChildrenController],
  providers: [ChildrenService],
})
export class ChildModule {}
