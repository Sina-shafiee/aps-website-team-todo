import { sum } from './utils';

describe('utils - functionality', () => {
  it('should sum two number correctly and return the value', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
