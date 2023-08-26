import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserService } from '@online-merch-store/prisma-data-access/data-access-users';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private userService: UserService) {}

  async create(entity: UserEntity): Promise<UserEntity> {
    return this.userService.createUser(entity);
  }
  async update(entity: UserEntity): Promise<UserEntity> {
    return {
      ...entity,
      id: '1',
    };
  }
}
