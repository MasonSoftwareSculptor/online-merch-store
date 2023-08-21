import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';

export class UserRepositoryImpl extends UserRepository {
  async create(entity: UserEntity): Promise<UserEntity> {
    return {
      ...entity,
      id: '1',
    };
  }
  async update(entity: UserEntity): Promise<UserEntity> {
    return {
      ...entity,
      id: '1',
    };
  }
}
