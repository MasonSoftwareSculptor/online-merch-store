import { Injectable } from '@nestjs/common';
import { UserEntity } from '@domains/user/entities/user.entity';
import { BaseRepository } from '@domains/user/repositories/base.repository';

@Injectable()
export abstract class UserRepository extends BaseRepository<UserEntity> {
  abstract findActiveUsers(): Promise<UserEntity[]>;
}
