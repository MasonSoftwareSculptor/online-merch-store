import { Test } from '@nestjs/testing';
import { UpdateUserService } from '@domains/user/services';
import { UpdateUserUseCase } from '@domains/user/use-cases';

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
