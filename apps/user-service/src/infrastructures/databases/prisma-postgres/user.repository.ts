import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UserService } from '@online-merch-store/prisma-data-access/data-access-users';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private userService: UserService) {}

  async create(entity: UserEntity): Promise<UserEntity> {
    return this.userService.create(entity);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll({});
  }

  findActiveUsers(): Promise<UserEntity[]> {
    return this.userService.findAll({ where: { isVerify: true } });
  }

  findById(id: string): Promise<UserEntity> {
    return this.userService.findByUniqueKey({ id });
  }

  async update(entity: UserEntity): Promise<UserEntity> {
    return this.userService.update({
      where: { id: entity.id },
      data: entity,
    });
  }

  delete(id: string): Promise<UserEntity> {
    return this.userService.delete({ id });
  }
}
