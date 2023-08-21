import { Test } from '@nestjs/testing';
import { UpdateUserService } from '@domains/user/services';
import { UserRepository } from '@domains/user/repositories/user.repository';
import { UserEntity } from '@domains/user/entities/user.entity';
import {
  updateUserEntityPayload,
  users,
  UserRepositoryImplMock,
} from '@mocks/index';

describe('UpdateUserService', () => {
  let service: UpdateUserService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        UpdateUserService,
        { provide: UserRepository, useClass: UserRepositoryImplMock },
      ],
    }).compile();

    service = app.get<UpdateUserService>(UpdateUserService);
  });

  describe('execute', () => {
    it('should return an user entity', async () => {
      // Arrange
      const payload: UserEntity = <UserEntity>updateUserEntityPayload;
      const expectedResult = users.find((user) => user.id === payload.id);

      // Act
      const results = await service.execute(payload);

      // Assert
      expect(results).toEqual(expectedResult);
    });
  });
});
