import { Controller, Post, Body, Patch } from '@nestjs/common';

import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';

@Controller('users')
export class UserController {
  constructor(
    private createUserService: CreateUserUseCase,
    private updateUserService: UpdateUserUseCase
  ) {}

  @Post()
  create(@Body() payload: any) {
    return this.createUserService.execute(payload);
  }

  @Patch(':id')
  update(@Body() payload: any) {
    return this.updateUserService.execute(payload);
  }
}
