import { getMockedQuestions, mockedProductivity } from './mockedConstants';
import { calculateProductivity } from './productivityCalc';

const mockedQuestions = getMockedQuestions();
const productivity = calculateProductivity(mockedQuestions);

describe('calculatePromockedProductivity', () => {
  it('Correctly outputs first regular value', () => {
    expect(productivity.first.regular).toEqual(
      mockedProductivity.first.regular
    );
  });
  it('Correctly outputs first enhanced value', () => {
    expect(productivity.first.enhanced).toEqual(
      mockedProductivity.first.enhanced
    );
  });
  it('Correctly outputs second regular value', () => {
    expect(productivity.second?.regular).toEqual(
      mockedProductivity.second.regular
    );
  });
  it('Correctly outputs second enhanced value', () => {
    expect(productivity.second?.enhanced).toEqual(
      mockedProductivity.second.enhanced
    );
  });
  it('Correctly outputs third regular value', () => {
    expect(productivity.third?.regular).toEqual(
      mockedProductivity.third.regular
    );
  });
  it('Correctly outputs third enhanced value', () => {
    expect(productivity.third?.enhanced).toEqual(
      mockedProductivity.third.enhanced
    );
  });
});
