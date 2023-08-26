import { UserEntity } from '../entities/user.entity';

export abstract class FindAllUserUseCase {
  abstract execute(): Promise<UserEntity[]>;
}
