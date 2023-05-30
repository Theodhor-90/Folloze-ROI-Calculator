import { FC } from 'react'
import { Button } from '../../components/button/Button'
import { Logo } from '../../components/logo/Logo'
import { icons } from '../../icons/IconIndex'

export interface IWelcomeProps {
    onChange: () => void
}

export const Welcome: FC<IWelcomeProps> = ({ onChange }) => {
    const ArrowRight = () => <icons.arrow.right stroke='white' />
    const Clock = () => <icons.misc.clock />
    return (
        <div className='welcome folloze-container'>
            <div className='welcome-left'>
                <div className='folloze-logo'>
                    <Logo />
                </div>
                <div>
                    <div className='main-container'>
                        <div className='welcome-content'>
                            <div className='eyebrow'>
                                BUSINESS VALUE CALCULATOR
                            </div>
                            <div className='header'>
                                Improve{' '}
                                <span className='hide-mobile'>your</span>{' '}
                                business income with Folloze
                            </div>
                            <div className='description'>
                                Answer these simple questions to see how Folloze
                                can benefit your business.
                            </div>
                            <div className='welcome-buttons'>
                                <Button
                                    variant='primary'
                                    callBack={onChange}
                                    text='Take the Survey'
                                    className='folloze-button'
                                    icon={ArrowRight}
                                />
                                <div className='d-flex clock-wrapper'>
                                    <div className='clock flex-center'>
                                        <Clock />
                                    </div>
                                    <div className='text flex-center'>
                                        3 min
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-background-container'>
                    <div className='image-background'></div>
                </div>
            </div>
            <div className="welcome-right"></div>
        </div>
    )
}
