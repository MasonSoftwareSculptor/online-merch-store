import { UserEntity } from '@domains/user/entities/user.entity';
import { FindAllUserUseCase } from '@domains/user/use-cases';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUserService implements FindAllUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
