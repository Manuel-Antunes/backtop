// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from './app';

describe('Server', () => {
  it('should return hello world when access / route', async () => {
    await request(app).get('/').expect(200).expect('hello samba');
  });
  it('should return hello and the name if it called in /:name', async () => {
    const name = 'ronald';
    await request(app).get(`/${name}`).expect(200).expect(`hello ${name}`);
  });
});
