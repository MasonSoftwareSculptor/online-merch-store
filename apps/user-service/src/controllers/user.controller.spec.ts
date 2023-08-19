import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { CreateUserUseCase, UpdateUserUseCase } from '@domains/user/use-cases';
import { CreateUserService, UpdateUserService } from '@domains/user/services';

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
      await expect(() => controller.create({})).rejects.toThrow(
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
