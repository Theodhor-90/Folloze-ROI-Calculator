import { formatToLargeNumber } from '../utils/utils';
import { IQuestionState, IResultState } from '../views/survey/Survey';
import { constrainLargeNumber, getValueFromId } from './results';

export const calculateProductivity: (
  questions: IQuestionState[]
) => IResultState = (questions) => {
  const first =
    getValueFromId(20, questions) * getValueFromId(21, questions) * 0.1;
  const second =
    (getValueFromId(22, questions) / 2000) *
    getValueFromId(23, questions) *
    getValueFromId(26, questions) *
    2;
  const third =
    (getValueFromId(24, questions) / 2000) *
    getValueFromId(25, questions) *
    getValueFromId(26, questions) *
    2;
  return {
    group: 'revenue',
    first: {
      regular: '300%',
      enhanced: '400%',
    },
    second: {
      regular: '2 hours',
      enhanced: '2.5 hours',
    },
    third: {
      regular: `$${formatToLargeNumber(
        constrainLargeNumber(first + second + third)
      )}`,
      enhanced: `$${formatToLargeNumber(
        constrainLargeNumber((first + second + third) * 1.25)
      )}`,
    },
  };
};
