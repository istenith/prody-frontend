"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const OpenDialogButton = ({card, setModalOpenToTrue}) => {

  return (
      <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        className="btn btn-primary btn-block pointer w-40"
        onClick={()=> setModalOpenToTrue(card)}
        >
        Explore
      </motion.button>
  )
}

export default OpenDialogButton
