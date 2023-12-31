import React from 'react'
import {motion} from 'framer-motion'
import Image from "next/image"
import Backdrop from '../Backdrop/backdrop'
import { useRouter } from 'next/navigation';


const Modal = ({cardrecieved, handleClose}) => {
  const router = useRouter();

  const dropIn = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "Spring",
        damping: 0,
        stiffness: 10,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
    },
  }

  const handleRegister = () => {
    if (typeof window !== 'undefined') {
      const eventId = cardrecieved.id;
      console.log("eventId",eventId)
      const registrationUrl = `/event-register/${eventId}`;
      router.push(registrationUrl);
    }
  };

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
              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Event" defaultChecked/>
              <div role="tabpanel" className="tab-content h-full bg-base-100 border-base-300 rounded-box p-6">
                <h2>{cardrecieved.name}</h2>
              </div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Description"/>
              <div role="tabpanel" className="h-full tab-content bg-base-100 border-base-300 rounded-box p-6">{cardrecieved.description}</div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Date" />
              <div role="tabpanel" className="h-full tab-content bg-base-100 border-base-300 rounded-box p-6">{cardrecieved.date}</div>
            </div>
              <motion.button
              className='btn btn-primary max-w-xs'
              onClick={handleRegister}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            > Register
              </motion.button>
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
