import React from 'react'
import Backdrop from '../Backdrop/page'
import {motion} from 'framer-motion'
import Image from "next/image"
import ImageComponent from '../imageComponent'
import styles from "./page.module.css"

const Modal = ({handleClose, cardrecieved}) => {
  const dropIn = {
    hidden: {
      x: '-100vw',
      opacty: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "Spring",
        dampling: 60,
        stiffness: 200,
      },
    },
    exit: {
      x: '100vh',
      opacity: 0,
    },
  }

  console.log("card recieved in modal window", cardrecieved)

  return (
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e)=>e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="modal-custom flex flex-col gap-10 md:flex-row border-slate-950"
        >
          <div>
            <Image loader={()=>cardrecieved.thumbnail} width={300} height={100} src={cardrecieved.thumbnail} alt='event-image'/>
          </div>

          <div className='flex flex-col gap-4 justify-center items-center'>
            <div role="tablist" className="tabs w-11/12 mx-auto h-4/5 tabs-lifted">
              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Event name" defaultChecked/>
              <div role="tabpanel" className="tab-content h-full bg-base-100 border-base-300 rounded-box p-6">
                <h2>{cardrecieved.title}</h2>
              </div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Description"/>
              <div role="tabpanel" className="h-full tab-content bg-base-100 border-base-300 rounded-box p-6">{cardrecieved.description}</div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Price" />
              <div role="tabpanel" className="h-full tab-content bg-base-100 border-base-300 rounded-box p-6">{cardrecieved.price} with {cardrecieved.discountPercentage}% discount</div>
            </div>
            <motion.button 
              className='btn btn-accent max-w-xs' 
              onClick={handleClose}
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </Backdrop>
  )
}

export default Modal
