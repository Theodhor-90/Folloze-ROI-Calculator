import { FC } from 'react'
import { IBasicIcon } from '../../IconIndex'

export const TemplateIcon: FC<IBasicIcon> = ({
  fill = 'black',
  stroke = 'black',
}) => {
  return (
    <svg
      version='1.1'
      id='_x32_'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <g>
        <path
          fill={fill}
          d='M198.765,0L53.398,145.383V512h405.204V0H198.765z M196.634,49.667v93.576h-93.576L196.634,49.667z
		 M424.995,478.393H87.005V172.897h139.29V33.614h198.7V478.393z'
        />
        <rect
          x='157.393'
          y='237.971'
          fill={fill}
          width='197.206'
          height='25.896'
        />
        <rect
          x='157.393'
          y='308.686'
          fill={fill}
          width='197.206'
          height='25.896'
        />
        <rect
          x='157.393'
          y='379.401'
          fill={fill}
          width='197.206'
          height='25.896'
        />
      </g>
    </svg>
  )
}
