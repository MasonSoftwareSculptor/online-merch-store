import { Test } from '@nestjs/testing';
import { UpdateUserService } from '../services/update-user.service';
import { UpdateUserUseCase } from '../use-cases/update-user.usecase';

describe('UpdateUserService', () => {
  let service: UpdateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [{ provide: UpdateUserUseCase, useClass: UpdateUserService }],
    }).compile();

    service = app.get<UpdateUserUseCase>(UpdateUserUseCase);
  });

  describe('execute', () => {
    it('should be throw "Method not implemented."', () => {
      expect(() => service.execute()).toThrow('Method not implemented.');
    });
  });
});
