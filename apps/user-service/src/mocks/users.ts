export const users = [
  {
    id: 'uuid1',
    username: 'tuancv',
    email: 'tuancv.dev@gmail.com',
    password: 'hashedPasswordForTuanCV',
    first_name: 'Tuan',
    last_name: 'Can',
  },
  {
    id: 'uuid2',
    username: 'tuancv2',
    email: 'tuancv2.dev@gmail.com',
    password: 'hashedPasswordForTuanCV2',
    first_name: 'Tuan',
    last_name: 'Can',
  },
];

export const createUserEntityPayload = {
  username: 'tuancv',
  email: 'tuancv.dev@gmail.com',
  password: 'hashedPasswordForTuanCV',
  first_name: 'Tuan',
  last_name: 'Can',
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
  first_name: 'Mason',
};

export const updateUserPayload = {
  firstName: 'Mason',
};
