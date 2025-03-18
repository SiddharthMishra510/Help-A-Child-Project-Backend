import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateChildDto } from './dto/create-children.dto';
import { ChildrenService } from './children.service';
import { Child } from './interfaces/child.interface';

@Controller('children')
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @Post()
  create(@Body() createChildDto: CreateChildDto): Child {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  findAll(): Promise<Child[]> {
    return this.childrenService.findAll();
  }
}
