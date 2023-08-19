import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  execute(): void {
    throw new Error('Method not implemented.');
  }
}
