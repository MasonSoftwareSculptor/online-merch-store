import { Injectable } from '@nestjs/common';
import { UpdateUserUseCase } from '@domains/user/use-cases/update-user.usecase';
import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';

@Injectable()
export class UpdateUserService implements UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userEntity: UserEntity): Promise<UserEntity> {
    return await this.userRepository.update(userEntity);
  }
}
