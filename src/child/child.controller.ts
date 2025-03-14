import { Controller, Get } from '@nestjs/common';
import { ChildService } from './child.service';

@Controller()
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Get()
  getChildren(): string {
    return this.childService.getChildren();
  }
}
