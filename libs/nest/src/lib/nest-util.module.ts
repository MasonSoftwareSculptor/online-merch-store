import { Module } from '@nestjs/common';
import { BcryptUtil } from './utils';

@Module({
  controllers: [],
  providers: [BcryptUtil],
  exports: [BcryptUtil],
})
export class NestUtilModule {}
