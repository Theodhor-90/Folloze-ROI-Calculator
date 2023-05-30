import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const Check:FC<IBasicIcon> = ({
  stroke = 'black',
  fill = 'none'
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20 6L9 17L4 12'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
