import { Injectable } from '@nestjs/common';
import { UpdateUserUseCase } from '@domains/user/use-cases/update-user.usecase';
import { UpdateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';

@Injectable()
export class UpdateUserService implements UpdateUserUseCase {
  execute(payload: UpdateUserInterface): Promise<UserEntity> {
    console.log('--- update: ', payload);
    throw new Error('Method not implemented.');
  }
}
