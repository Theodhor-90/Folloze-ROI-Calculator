import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Tablet: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            width='42'
            height='30'
            viewBox='0 0 42 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5 14L5 16'
                stroke={stroke}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <rect
                x='1'
                y='1'
                width='40'
                height='28'
                rx='2'
                stroke={stroke}
                strokeWidth='2'
            />
        </svg>
    )
}
