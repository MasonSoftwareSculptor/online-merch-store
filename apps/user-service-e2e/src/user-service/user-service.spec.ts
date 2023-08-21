import axios from 'axios';

describe('POST /api/users', () => {
  it('should return an user entity', async () => {
    const payload = {
      username: 'tuancv',
      email: 'tuancv.dev@gmail.com',
      password: '12345678',
      firstName: 'Tuan',
      lastName: 'Can',
    };
    const expectedResult = {
      ...payload,
      password: undefined,
      id: '1',
    };
    const res = await axios.post(`/api/users`, payload);

    expect(res.status).toBe(201);
    expect(res.data).toEqual(expectedResult);
  });
});
