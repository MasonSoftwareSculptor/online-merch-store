import { Test } from '@nestjs/testing';
import { BcryptUtil } from './bcrypt.util';

describe('BcryptUtil', () => {
  let util: BcryptUtil;
  const password = '12345678';
  const hashedPassword =
    '$2b$10$tLmka0W.a3Zvpb8893t4guV9A.4AwqrY7oTwFZiN7VzMwtXO2Fjve';
  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [BcryptUtil],
    }).compile();

    util = app.get<BcryptUtil>(BcryptUtil);
  });

  describe('hash', () => {
    it('should be return hashed password', async () => {
      // Arrange

      // Act
      const hashedPassword = await util.hash(password);

      // Assert
      expect(hashedPassword).toBe(hashedPassword);
    });
  });

  describe('verify', () => {
    it('should be return true', async () => {
      // Arrange

      // Act
      const isMatch = await util.verify(password, hashedPassword);

      // Assert
      expect(isMatch).toBeTruthy();
    });
  });
});
