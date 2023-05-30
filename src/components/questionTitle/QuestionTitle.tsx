import { FC } from 'react'
import { TDescriptionLine } from '../../static/questions'

export interface IQuestionTitleProps {
    title: string
    description: TDescriptionLine[]
}

export const QuestionTitle: FC<IQuestionTitleProps> = ({
    title,
    description,
}) => {
    return (
            <div className='question'>
                <div className='title'>{title}</div>
                <div className='description'>
                    {description.map((el, index) => (
                        <span key={`description-${index}`}>
                            {el.link ? (
                                <a href={el.link} target='_blank'>
                                    {el.text}
                                </a>
                            ) : (
                                el.text
                            )}
                        </span>
                    ))}
                </div>
            </div>
    )
}
