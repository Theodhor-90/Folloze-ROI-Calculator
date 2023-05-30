import { FC, useEffect, useState } from 'react'
import { Button } from '../../components/button/Button'
import { icons } from '../../icons/IconIndex'
import { ProgressBar } from '../../components/progressBar/ProgressBar'
import { initialQuestion, IQuestion, questions, surveyOptions } from '../../static/questions'
import { Question } from '../../features/question/Question'
import { Result } from '../../features/result/Result'
import { formatDecimal, formatToLargeNumber } from '../../utils/utils'
import { TToggleStep } from '../../components/input/Input'
import { calculateResults } from '../../calculations/results'

export interface IQuestionState extends IQuestion {
    group: keyof typeof questions
}

export type TResultSingle = {
    regular: string
    enhanced: string
}

export interface IResultState {
    group: 'costs' | 'revenue' | 'productivity'
    first: TResultSingle
    second?: TResultSingle
    third?: TResultSingle
}

export const Survey: FC<{}> = () => {
    const [stage, setStage] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [canGoNext, setCanGoNext] = useState(false)
    const [resultList, setResultList] = useState([] as IResultState[])
    const [progress, setProgress] = useState(0)
    const [selectedGroups, setSelectedGroups] = useState(surveyOptions)
    const [questionsList, setQuestionsList] = useState([] as IQuestionState[])

    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = structuredClone(questionsList) as IQuestionState[]

        switch (newState[questionIndex].type) {
            case 'plain':
                const stringifiedValue = e.target.value.split(',').join('')
                newState[questionIndex].value =
                    e.target.value === '' || isNaN(parseInt(e.target.value))
                        ? '0'
                        : formatToLargeNumber(parseInt(stringifiedValue))
                break
            case 'percentage':
                isNaN(parseInt(e.target.value)) || parseFloat(e.target.value) <= 0
                    ? (newState[questionIndex].value = 0)
                    : parseFloat(e.target.value) > 100
                    ? (newState[questionIndex].value = 100)
                    : (newState[questionIndex].value = formatDecimal(parseFloat(e.target.value)))
                break
            case 'currency':
                const stringifiedCurrency = e.target.value.split(',').join('')
                newState[questionIndex].value =
                    e.target.value === '' || isNaN(parseInt(e.target.value))
                        ? '0'
                        : formatToLargeNumber(parseInt(stringifiedCurrency))
        }
        setQuestionsList(newState)
    }

    const updateValueByStep: TToggleStep = (direction) => {
        const newState = structuredClone(questionsList) as IQuestionState[]
        const targetValue = newState[questionIndex].value as string
        const parsedValue = parseInt(targetValue.split(',').join(''))
        const step = newState[questionIndex].increment as number
        const newValue =
            direction === 'up'
                ? parsedValue + step
                : parsedValue - step < 0
                ? 0
                : parsedValue - step
        newState[questionIndex].value = formatToLargeNumber(newValue)
        setQuestionsList(newState)
    }

    const goNext = () => {
        if (stage === 0) {
            startSurvey()
        } else if (stage === 1) {
            if (questionIndex < questionsList.length - 1) {
                setQuestionIndex(questionIndex + 1)
            } else {
                buildResults()
                setStage(2)
            }
        } else if (stage === 2) {
            resetSurvey()
        }
    }

    const goPrev = () => {
        if (stage === 1) {
            if (questionIndex === 0) {
                setStage(0)
            } else {
                setQuestionIndex(questionIndex - 1)
            }
        } else if (questionIndex === questionsList.length - 1 && stage === 2) {
            setStage(1)
        }
    }

    const updateSelection = (index: number) => {
        const newState = structuredClone(selectedGroups)
        newState[index].checked = !newState[index].checked
        setSelectedGroups(newState)
    }

    const buildSurvey = () => {
        const generatedQuestions = [] as IQuestionState[]
        selectedGroups.forEach((el) => {
            if (el.checked) {
                questions[el.group].forEach((singleQuestion) => {
                    generatedQuestions.push({
                        ...singleQuestion,
                        group: el.group,
                    })
                })
            }
        })
        setQuestionsList(generatedQuestions)
    }

    const buildResults = () => {
        const finalResults = calculateResults(selectedGroups, questionsList)
        setResultList(finalResults)
    }

    const startSurvey = () => {
        buildSurvey()
        setStage(1)
    }

    const resetSurvey: () => void = () => {
        setSelectedGroups(surveyOptions)
        setQuestionIndex(0)
        setStage(0)
    }

    useEffect(() => {
        let isThereASelection = false
        if (selectedGroups.find((el) => el.checked)) {
            isThereASelection = true
        }
        setCanGoNext(isThereASelection)
    }, [selectedGroups])

    useEffect(() => {
        if (stage === 0) {
            setProgress(0)
        } else if (stage === 2) {
            setProgress(100)
        } else {
            const actualProgress = ((questionIndex + 1) / (questionsList.length + 1)) * 100
            if (actualProgress < 0) {
                setProgress(0)
            } else if (actualProgress > 100) {
                setProgress(100)
            } else setProgress(actualProgress)
        }
    }, [stage, questionIndex])

    const ArrowRight = () => <icons.arrow.right stroke='white' />
    return (
        <div className={`survey folloze-container ${stage === 2 ? 'showing-results' : ''}`}>
            <div>
                {stage !== 2 && (
                    <div className='mobile-only'>
                        <ProgressBar completed={progress} />
                    </div>
                )}
                {stage === 2 ? (
                    <Result
                        results={resultList}
                        resetSurvey={resetSurvey}
                    />
                ) : (
                    <div className={`${stage === 1 ? 'initial-question' : ''}`}>
                        {stage === 0 && (
                            <Question
                                question={initialQuestion}
                                onClick={updateSelection}
                                onChange={updateInputValue}
                                options={selectedGroups}
                            />
                        )}
                        {stage === 1 && (
                            <Question
                                key={questionIndex}
                                question={questionsList[questionIndex]}
                                onClick={updateSelection}
                                onChange={updateInputValue}
                                questionIndex={questionIndex}
                                value={questionsList[questionIndex].value}
                                toggleStep={updateValueByStep}
                            />
                        )}
                    </div>
                )}
            </div>

            {stage !== 2 && (
                <div className='controls fw'>
                    <div className='d-flex justify-between buttons-wrapper'>
                        <Button
                            text='Previous'
                            callBack={goPrev}
                            variant='secondary'
                            disabled={stage === 0}
                            className={stage === 0 ? 'invisible' : ''}
                        />
                        <Button
                            text={
                                stage === 1 && questionIndex === questionsList.length - 1
                                    ? 'See my results'
                                    : 'Next question'
                            }
                            callBack={goNext}
                            variant='primary'
                            icon={ArrowRight}
                            disabled={!canGoNext}
                        />
                    </div>
                    <div className='hide-mobile'>
                        <ProgressBar completed={progress} />
                    </div>
                </div>
            )}
        </div>
    )
}
