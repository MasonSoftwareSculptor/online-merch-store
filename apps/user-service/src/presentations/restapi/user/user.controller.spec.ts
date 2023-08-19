import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserDto } from '@restapi/user/dtos';

describe('UserController', () => {
  let app: TestingModule;
  let controller: UserController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { useClass: CreateUserService, provide: CreateUserUseCase },
        { useClass: UpdateUserService, provide: UpdateUserUseCase },
      ],
    }).compile();

    controller = app.get<UserController>(UserController);
  });

  describe('create', () => {
    it('should be throw "Method not implemented."', async () => {
      // Arrange
      const payload: CreateUserDto = {
        username: 'tuancv',
        email: 'tuancv.dev@gmail.com',
        password: '12345678',
        firstName: 'Tuan',
        lastName: 'Can',
      };

      // Act

      // Assert
      await expect(() => controller.create(payload)).rejects.toThrow(
        'Method not implemented.'
      );
    });
  });

  describe('update', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => controller.update({})).toThrow('Method not implemented.');
    });
  });
});
