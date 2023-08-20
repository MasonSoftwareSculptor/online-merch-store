import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT_OR_ROUNDS } from '../constants';

@Injectable()
export class BcryptUtil {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_OR_ROUNDS);
  }

  async verify(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
