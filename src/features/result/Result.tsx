import { FC, useState } from 'react'
import { IResultState } from '../../views/survey/Survey'
import { icons } from '../../icons/IconIndex'
import { Button } from '../../components/button/Button'
import { ResultCard } from './ResultCard'
import { motion, AnimatePresence } from 'framer-motion'

type Tgroup = 'costs' | 'revenue' | 'productivity'

interface IResultProps {
    results: IResultState[]
    resetSurvey: () => void
}

const GroupIcon: FC<{
    group: Tgroup
    isActive: boolean
    onClick: () => void
}> = ({ group, isActive, onClick }) => {
    const Costs = () => <icons.folloze.costs stroke='#004BDE' />
    const Revenue = () => <icons.folloze.revenue stroke='#004BDE' />
    const Productivity = () => <icons.folloze.productivity stroke='#004BDE' />
    const Plus = () => <icons.controls.plus stroke='#004BDE' />
    const Minus = () => <icons.controls.minus stroke='#004BDE' />

    return (
        <div
            className={`icon-group ${isActive ? 'active' : ''}`}
            onClick={(e) => onClick()}
        >
            <div className='icon-container'>
                {group === 'costs' ? (
                    <Costs />
                ) : group === 'revenue' ? (
                    <Revenue />
                ) : (
                    <Productivity />
                )}
            </div>
            <div className='group-container'>
                {group === 'costs'
                    ? 'Reduce costs'
                    : group === 'revenue'
                    ? 'Drive Revenue'
                    : 'Increase productivity'}
            </div>
            <div className='accordion-control'>
                {isActive ? <Minus /> : <Plus />}
            </div>
        </div>
    )
}

export const Result: FC<IResultProps> = ({ results, resetSurvey }) => {
    const [activeGroup, setActiveGroup] = useState(0)
    const [isToggled, setIsToggled] = useState(false)
    const [isAccordionOpen, setIsAccordionOpen] = useState(true)

    const updateActiveIndex: (index: number) => void = (index) => {
        if (index !== activeGroup) {
            setActiveGroup(index)
            setIsAccordionOpen(true)
        } else {
            if (window.innerWidth <= 1024) {
                setIsAccordionOpen(!isAccordionOpen)
            }
        }
    }

    const Reload = () => <icons.controls.reload stroke='white' />

    return (
        <motion.div
            className='results'
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.3
            }}
        >
            <div className='left'>
                <div className='title'>
                    Thank you for completing the survey!{' '}
                </div>
                <div className='description'>
                    Explore your personalized themes to see what Folloze could
                    do for you...
                </div>
                <div className='switcher-group hide-tablet'>
                    <div className='tag'>Expected results</div>
                    <div
                        className={`switcher ${isToggled ? 'toggled' : ''}`}
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        <div className='switcher-thumb'></div>
                    </div>
                    <div className='tag'>Higher potential</div>
                </div>
                {results.map((el, index) => (
                    <div key={`group-${index}`}>
                        <GroupIcon
                            group={el.group}
                            isActive={
                                results[activeGroup].group === el.group &&
                                isAccordionOpen
                            }
                            onClick={() => updateActiveIndex(index)}
                        />
                        <AnimatePresence initial={true} mode={'wait'}>
                            {results[activeGroup].group === el.group &&
                                isAccordionOpen && (
                                    <motion.div
                                        className='accordion-content hide-desktop'
                                        key={`accordion`}
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            height: 'auto',
                                            opacity: 1,
                                        }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                    >
                                        <div className='switcher-group hide-desktop'>
                                            <div className='tag'>
                                                Expected results
                                            </div>
                                            <div
                                                className={`switcher ${
                                                    isToggled ? 'toggled' : ''
                                                }`}
                                                onClick={() =>
                                                    setIsToggled(!isToggled)
                                                }
                                            >
                                                <div className='switcher-thumb'></div>
                                            </div>
                                            <div className='tag'>
                                                Higher potential
                                            </div>
                                        </div>
                                        <div
                                            className={`hide-desktop ${
                                                isToggled ? 'toggled' : ''
                                            }`}
                                        >
                                            <ResultCard
                                                results={results}
                                                activeGroup={activeGroup}
                                                toggled={isToggled}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                        </AnimatePresence>
                    </div>
                ))}
                <Button
                    text='Check your ROI again'
                    callBack={resetSurvey}
                    variant='primary'
                    icon={Reload}
                    className='mt-30'
                />
            </div>
            <div className={`right ${isToggled ? 'toggled' : ''}`}>
                <div key={`result-card-${isToggled}`}>
                    <ResultCard
                        results={results}
                        activeGroup={activeGroup}
                        toggled={isToggled}
                    />
                </div>
            </div>
        </motion.div>
    )
}
