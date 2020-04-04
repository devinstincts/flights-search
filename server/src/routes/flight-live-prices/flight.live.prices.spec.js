import axios from 'axios';
import flightLivePrices from '.';

jest.mock('axios', () => ({
  // Require the original module to not be mocked...
  ...jest.requireActual('axios'),
  get: jest.fn(),
}));

/* eslint no-underscore-dangle: [2, { "allow": ["__get__"] }] */
const flightLivePricesService = flightLivePrices.__get__('flightLivePricesService');

describe('Flight Search', () => {
  const query = {};

  it('Flight search', async () => {
    const ctx = {
      query,
      response: {},
    };
    axios.get.mockResolvedValue({ data: { test: true } });
    await flightLivePricesService(ctx);
    expect(ctx.response.body).toEqual({ test: true });
  });

  it('Flight search with error', async () => {
    const ctx = {
      query,
      response: {},
    };
    axios.get.mockRejectedValue({ data: { test: true } });
    await expect(flightLivePricesService(ctx)).rejects.toEqual({ data: { test: true } });
  });
});
