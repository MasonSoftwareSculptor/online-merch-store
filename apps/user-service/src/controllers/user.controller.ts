import { Controller, Get, Post } from '@nestjs/common';

import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';

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
