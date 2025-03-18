import { Injectable } from '@nestjs/common';
import { Child } from './interfaces/child.interface';

@Injectable()
export class ChildrenService {
  private readonly children: Child[] = [];

  create(child: Child): Child {
    this.children.push(child);
    return child;
  }

  findAll(): Promise<Child[]> {
    return Promise.resolve(this.children);
  }
}
