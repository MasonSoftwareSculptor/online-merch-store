import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserUseCase } from '@domains/user/use-cases';
import { CreateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';
// import { UserRepository } from '@domains/user/repositories/user.repository';
import { BcryptUtil } from '@online-merch-store/libs/nest/src';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  constructor(private bcryptUtil: BcryptUtil) {}

  async execute(payload: CreateUserInterface): Promise<UserEntity> {
    const hashedPass = await this.bcryptUtil.hash(payload.password);
    const userEntity = plainToInstance(UserEntity, {
      ...payload,
      password: hashedPass,
    });
    // await this.userRepository.create(plainToInstance(UserEntity, payload));
    return userEntity;
  }
}
