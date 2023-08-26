import { Exclude } from 'class-transformer';

export class UserEntity {
  @Exclude({ toClassOnly: true })
  id: string;
  username: string;
  email: string;

  @Exclude({ toPlainOnly: true })
  password: string;
  firstName: string;
  lastName: string;

  @Exclude({ toClassOnly: true })
  createdAt: Date;

  @Exclude({ toClassOnly: true })
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
