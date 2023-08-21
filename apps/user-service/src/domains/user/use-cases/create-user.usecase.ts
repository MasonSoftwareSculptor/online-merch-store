import { UserEntity } from '@domains/user/entities/user.entity';

export abstract class CreateUserUseCase {
  abstract execute(userEntity: UserEntity): Promise<UserEntity>;
}
