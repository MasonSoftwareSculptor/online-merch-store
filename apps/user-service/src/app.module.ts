import { Module } from '@nestjs/common';

import { UserModule } from '@infrastructures/ioc/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
