"use client"
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import Modal from './Modal/page'

const OpenDialogButton = ({card}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const open = () => setModalOpen(true)

  const close = () => setModalOpen(false)

  return (
    <div>
      <motion.button 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        className="btn btn-primary btn-block pointer"
        onClick={()=> modalOpen ? close() : open()}
        >
        Explore
      </motion.button>
  

      <AnimatePresence
        initial={false}
        mode='wait'
      >
        {modalOpen && <Modal cardrecieved={card} modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  )
}

export default OpenDialogButton
