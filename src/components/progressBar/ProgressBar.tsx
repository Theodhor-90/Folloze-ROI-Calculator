import { FC } from "react";

export const ProgressBar:FC<{completed: number}> = ({
    completed = 0
}) => {
    return(
        <div className="progress-bar">
            <div className="completed-progress" style={{width: `${completed}%`}}></div>
        </div>
    )
}