import { FC } from "react";
import { TQuestionGroup } from "../../static/questions";
import { Checkbox } from '../checkbox/Checkbox';

interface ISelectionProps {
    options: TQuestionGroup []
    onClick: (index: number) => void
}

export const Selection:FC<ISelectionProps> = ({
    options,
    onClick
}) => {
    return(
        <div className="selection">
            {options.map((el,index) => (
                <Checkbox text={el.text} checked={el.checked} onClick={() => onClick(index)} key={`selection-${index}`} option={el.group}/>
            ))}
        </div>
    )
}