import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User, UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException("Invalid credentials.");

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new UnauthorizedException("Invalid credentials.");

    return user;
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return { token };
  }

  async signup(email: string, password: string): Promise<{ token: string }> {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) throw new ConflictException("Email already in use.");

    if (!password) {
      throw new UnauthorizedException("Passwords cannot be empty.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createUser(email, hashedPassword);

    const payload = { sub: newUser.id, email: newUser.email };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
