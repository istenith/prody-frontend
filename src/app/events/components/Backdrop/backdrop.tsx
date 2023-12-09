import React, { ReactNode } from 'react'
import {motion} from "framer-motion"
import styles from "./page.module.css"
// import { Interface } from 'readline'

export interface BackdropProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({children, onClick}) => {
  return (
    <motion.div 
      className={styles.backdrop}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop;
