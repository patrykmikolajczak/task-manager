import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userDto: UserDto) {
    const user = await this.usersService.create(
      userDto.email,
      userDto.password,
    );
    return { id: user.id, email: user.email };
  }
}
