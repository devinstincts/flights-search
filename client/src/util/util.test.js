import util from '.';

describe('util', () => {
  it('minutesInHrsAndMins', () => {
    expect(util.minutesInHrsAndMins(121)).toEqual('2h 1m');
  });

  it('stopsText Direct', () => {
    expect(util.stopsText([])).toEqual('Direct');
  });

  it('stopsText 1 stop', () => {
    expect(util.stopsText([{}])).toEqual('1 Stop');
  });

  it('stopsText 2 stops', () => {
    expect(util.stopsText([{}, {}])).toEqual('2 Stops');
  });
});
