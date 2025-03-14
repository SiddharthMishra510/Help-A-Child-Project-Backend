import { Injectable } from '@nestjs/common';

@Injectable()
export class ChildService {
  getChildren(): string {
    return 'Hello World!';
  }
}
