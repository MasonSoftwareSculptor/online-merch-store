import { Test } from '@nestjs/testing';
import { CreateUserService } from '../services/create-user.service';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [{ provide: CreateUserUseCase, useClass: CreateUserService }],
    }).compile();

    service = app.get<CreateUserUseCase>(CreateUserUseCase);
  });

  describe('execute', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => service.execute()).toThrow('Method not implemented.');
    });
  });
});
