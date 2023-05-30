import { motion, AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { Input, TToggleStep } from '../../components/input/Input'
import { QuestionTitle } from '../../components/questionTitle/QuestionTitle'
import { Selection } from '../../components/selection/Selection'
import { IBasicQuestion, TQuestionGroup } from '../../static/questions'

interface IQuestionProps {
    onClick: (index: number) => void
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    question: IBasicQuestion
    questionIndex?: number
    value?: number | string
    options?: TQuestionGroup[]
    toggleStep?: TToggleStep
}

export const Question: FC<IQuestionProps> = ({
    onClick,
    onChange,
    question,
    questionIndex,
    value,
    options,
    toggleStep,
}) => {
    return (
        <AnimatePresence
            initial={true}
            mode='wait'
        >
            <motion.div
                className='question-container'
                key={`question-${questionIndex}`}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                }}
            >
                <QuestionTitle
                    title={question.question}
                    description={question.description}
                />
                {options && (
                    <Selection
                        options={options}
                        onClick={onClick}
                    />
                )}
                {value !== undefined && (
                    <Input
                        key={questionIndex}
                        onChange={onChange}
                        value={value}
                        inputType={question.type}
                        toggleStep={toggleStep as TToggleStep}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    )
}
