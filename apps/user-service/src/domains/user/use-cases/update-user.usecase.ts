import { UserEntity } from '@domains/user/entities/user.entity';

export abstract class UpdateUserUseCase {
  abstract execute(payload: UserEntity): Promise<UserEntity>;
}
