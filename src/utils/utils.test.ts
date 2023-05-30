import { formatDecimal, formatToLargeNumber } from './utils';

const unFormattedDecimal = 10.36551;
const formattedDecimal = 10.4;

describe('formatDecimal', () => {
  it('Rounds correctly 10.36551', () => {
    expect(formattedDecimal).toEqual(formatDecimal(unFormattedDecimal));
  });
  it('Outputs correctly 0', () => {
    expect(0).toEqual(formatDecimal(0));
  });
});
