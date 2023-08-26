import { Module } from '@nestjs/common';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { UserRepositoryImpl } from '@infrastructures/databases/mysql/user.repository';
import { DataAccessUsersModule } from '@online-merch-store/prisma-data-access/data-access-users';

@Module({
  imports: [NestUtilModule, DataAccessUsersModule],
  controllers: [UserController],
  providers: [
    { useClass: CreateUserService, provide: CreateUserUseCase },
    { useClass: UpdateUserService, provide: UpdateUserUseCase },
    { useClass: UserRepositoryImpl, provide: UserRepository },
  ],
})
export class UserModule {}
