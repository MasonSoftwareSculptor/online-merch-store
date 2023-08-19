import { Controller, Post, Body, Patch } from '@nestjs/common';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserDto, UpdateUserDto } from '@restapi/user/dtos';

@Controller('users')
export class UserController {
  constructor(
    private createUserService: CreateUserUseCase,
    private updateUserService: UpdateUserUseCase
  ) {}

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.createUserService.execute(payload);
  }

  @Patch(':id')
  update(@Body() payload: UpdateUserDto) {
    return this.updateUserService.execute(payload);
  }
}
