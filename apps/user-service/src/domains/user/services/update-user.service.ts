import { Injectable } from '@nestjs/common';
import { UpdateUserUseCase } from '../use-cases/update-user.usecase';

@Injectable()
export class UpdateUserService implements UpdateUserUseCase {
  execute(): void {
    throw new Error('Method not implemented.');
  }
}
