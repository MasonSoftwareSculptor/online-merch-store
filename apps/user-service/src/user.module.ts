import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';

@Module({
  controllers: [UserController],
  providers: [
    { useClass: CreateUserService, provide: CreateUserUseCase },
    { useClass: UpdateUserService, provide: UpdateUserUseCase },
  ],
})
export class UserModule {}
