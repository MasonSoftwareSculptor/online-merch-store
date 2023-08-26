import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { users } from '@mocks/users';

export class UserRepositoryImplMock implements UserRepository {
  findActiveUsers(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    const user = users.find((u) => u.email === entity.email);
    return Object.assign(user, entity);
  }

  async update(entity: UserEntity): Promise<UserEntity> {
    const user = users.find((u) => u.id === entity.id);
    return Object.assign(user, entity);
  }
}
