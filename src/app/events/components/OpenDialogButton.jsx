"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import Modal from './Modal/modal'

const OpenDialogButton = ({card, setModalOpenToTrue}) => {

  return (
    <>
      <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        className="btn btn-primary btn-block pointer"
        onClick={()=> setModalOpenToTrue(card)}
        >
        Explore
      </motion.button>
    </>
  )
}

export default OpenDialogButton
