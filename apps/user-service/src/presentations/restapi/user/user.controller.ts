import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserDto, UpdateUserDto } from '@restapi/user/dtos';
import { UserEntity } from '@domains/user/entities/user.entity';
import { BcryptUtil } from '@online-merch-store/libs/nest/src';

@Controller('users')
export class UserController {
  constructor(
    private createUserService: CreateUserUseCase,
    private updateUserService: UpdateUserUseCase,
    private bcryptUtil: BcryptUtil
  ) {}

  @Post()
  async create(@Body() payload: CreateUserDto) {
    // Transform payload
    const hashedPass = await this.bcryptUtil.hash(payload.password);
    const userEntityPayload: UserEntity = plainToInstance(UserEntity, {
      ...payload,
      password: hashedPass,
    });

    // Transform user entity before response
    const userCreated: UserEntity = new UserEntity(
      await this.createUserService.execute(userEntityPayload)
    );

    return userCreated;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    if (payload.password) {
      payload.password = await this.bcryptUtil.hash(payload.password);
    }
    const userEntityPayload: UserEntity = plainToInstance(UserEntity, payload);
    userEntityPayload.id = id;
    const userUpdated: UserEntity = new UserEntity(
      await this.updateUserService.execute(userEntityPayload)
    );

    return userUpdated;
  }
}
