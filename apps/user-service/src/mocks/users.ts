export const users = [
  {
    id: 'uuid1',
    username: 'tuancv',
    email: 'tuancv.dev@gmail.com',
    password: 'hashedPasswordForTuanCV',
    firstName: 'Tuan',
    lastName: 'Can',
    createdAt: new Date('2023-08-26T11:31:28.319Z'),
    updatedAt: new Date('2023-08-26T11:32:28.319Z'),
  },
  {
    id: 'uuid2',
    username: 'tuancv2',
    email: 'tuancv2.dev@gmail.com',
    password: 'hashedPasswordForTuanCV2',
    firstName: 'Tuan',
    lastName: 'Can',
    createdAt: new Date('2023-08-26T11:31:28.319Z'),
    updatedAt: new Date('2023-08-26T11:32:28.319Z'),
  },
];

export const createUserEntityPayload = {
  username: 'tuancv',
  email: 'tuancv.dev@gmail.com',
  password: 'hashedPasswordForTuanCV',
  firstName: 'Tuan',
  lastName: 'Can',
};

export const createUserPayload = {
  username: 'tuancv',
  email: 'tuancv.dev@gmail.com',
  password: 'hashedPasswordForTuanCV',
  firstName: 'Tuan',
  lastName: 'Can',
};

export const updateUserEntityPayload = {
  id: 'uuid1',
  firstName: 'Mason',
};

export const updateUserPayload = {
  firstName: 'Mason',
  password: '123456',
};
