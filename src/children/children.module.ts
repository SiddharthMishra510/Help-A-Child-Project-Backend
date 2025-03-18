import { Module } from '@nestjs/common';
import { ChildrenController } from './children.controller';
import { ChildrenService } from './children.service';
import { DatabaseModule } from '../db/db.module';

@Module({
  controllers: [ChildrenController],
  providers: [ChildrenService],
  imports: [DatabaseModule],
})
export class ChildrenModule {}
