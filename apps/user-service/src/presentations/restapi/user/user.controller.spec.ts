import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserDto } from '@restapi/user/dtos';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { users, createUserPayload } from '@mocks/users';

describe('UserController', () => {
  let app: TestingModule;
  let controller: UserController;
  const userRepository = { create: async () => users[0] };

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [NestUtilModule],
      controllers: [UserController],
      providers: [
        { provide: CreateUserUseCase, useClass: CreateUserService },
        { provide: UpdateUserUseCase, useClass: UpdateUserService },
        { provide: UserRepository, useValue: userRepository },
      ],
    }).compile();

    controller = app.get<UserController>(UserController);
  });

  describe('create', () => {
    it('should return an user entity', async () => {
      // Arrange
      const userPayload = <CreateUserDto>createUserPayload;

      // Act
      const results = await controller.create(userPayload);

      // Assert
      expect(results).toEqual(users[0]);
    });
  });

  describe('update', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => controller.update({})).toThrow('Method not implemented.');
    });
  });
});
