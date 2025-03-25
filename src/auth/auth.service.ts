import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException("Invalid credentials");
    const passwordValid = password === user.password;
    if (!passwordValid) throw new UnauthorizedException("Invalid credentials");

    return user;
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
