import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const FollozeArrowUp: FC<IBasicIcon> = ({
    stroke = 'black',
    fill = 'none',
}) => {
    return (
        <svg
            viewBox='0 0 18 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M17.9677 8.98256L8.98384 0L0 8.98256L1.87796 10.8605L7.64257 5.09461V24H10.325V5.09461L16.0896 10.8605L17.9677 8.98256Z'
                fill={stroke}
            />
        </svg>
    )
}
