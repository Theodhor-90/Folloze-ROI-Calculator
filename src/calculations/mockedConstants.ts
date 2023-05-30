import { TQuestionGroup, questions } from '../static/questions';
import { IQuestionState } from '../views/survey/Survey';

export const getMockedQuestions = () => {
  const output = [] as IQuestionState[];
  questions.costs.forEach((el) => {
    output.push({
      ...el,
      group: 'costs',
    });
  });
  questions.revenue.forEach((el) => {
    output.push({
      ...el,
      group: 'revenue',
    });
  });
  questions.productivity.forEach((el) => {
    output.push({
      ...el,
      group: 'productivity',
    });
  });
  return output;
};

export const mockedCosts = {
  first: {
    regular: '$250,000',
    enhanced: '$312,500',
  },
  second: {
    regular: '187.5 hours',
    enhanced: '234.4 hours',
  },
};

export const mockedRevenue = {
  first: {
    regular: '400%',
    enhanced: '500%',
  },
  second: {
    regular: '$12,500,000',
    enhanced: '$15,625,000',
  },
  third: {
    regular: '$2,500,000',
    enhanced: '$3,125,000',
  },
};

export const mockedProductivity = {
  first: {
    regular: '300%',
    enhanced: '400%',
  },
  second: {
    regular: '2 hours',
    enhanced: '2.5 hours',
  },
  third: {
    regular: '$90,000',
    enhanced: '$112,500',
  },
};

export const mockedGroupsAllChecked = [
  {
    group: 'costs',
    text: 'Saves your business time and Money',
    checked: true,
  },
  {
    group: 'revenue',
    text: 'Increases Pipeline and Revenue',
    checked: true,
  },
  {
    group: 'productivity',
    text: 'Improve Productivity',
    checked: true,
  },
] as TQuestionGroup[];

export const mockedGroupsCostsChecked = [
  {
    group: 'costs',
    text: 'Saves your business time and Money',
    checked: true,
  },
  {
    group: 'revenue',
    text: 'Increases Pipeline and Revenue',
    checked: false,
  },
  {
    group: 'productivity',
    text: 'Improve Productivity',
    checked: false,
  },
] as TQuestionGroup[];
