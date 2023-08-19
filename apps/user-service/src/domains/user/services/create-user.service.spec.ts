import { Test } from '@nestjs/testing';
import { CreateUserService } from '@domains/user/services';
import { CreateUserUseCase } from '@domains/user/use-cases';
import { CreateUserInterface } from '@domains/user/interfaces';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [{ provide: CreateUserUseCase, useClass: CreateUserService }],
    }).compile();

    service = app.get<CreateUserUseCase>(CreateUserUseCase);
  });

  describe('execute', () => {
    it('should be throw "Method not implemented."', async () => {
      // Arrange

      // Act
      const results = service.execute({} as CreateUserInterface);

      // Assert
      expect(results).rejects.toThrow('Method not implemented.');
    });
  });
});
