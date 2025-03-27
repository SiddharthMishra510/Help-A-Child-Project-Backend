import { Controller, Post, Body, BadRequestException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string,
  ): Promise<{ token: string }> {
    return this.authService.login(email, password);
  }

  @Post("signup")
  async signup(
    @Body("email") email: string,
    @Body("password") password: string,
  ): Promise<{ token: string }> {
    if (!password) {
      throw new BadRequestException("Password is required");
    }
    return this.authService.signup(email, password);
  }
}
