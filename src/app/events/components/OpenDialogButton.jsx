"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const OpenDialogButton = ({card, setModalOpenToTrue}) => {

  return (
      // just uncomment the below code when Events is to be released!
      <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        className="btn btn-primary btn-block pointer w-40"
        onClick={()=> setModalOpenToTrue(card)}
        >
        Explore
      </motion.button>

      // <button className='btn btn-primary'>Coming Soon!</button>

  )
}

export default OpenDialogButton
