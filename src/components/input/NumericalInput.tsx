import { FC } from 'react'
import { TInputType } from '../../static/questions'
import { icons } from '../../icons/IconIndex'
import { TToggleStep } from './Input'

export interface IInputProps {
    inputType: TInputType
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    toggleStep: TToggleStep
    hasError?: boolean
    value: number | string
}

export const NumericalInput: FC<IInputProps> = ({
    inputType,
    onChange,
    hasError,
    toggleStep,
    value,
}) => {
    const Plus = () => <icons.controls.plus stroke='#0077FF' />
    const Minus = () => <icons.controls.minus stroke='#0077FF' />

    const handleKeypress: (e: React.KeyboardEvent<HTMLDivElement>) => void = (
        e
    ) => {
        if (e.key === 'ArrowUp') {
            toggleStep('up')
        } else if (e.key === 'ArrowDown') {
            toggleStep('down')
        }
    }
    return (
        <div className='input-controls numerical'>
            <div className='control minus' onClick={() => toggleStep('down')}>
                <div className='icon-container'>
                    <Minus />
                </div>
            </div>
            <div className={`input d-flex ${hasError ? 'has-error' : ''}`}>
                {inputType === 'currency' && <div className='symbol'>$</div>}
                <input
                    type='text'
                    onChange={(e) => onChange(e)}
                    value={value.toString()}
                    autoFocus
                    onKeyUp={(e) => handleKeypress(e)}
                />
            </div>
            <div className='control plus' onClick={() => toggleStep('up')}>
                <div className='icon-container'>
                    <Plus />
                </div>
            </div>
        </div>
    )
}
