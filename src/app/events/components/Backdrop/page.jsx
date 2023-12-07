import React from 'react'
import {motion} from "framer-motion"
import styles from "./page.module.css"

const Backdrop = ({children, onClick}) => {
  return (
    <motion.div 
      className={styles.backdrop}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
