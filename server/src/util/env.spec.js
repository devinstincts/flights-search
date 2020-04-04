import env from './env';

describe('env', () => {
  it('env vars', () => {
    expect(env.port).toEqual(5000);
    expect(env.flightSearchUrl).toEqual('http://localhost:4000/flights');
  });
});
