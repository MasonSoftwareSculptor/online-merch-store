import { Test } from '@nestjs/testing';
import { CreateUserService } from '@domains/user/services';
import { CreateUserInterface } from '@domains/user/interfaces';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [NestUtilModule],
      providers: [CreateUserService],
    }).compile();

    service = app.get<CreateUserService>(CreateUserService);
  });

  describe('execute', () => {
    it('should be throw "Method not implemented."', async () => {
      // Arrange
      const payload: CreateUserInterface = {
        username: 'tuancv',
        email: 'tuancv.dev@gmail.com',
        password: '12345678',
        firstName: 'Tuan',
        lastName: 'Can',
      };

      // Act
      const results = await service.execute(payload);

      // Assert
      expect(results.password).not.toBe(payload.password);
      expect(results).toEqual({
        ...payload,
        password: expect.anything(),
      });
    });
  });
});
