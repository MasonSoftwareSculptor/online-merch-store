import { UpdateUserInterface } from '@domains/user/interfaces';
import { UserEntity } from '@domains/user/entities/user.entity';

export abstract class UpdateUserUseCase {
  abstract execute(payload: UpdateUserInterface): Promise<UserEntity>;
}
