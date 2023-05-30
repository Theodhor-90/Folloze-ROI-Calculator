import { FC, useState } from 'react'
import { Welcome } from './views/welcome/Welcome'
import { Survey } from './views/survey/Survey'
import { motion } from 'framer-motion'

export const App: FC<{}> = () => {
    const [step, setStep] = useState(0)

    return (
        <div className='app flex-center'>
            <motion.div
                className='flex-center full-fluid'
                initial={{
                    opacity: 0,
                    transform: 'translateY(-200px)',
                }}
                animate={{
                    opacity: 1,
                    transform: 'translateY(0)',
                }}
                exit={{ opacity: 0, transform: 'translateY(-200px)' }}
                transition={{
                    duration: 0.3,
                    delay: 0.3,
                }}
            >
                {step === 0 ? (
                    <Welcome onChange={() => setStep(1)} />
                ) : (
                    <Survey />
                )}
            </motion.div>
        </div>
    )
}
