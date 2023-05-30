import { calculateCosts } from './costsCalc';
import { getMockedQuestions, mockedCosts } from './mockedConstants';

const mockedQuestions = getMockedQuestions();
const costs = calculateCosts(mockedQuestions);

describe('calculateCosts', () => {
  it('Correctly outputs first regular value', () => {
    expect(costs.first.regular).toEqual(mockedCosts.first.regular);
  });
  it('Correctly outputs first enhanced value', () => {
    expect(costs.first.enhanced).toEqual(mockedCosts.first.enhanced);
  });
  it('Correctly outputs second regular value', () => {
    expect(costs.second?.regular).toEqual(mockedCosts.second.regular);
  });
  it('Correctly outputs second enhanced value', () => {
    expect(costs.second?.enhanced).toEqual(mockedCosts.second.enhanced);
  });
});
