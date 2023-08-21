import { Test } from '@nestjs/testing';
import { CreateUserService } from '@domains/user/services';
import { NestUtilModule } from '@online-merch-store/libs/nest/src';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { UserEntity } from '@domains/user/entities/user.entity';
import {
  createUserEntityPayload,
  users,
  UserRepositoryImplMock,
} from '@mocks/index';

describe('CreateUserService', () => {
  let service: CreateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [NestUtilModule],
      providers: [
        CreateUserService,
        { provide: UserRepository, useClass: UserRepositoryImplMock },
      ],
    }).compile();

    service = app.get<CreateUserService>(CreateUserService);
  });

  describe('execute', () => {
    it('should return an user entity', async () => {
      // Arrange
      const payload: UserEntity = <UserEntity>createUserEntityPayload;
      const expectedResult: UserEntity = users.find(
        (user) => user.email === payload.email
      );

      // Act
      const results = await service.execute(payload);

      // Assert
      expect(results).toEqual(expectedResult);
    });
  });
});
