import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserUseCase } from '@domains/user/use-cases';
import { CreateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';
// import { UserRepository } from '@domains/user/repositories/user.repository';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  async execute(payload: CreateUserInterface): Promise<UserEntity> {
    const userEntity = plainToInstance(UserEntity, payload);
    console.log('--- payload: ', userEntity);
    // await this.userRepository.create(plainToInstance(UserEntity, payload));
    return userEntity;
  }
}
