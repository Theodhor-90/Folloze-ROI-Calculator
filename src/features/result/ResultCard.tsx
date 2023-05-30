import { FC } from 'react'
import { icons } from '../../icons/IconIndex'
import { IResultState, TResultSingle } from '../../views/survey/Survey'
import { AnimatePresence, motion } from 'framer-motion'

const Card: FC<{
    text: string
    value: TResultSingle
    percentage?: number
    toggled: boolean
}> = ({ text, value, percentage, toggled }) => {
    const ArrowUp = () => (
        <icons.folloze.arrowUp stroke={toggled ? '#FF469E' : '#11D175'} />
    )
    return (
        <div className='result-card'>
            <div className='top'>
                <div className='icon-container'>
                    <ArrowUp />
                    <div className='growth-tag'></div>
                </div>
            </div>
            <div className='card-description'>{text}</div>
            <div className='card-value'>{toggled ? value.enhanced : value.regular}</div>
        </div>
    )
}

interface IResultCardProps {
    results: IResultState[]
    activeGroup: number
    toggled: boolean
}

export const ResultCard: FC<IResultCardProps> = ({
    results,
    activeGroup,
    toggled,
}) => {
    switch (results[activeGroup].group) {
        case 'costs':
            return (
                <>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Internal time savings'
                            value={results[activeGroup].second as TResultSingle}
                        />
                    </motion.div>

                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Contractor / agency fee savings'
                            value={results[activeGroup].first as TResultSingle}
                        />
                    </motion.div>
                </>
            )
        case 'productivity':
            return (
                <>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Marketing productivity increase'
                            value={results[activeGroup].first as TResultSingle}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Sales productivity gain per campaign'
                            value={results[activeGroup].second as TResultSingle}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='HCM increase'
                            value={results[activeGroup].third as TResultSingle}
                        />
                    </motion.div>
                </>
            )
        case 'revenue':
            return (
                <>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Conversion rate growth'
                            value={results[activeGroup].first as TResultSingle}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Resulting pipeline'
                            value={results[activeGroup].second as TResultSingle}
                        />
                    </motion.div>
                    <motion.div
                        className='mt-card'
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <Card
                            toggled={toggled}
                            text='Attributable revenue'
                            value={results[activeGroup].third as TResultSingle}
                        />
                    </motion.div>
                </>
            )
    }
}
