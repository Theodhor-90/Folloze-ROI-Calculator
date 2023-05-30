import { FunctionComponent } from 'react'

interface IButtonProps {
    variant: 'primary' | 'secondary'
    text?: string
    callBack: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className?: string
    icon?: React.ComponentType | null
    type?: 'button' | 'reset' | 'submit'
    disabled?: boolean
}

export const Button: FunctionComponent<IButtonProps> = ({
    variant,
    text,
    callBack,
    className = '',
    icon = null,
    type = 'button',
    disabled = false,
}) => {
    const triggerCallBack: (
        e?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        payload?: any
    ) => void = (e) => {
        callBack(e)
    }
    const Icon = icon

    return (
        <button
            onClick={(e) => triggerCallBack(e)}
            className={`button ${variant} ${className} ${disabled ? 'disabled' : ''}`}
            type={type}
        >
            {text}
            {Icon ? (
                <span className='button-icon'>
                    <Icon />
                </span>
            ) : null}
        </button>
    )
}
