"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Template = ({children}: {children: React.ReactNode})  => {
  const route = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key={route}
        initial='before'
        animate='animate'
        exit={{opacity: 0}}
        variants={{
          before:{
            opacity: 0,
            clipPath: 'circle(0% at 50% 50%)',
          },
          animate: {
            opacity: 1,
            clipPath: 'circle(75% at 50% 50%)',
          },
          afterr: {
            opacity: 0,
          }
        }}
        transition={{duration: 1}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Template
