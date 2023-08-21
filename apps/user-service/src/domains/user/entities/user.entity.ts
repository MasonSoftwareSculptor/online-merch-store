import { Exclude, Expose } from 'class-transformer';

export class UserEntity {
  @Exclude({ toClassOnly: true })
  id: string;
  username: string;
  email: string;

  @Exclude({ toPlainOnly: true })
  password: string;

  @Expose({ name: 'firstName', toPlainOnly: true })
  first_name: string;

  @Expose({ name: 'lastName', toPlainOnly: true })
  last_name: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
