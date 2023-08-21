import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserDto } from '@restapi/user/dtos';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';
import { UserRepository } from '@domains/user/repositories/user.repository';
import {
  users,
  createUserPayload,
  UserRepositoryImplMock,
  updateUserPayload,
} from '@mocks/index';
import { UserEntity } from '@domains/user/entities/user.entity';

describe('UserController', () => {
  let app: TestingModule;
  let controller: UserController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [NestUtilModule],
      controllers: [UserController],
      providers: [
        { provide: CreateUserUseCase, useClass: CreateUserService },
        { provide: UpdateUserUseCase, useClass: UpdateUserService },
        { provide: UserRepository, useClass: UserRepositoryImplMock },
      ],
    }).compile();

    controller = app.get<UserController>(UserController);
  });

  describe('create', () => {
    it('should return an user entity', async () => {
      // Arrange
      const userPayload = <CreateUserDto>createUserPayload;
      const expectedResult: UserEntity = users.find(
        (user) => user.email === userPayload.email
      );

      // Act
      const results = await controller.create(userPayload);

      // Assert
      expect(results).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should be throw "Method not implemented."', async () => {
      // Arrange
      const userPayload = <CreateUserDto>updateUserPayload;
      const expectedResult: UserEntity = users.find(
        (user) => user.id === users[0].id
      );

      // Act
      const results = await controller.update(users[0].id, userPayload);

      // Assert
      expect(results).toEqual(expectedResult);
    });
  });
});
