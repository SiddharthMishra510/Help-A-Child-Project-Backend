import { Module } from "@nestjs/common";
import { ChildrenModule } from "./children/children.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), ChildrenModule],
})
export class AppModule {}
