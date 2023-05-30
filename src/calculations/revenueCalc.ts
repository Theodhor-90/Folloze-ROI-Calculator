import { formatToLargeNumber } from '../utils/utils';
import { IQuestionState, IResultState } from '../views/survey/Survey';
import { constrainLargeNumber, getValueFromId } from './results';

export const calculateRevenue: (questions: IQuestionState[]) => IResultState = (
  questions
) => {
  const first =
    getValueFromId(10, questions) *
    2 *
    (getValueFromId(11, questions) / 100) *
    (getValueFromId(12, questions) / 100) *
    getValueFromId(14, questions);
  const second = first * (getValueFromId(13, questions) / 100);

  return {
    group: 'revenue',
    first: {
      regular: '400%',
      enhanced: '500%',
    },
    second: {
      regular: `$${formatToLargeNumber(constrainLargeNumber(first))}`,
      enhanced: `$${formatToLargeNumber(constrainLargeNumber(first * 1.25))}`,
    },
    third: {
      regular: `$${formatToLargeNumber(constrainLargeNumber(second))}`,
      enhanced: `$${formatToLargeNumber(constrainLargeNumber(second * 1.25))}`,
    },
  };
};
