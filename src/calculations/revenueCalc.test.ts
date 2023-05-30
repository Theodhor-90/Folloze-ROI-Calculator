import { getMockedQuestions, mockedRevenue } from './mockedConstants';
import { calculateRevenue } from './revenueCalc';

const mockedQuestions = getMockedQuestions();
const revenue = calculateRevenue(mockedQuestions);

describe('calculateRevenue', () => {
  it('Correctly outputs first regular value', () => {
    expect(revenue.first.regular).toEqual(mockedRevenue.first.regular);
  });
  it('Correctly outputs first enhanced value', () => {
    expect(revenue.first.enhanced).toEqual(mockedRevenue.first.enhanced);
  });
  it('Correctly outputs second regular value', () => {
    expect(revenue.second?.regular).toEqual(mockedRevenue.second.regular);
  });
  it('Correctly outputs second enhanced value', () => {
    expect(revenue.second?.enhanced).toEqual(mockedRevenue.second.enhanced);
  });
  it('Correctly outputs third regular value', () => {
    expect(revenue.third?.regular).toEqual(mockedRevenue.third.regular);
  });
  it('Correctly outputs third enhanced value', () => {
    expect(revenue.third?.enhanced).toEqual(mockedRevenue.third.enhanced);
  });
});
