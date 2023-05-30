import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Desktop: FC<IBasicIcon> = ({ stroke = 'black', fill = 'none' }) => {
    return (
        <svg
            width='42'
            height='33'
            viewBox='0 0 42 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M22 6.55859L20 6.55859'
                stroke={stroke}
                strokeWidth='2'
                strokeLinecap='round'
            />
            <mask id='path-2-inside-1_164_17675' fill='white'>
                <rect x='13' y='30' width='16' height='3' rx='1' />
            </mask>
            <rect
                x='13'
                y='30'
                width='16'
                height='3'
                rx='1'
                stroke={stroke}
                strokeWidth='3'
                mask='url(#path-2-inside-1_164_17675)'
            />
            <rect
                x='17'
                y='25'
                width='8'
                height='6'
                stroke={stroke}
                strokeWidth='2'
            />
            <rect
                x='1'
                y='1'
                width='40'
                height='24'
                rx='2'
                stroke={stroke}
                strokeWidth='2'
            />
        </svg>
    )
}
