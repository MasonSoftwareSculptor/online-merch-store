import { Controller, Get, Post } from '@nestjs/common';

import { CreateUserUseCase } from '../domains/user/use-cases/create-user.usecase';
import { UpdateUserUseCase } from '../domains/user/use-cases/update-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    private createUserService: CreateUserUseCase,
    private updateUserService: UpdateUserUseCase
  ) {}

  @Get()
  create() {
    return this.createUserService.execute();
  }

  @Post()
  update() {
    return this.updateUserService.execute();
  }
}
