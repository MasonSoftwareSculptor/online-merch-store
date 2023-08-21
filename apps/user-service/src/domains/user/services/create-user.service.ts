import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from '@domains/user/use-cases';
import { UserEntity } from '@domains/user/entities/user.entity';
import { UserRepository } from '@domains/user/repositories/user.repository';

@Injectable()
export class CreateUserService implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userEntity: UserEntity): Promise<UserEntity> {
    return await this.userRepository.create(userEntity);
  }
}
