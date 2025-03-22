import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CreateChildDto } from './dto/create-children.dto';
import { ChildrenService } from './children.service';
import { Child } from './interfaces/child.interface';

@Controller('children')
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @Post()
  async create(@Body() createChildDto: CreateChildDto): Promise<Child> {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  async findAll(): Promise<Child[]> {
    return this.childrenService.findAll();
  }

  @Delete()
  async deleteAll() {
    this.childrenService.deleteAll();
  }
}
