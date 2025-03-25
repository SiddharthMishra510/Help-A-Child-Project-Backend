import { Module } from "@nestjs/common";
import { ChildrenModule } from "./children/children.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [ConfigModule.forRoot(), ChildrenModule, AuthModule],
})
export class AppModule {}
