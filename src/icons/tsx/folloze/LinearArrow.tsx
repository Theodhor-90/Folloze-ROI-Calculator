import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const LinearArrow: FC<IBasicIcon> = ({
    stroke = 'black',
    fill = 'none',
}) => {
    return (
        <svg
            width='18'
            height='24'
            viewBox='0 0 18 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M17.9677 8.98256L8.98384 0L0 8.98256L1.87796 10.8605L7.64257 5.09461V24H10.325V5.09461L16.0896 10.8605L17.9677 8.98256Z'
                fill='url(#paint0_linear_16820_31111)'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_16820_31111'
                    x1='1.96124'
                    y1='25.7872'
                    x2='24.274'
                    y2='9.65027'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FF469E' />
                    <stop offset='1' stop-color='#FDBA0D' />
                </linearGradient>
            </defs>
        </svg>
    )
}
