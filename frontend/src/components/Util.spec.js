import * as Util from './Util';

describe('dateToString', () => {
  it('should return empty string when no input provided', () => {
    const result = Util.dateToString();
    expect(result).toBeUndefined();
  })

  it('should return date with hour and minutes', () => {
    const result = Util.dateToString(1532901600000);
    expect(result).toBe('29-07-2018 22:00');
  })

  it('should append 0 as prefix when needed and return UTC', () => {
    const result = Util.dateToString(new Date(2018, 7, 2, 15, 25));
    expect(result).toBe('02-08-2018 12:25');
  });
});