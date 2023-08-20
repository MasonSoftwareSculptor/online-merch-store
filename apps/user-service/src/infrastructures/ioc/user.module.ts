import { Module } from '@nestjs/common';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
// import { NestUtilModule } from '@online-merch-store/libs/nest/src';

@Module({
  // imports: [NestUtilModule],
  controllers: [UserController],
  providers: [
    { useClass: CreateUserService, provide: CreateUserUseCase },
    { useClass: UpdateUserService, provide: UpdateUserUseCase },
  ],
})
export class UserModule {}
