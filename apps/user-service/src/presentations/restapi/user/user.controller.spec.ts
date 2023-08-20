import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '@restapi/user/user.controller';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserService, UpdateUserService } from '@domains/user/services';
import { CreateUserDto } from '@restapi/user/dtos';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';

describe('UserController', () => {
  let app: TestingModule;
  let controller: UserController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [NestUtilModule],
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
      const results = await controller.create(payload);

      // Assert
      expect(results.password).not.toBe(payload.password);
      expect(results).toEqual({
        ...payload,
        password: expect.not.stringMatching(payload.password),
      });
    });
  });

  describe('update', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => controller.update({})).toThrow('Method not implemented.');
    });
  });
});
