import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { CreateUserService } from '../domains/user/services/create-user.service';
import { CreateUserUseCase } from '../domains/user/use-cases/create-user.usecase';
import { UpdateUserUseCase } from '../domains/user/use-cases/update-user.usecase';
import { UpdateUserService } from '../domains/user/services/update-user.service';

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
    it('should be throw "Method not implemented."', () => {
      expect(() => controller.create()).toThrow('Method not implemented.');
    });
  });

  describe('update', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => controller.update()).toThrow('Method not implemented.');
    });
  });
});
