import { FC } from 'react'
import { icons } from '../../icons/IconIndex'

export type TCheckboxOption = 'costs' | 'revenue' | 'productivity'

export interface ICheckboxProps {
    text: string
    checked: boolean
    onClick: () => void
    option?: TCheckboxOption
}

export const Checkbox: FC<ICheckboxProps> = ({
    text,
    checked,
    onClick,
    option,
}) => {
    const CheckedIcon = () => <icons.controls.check stroke='white' />
    const handleKeypress: (e: React.KeyboardEvent<HTMLDivElement>) => void = (
        e
    ) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

    const CostsOption = () => <icons.folloze.optionCosts />
    const RevenueOption = () => <icons.folloze.optionRevenue />
    const ProductivityOption = () => <icons.folloze.optionProductivity />

    return (
        <div
            className={`checkbox  ${checked ? 'checked' : ''}`}
            onClick={onClick}
            tabIndex={0}
            onKeyUp={(e) => handleKeypress(e)}
        >
            <div className='option-status'>
                <div className='icon-container'>
                    <CheckedIcon />
                </div>
            </div>
            <div className='flex-mobile'>
                <div className='option-icon'>
                    <div className='icon-container'>
                        {option === 'costs' ? (
                            <CostsOption />
                        ) : option === 'revenue' ? (
                            <RevenueOption />
                        ) : (
                            <ProductivityOption />
                        )}
                    </div>
                </div>
                <div className='option-text'>{text}</div>
            </div>
        </div>
    )
}
