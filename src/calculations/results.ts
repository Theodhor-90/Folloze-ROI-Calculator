import { TQuestionGroup } from '../static/questions';
import { IResultState, IQuestionState } from '../views/survey/Survey';
import { calculateCosts } from './costsCalc';
import { calculateProductivity } from './productivityCalc';
import { calculateRevenue } from './revenueCalc';

// Constrain unrealistic inputs
export const constrainLargeNumber: (entry: number) => number = (entry) => {
  return entry > 100000000000 ? 100000000000 : entry;
};

export const getValueFromId: (
  id: number,
  questionsList: IQuestionState[]
) => number = (id, questionsList) => {
  const selectedQuestion = questionsList.find(
    (el) => el.id === id
  ) as IQuestionState;
  return selectedQuestion.type === 'currency' ||
    selectedQuestion.type === 'plain'
    ? parseInt(selectedQuestion.value.toString().split(',').join(''))
    : (selectedQuestion.value as number);
};

export const calculateResults: (
  selectedGroups: TQuestionGroup[],
  questionsList: IQuestionState[]
) => IResultState[] = (selectedGroups, questionsList) => {
  const finalResults = [] as IResultState[];
  const groupResults = {
    costs: [] as IQuestionState[],
    revenue: [] as IQuestionState[],
    productivity: [] as IQuestionState[],
  };
  selectedGroups.forEach((group) => {
    if (group.checked) {
      questionsList.forEach((question) => {
        if (question.group === group.group) {
          groupResults[group.group].push(question);
        }
      });
    }
  });
  if (groupResults.costs.length) {
    finalResults.push(calculateCosts(questionsList));
  }
  if (groupResults.revenue.length) {
    finalResults.push(calculateRevenue(questionsList));
  }
  if (groupResults.productivity.length) {
    finalResults.push(calculateProductivity(questionsList));
  }

  return finalResults;
};
