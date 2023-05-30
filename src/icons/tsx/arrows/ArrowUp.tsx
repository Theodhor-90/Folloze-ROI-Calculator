import { FC } from "react"
import { IBasicIcon } from "../../IconIndex"

export const ArrowUp:FC<IBasicIcon> = ({
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
        d='M12 19V5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5 12L12 5L19 12'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
