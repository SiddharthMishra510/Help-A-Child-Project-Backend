import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  UseGuards,
  NotFoundException,
} from "@nestjs/common";
import { CreateChildDto } from "./dto/create-child.dto";
import { ChildrenService } from "./children.service";
import { Child } from "./interfaces/child.interface";
import { AuthGuard } from "@nestjs/passport";

@Controller("children")
export class ChildrenController {
  constructor(private childrenService: ChildrenService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  async create(@Body() createChildDto: CreateChildDto): Promise<Child> {
    return this.childrenService.create(createChildDto);
  }

  @Get()
  async findAll(): Promise<Child[]> {
    return this.childrenService.findAll();
  }

  @Get(":id")
  async find(@Param("id") id: string): Promise<Child> {
    const child = await this.childrenService.find(id);
    if (!child) {
      throw new NotFoundException("Child not found");
    }
    return child;
  }

  @Put(":id/donate")
  async addDonation(@Param("id") id: string, @Body() body: { amount: number }) {
    return this.childrenService.addDonation(id, body.amount);
  }

  @Delete()
  @UseGuards(AuthGuard("jwt"))
  async deleteAll() {
    await this.childrenService.deleteAll();
  }
}
