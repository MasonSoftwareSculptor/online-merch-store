import { Injectable } from '@nestjs/common';
// import { plainToInstance } from 'class-transformer';
import { CreateUserUseCase } from '@domains/user/use-cases';
import { CreateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';
// import { UserRepository } from '@domains/user/repositories/user.repository';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  async execute(payload: CreateUserInterface): Promise<UserEntity> {
    console.log('--- payload: ', payload);
    // await this.userRepository.create(plainToInstance(UserEntity, payload));
    throw new Error('Method not implemented.');
  }
}
