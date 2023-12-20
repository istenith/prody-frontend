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
            clipPath: "polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)",
          },
          animate: {
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
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
