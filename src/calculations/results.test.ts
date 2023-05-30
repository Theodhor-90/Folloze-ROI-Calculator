import {
  getMockedQuestions,
  mockedCosts,
  mockedProductivity,
  mockedRevenue,
  mockedGroupsAllChecked,
  mockedGroupsCostsChecked,
} from './mockedConstants';

import { calculateResults } from './results';

const fullResults = calculateResults(
  mockedGroupsAllChecked,
  getMockedQuestions()
);
const partialResults = calculateResults(
  mockedGroupsCostsChecked,
  getMockedQuestions()
);

describe('calculateResults', () => {
  it('Correctly calculates all groups if all are selected', () => {
    expect(fullResults.length).toEqual(3);
  });
  it('Correctly calculates only one group if only one is selected', () => {
    expect(partialResults.length).toEqual(1);
  });
  it('Correctly integrates calculateCosts', () => {
    expect(partialResults[0].first.regular).toEqual(mockedCosts.first.regular);
  });
  it('Correctly integrates calculateRevenue', () => {
    expect(fullResults[1].first.regular).toEqual(mockedRevenue.first.regular);
  });
  it('Correctly integrates calculateProductivity', () => {
    expect(fullResults[2].first.regular).toEqual(
      mockedProductivity.first.regular
    );
  });
});
