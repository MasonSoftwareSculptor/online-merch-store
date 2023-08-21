export interface CreateUserInterface {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserResp {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
