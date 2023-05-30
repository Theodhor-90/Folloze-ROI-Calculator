import { formatToLargeNumber } from '../utils/utils';
export type TDescriptionLine = {
    text: string
    link: string | false
}

export type TInputType = 'plain' | 'percentage' | 'currency'

export interface IBasicQuestion {
    question: string
    description: TDescriptionLine[]
    type: TInputType
}

export interface IQuestion extends IBasicQuestion {
    id: number | string
    value: number | string
    increment?: number
}

export interface IQuestionGroups {
    costs: IQuestion[]
    revenue: IQuestion[]
    productivity: IQuestion[]
}

export const initialQuestion = {
    type: 'plain',
    question: 'How Folloze provides value',
    description: [
        {
            text: 'Select from the pulldown menu to see how Folloze can improve your business.',
            link: false,
        },
    ],
    value: ''
} as IQuestion

export const surveyOptions = [
    {
        group: 'costs',
        text: 'Saves your business time and Money',
        checked: false,
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
] as TQuestionGroup[]

export type TQuestionGroup = {
    group: 'costs' | 'revenue' | 'productivity'
    text: string
    checked: boolean
}

export const questions: IQuestionGroups = {
    costs: [
        {
            type: 'currency',
            question: 'Average cost to outsource the creation of a microsite',
            description: [
                {
                    text: 'Using an agency, contractor, etc, how much does it cost marketing to create a microsite?',
                    link: false,
                },
            ],
            value: formatToLargeNumber(10000),
            id: 0,
            increment: 1000
        },
        {
            type: 'plain',
            question:
                'Average # of hours it takes a internal, or external web team to create a microsite',
            description: [
                {
                    text: 'Don’t forget to include hours need for feedback, changes and updates',
                    link: false,
                },
            ],
            value: formatToLargeNumber(8),
            id: 1,
            increment: 1
        },
        {
            type: 'plain',
            question:
                'How many microsites or campaigns does marketing run in a year?',
            description: [
                {
                    text: 'Count each unique campaign separately. ',
                    link: false,
                },
                {
                    text: 'Some companies run 100s of campaigns over the year.',
                    link: false,
                },
            ],
            value: formatToLargeNumber(25),
            id: 2,
            increment: 5
        },
    ],
    revenue: [
        {
            type: 'plain',
            question: 'How many MQLs does marketing generate?',
            description: [
                {
                    link: false,
                    text: 'Enter the number of Marketing Qualified Leads that from all sources per year.',
                },
            ],
            value: formatToLargeNumber(50000),
            id: 10,
            increment: 5000
        },
        {
            type: 'percentage',
            question: 'What percentage of MQLs convert to SQLs?',
            description: [
                {
                    text: 'A good MQL to SQL rate is 13%. ',
                    link: 'https://ppcexpo.com/blog/mql-to-sql-conversion-rate#:~:text=What%20is%20a%20good%20MQL,SQLs%20out%20of%20100%20MQLs',
                },
                {
                    text: 'Our conservative default is 10%. ',
                    link: false,
                },
                {
                    text: 'Enter any percentage that fits your business.',
                    link: false,
                },
            ],
            value: 10,
            id: 11
        },
        {
            type: 'percentage',
            question: "What is marketing's current conversion rate?",
            description: [
                {
                    text: 'Please enter the percentage of leads that fill out a form, or otherwise provide their business information to marketing.',
                    link: false,
                },
            ],
            value: 2.5,
            id: 12
        },
        {
            type: 'percentage',
            question: "What is the Sales Team's Opportunity Win Rate?",
            description: [
                {
                    text: 'Many businesses expect a 4:1 (25%) pipeline to revenue ratio. ',
                    link: 'https://garysmithpartnership.com/pipeline-coverage/',
                },
                {
                    text: 'What % fits your business?',
                    link: false,
                },
            ],
            value: 20,
            id: 13
        },
        {
            type: 'currency',
            question: 'What is your companies ASP',
            description: [
                {
                    text: 'Please enter the average sales price for your company.',
                    link: false,
                },
            ],
            value: formatToLargeNumber(50000),
            id: 14,
            increment: 5000
        },
    ],
    productivity: [
        {
            type: 'currency',
            question: 'What is your Marketing FTE?',
            description: [],
            value: formatToLargeNumber(10000),
            id: 20,
            increment: 1000
        },
        {
            type: 'plain',
            question: 'How many Marketers do you have?',
            description: [],
            value: formatToLargeNumber(10),
            id: 21,
            increment: 1
        },
        {
            type: 'currency',
            question: 'What is your SDR FTE?',
            description: [],
            value: formatToLargeNumber(80000),
            id: 22,
            increment: 10000
        },
        {
            type: 'plain',
            question: 'How many SDRs do you have?',
            description: [],
            value: formatToLargeNumber(10),
            id: 23,
            increment: 1
        },
        {
            type: 'currency',
            question: 'What is your FTE? for your Account Executives/Managers',
            description: [],
            value: formatToLargeNumber(160000),
            id: 24,
            increment: 10000
        },
        {
            type: 'plain',
            question: 'How many AE/AMs do you have?',
            description: [],
            value: formatToLargeNumber(20),
            id: 25,
            increment: 1
        },
        {
            type: 'plain',
            question: 'How many Campaigns are you looking to run?',
            description: [],
            value: formatToLargeNumber(20),
            id: 26,
            increment: 1
        },
    ],
}
