import { isSup } from '../src';

describe('isSup', () => {
  it('returns true', () => {
    expect(isSup('SUP')).toEqual(true);
    expect(isSup('sup')).toEqual(true);
    expect(isSup('sUp')).toEqual(true);
    expect(isSup('sup!!')).toEqual(true);
  });
  it('retuns false', () => {
    expect(isSup('hello')).toEqual(false);
    expect(isSup('whats up')).toEqual(false);
    expect(isSup('hi, sup?')).toEqual(false);
  });
});
