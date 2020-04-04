import STATUS_CODES from './status-codes';

describe('StatusCodes', () => {
  it('STATUS_CODES vars', () => {
    expect(STATUS_CODES.CREATED).toBe(201);
    expect(STATUS_CODES.NOT_MODIFIED).toBe(304);
  });
});
