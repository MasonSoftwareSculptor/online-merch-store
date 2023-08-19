import { Injectable } from '@nestjs/common';

import { CreateUserUseCase } from '@domains/user/use-cases';
import { CreateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  async execute(payload: CreateUserInterface): Promise<UserEntity> {
    console.log('--- payload: ', payload);
    throw new Error('Method not implemented.');
  }
}
