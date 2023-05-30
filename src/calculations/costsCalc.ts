import { formatDecimal, formatToLargeNumber } from '../utils/utils';
import { IQuestionState, IResultState } from '../views/survey/Survey';
import { constrainLargeNumber, getValueFromId } from './results';

export const calculateCosts: (questions: IQuestionState[]) => IResultState = (
  questions
) => {
  const first = getValueFromId(0, questions) * getValueFromId(2, questions);
  const second =
    (getValueFromId(1, questions) - 0.5) * getValueFromId(2, questions);
  return {
    group: 'costs',
    first: {
      regular: `$${formatToLargeNumber(constrainLargeNumber(first))}`,
      enhanced: `$${formatToLargeNumber(constrainLargeNumber(first * 1.25))}`,
    },
    second: {
      regular: `${formatToLargeNumber(
        constrainLargeNumber(formatDecimal(second))
      )} hours`,
      enhanced: `${formatToLargeNumber(
        constrainLargeNumber(formatDecimal(second * 1.25))
      )} hours`,
    },
  };
};
