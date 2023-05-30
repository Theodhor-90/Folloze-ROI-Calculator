import { FC, useEffect, useState } from 'react'
import { TInputType } from '../../static/questions'

export type TRangeOption = {
    value: number
    label: number | string
}

export interface IInputProps {
    inputType: TInputType
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    hasError?: boolean
    value: number | string
}

export const PercentageInput: FC<IInputProps> = ({
    inputType,
    onChange,
    hasError,
    value,
}) => {

    const calculateBackground = (value: number) => {
        const ratio = value / 100
        return `linear-gradient(90deg, #7F45E1 ${32.76 * ratio}%, #226AF8 ${value}%, #ECECEC ${value}%, #ECECEC 100%)`        
    }

    const [gradient, setGradient] = useState(calculateBackground(value as number))

    useEffect(() => {
        setGradient(calculateBackground(value as number))
    },[value])

    const percentageDataList = [
        {
            label: '0%',
            value: 0,
        },
        {
            label: '25%',
            value: 25,
        },
        {
            label: '50%',
            value: 50,
        },
        {
            label: '75%',
            value: 75,
        },
        {
            label: '100%',
            value: 100,
        },
    ]
    return (
        <>
            <div className='input-controls'>
                <div className={`input d-flex ${hasError ? 'has-error' : ''}`}>
                    <input
                        type='number'
                        onChange={(e) => onChange(e)}
                        autoFocus
                        value={value.toString()}
                        step={0.5}
                    />
                    <div className='symbol'>%</div>
                </div>
            </div>
            <div className='d-flex'>
                <div className='fw'>
                    <input
                        className='fw'
                        type='range'
                        min={0}
                        max={100}
                        step={0.5}
                        onChange={(e) => onChange(e)}
                        value={value.toString()}
                        list={'values'}
                        style={{background: gradient}}
                    />
                </div>
            </div>
            <datalist className='datalist'>
                {percentageDataList.map((el, index) => (
                    <div className='option-wrapper' key={`option-${index}`}>
                        <span></span>
                        <option
                            value={el.value}
                            label={el.label.toString()}
                        ></option>
                    </div>
                ))}
            </datalist>
        </>
    )
}
