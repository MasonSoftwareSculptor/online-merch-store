import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CreateUserService } from './domains/user/services/create-user.service';
import { CreateUserUseCase } from './domains/user/use-cases/create-user.usecase';
import { UpdateUserService } from './domains/user/services/update-user.service';
import { UpdateUserUseCase } from './domains/user/use-cases/update-user.usecase';

@Module({
  controllers: [UserController],
  providers: [
    { useClass: CreateUserService, provide: CreateUserUseCase },
    { useClass: UpdateUserService, provide: UpdateUserUseCase },
  ],
})
export class UserModule {}
