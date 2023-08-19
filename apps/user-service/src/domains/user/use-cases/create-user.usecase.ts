import { CreateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';

export abstract class CreateUserUseCase {
  abstract execute(payload: CreateUserInterface): Promise<UserEntity>;
}
