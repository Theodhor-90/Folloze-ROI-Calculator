import { FC } from 'react'
import { TInputType } from '../../static/questions'
import { PercentageInput } from './PercentageInput'
import { NumericalInput } from './NumericalInput'

export type TToggleStep = (direction: 'up' | 'down') => void

export interface IInputProps {
    inputType: TInputType
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    toggleStep?: TToggleStep
    hasError?: boolean
    value: number | string
}

export const Input: FC<IInputProps> = ({
    inputType,
    onChange,
    toggleStep,
    hasError,
    value,
}) => {
    return inputType === 'percentage' ? (
        <PercentageInput
            inputType={inputType}
            onChange={onChange}
            hasError={hasError}
            value={value}
        />
    ) : (
        <NumericalInput
            inputType={inputType}
            onChange={onChange}
            hasError={hasError}
            value={value}
            toggleStep={toggleStep as TToggleStep}
        />
    )
}
