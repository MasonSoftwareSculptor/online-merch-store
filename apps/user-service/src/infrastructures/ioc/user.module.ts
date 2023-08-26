import { Module } from '@nestjs/common';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import {
  CreateUserUseCase,
  FindAllUserUseCase,
  UpdateUserUseCase,
} from '@domains/user/use-cases';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { UserRepositoryImpl } from '@infrastructures/databases/prisma-postgres/user.repository';
import { DataAccessUsersModule } from '@online-merch-store/prisma-data-access/data-access-users';
import { FindAllUserService } from '@domains/user/services/find-all-user.service';

@Module({
  imports: [NestUtilModule, DataAccessUsersModule],
  controllers: [UserController],
  providers: [
    { useClass: CreateUserService, provide: CreateUserUseCase },
    { useClass: UpdateUserService, provide: UpdateUserUseCase },
    { useClass: FindAllUserService, provide: FindAllUserUseCase },
    { useClass: UserRepositoryImpl, provide: UserRepository },
  ],
})
export class UserModule {}
