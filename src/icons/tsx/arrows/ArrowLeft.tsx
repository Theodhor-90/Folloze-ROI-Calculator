import { FC } from "react"
import { IBasicIcon } from "../../IconIndex"

export const ArrowLeft:FC<IBasicIcon> = ({
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
        d='M19 12L5 12'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 19L5 12L12 5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
