import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Backdrop from '../Backdrop/backdrop';
import { useRouter } from 'next/navigation';
import './modalStyles.css';

export const Modal = ({ cardrecieved, handleClose, isRegisteredEvent }) => {
     useEffect(() => {
          console.log('cardrecieved', cardrecieved);
          console.log('isRegisteredEvent', isRegisteredEvent);

     }, [cardrecieved]);

     useEffect(() => {
          const handleKeyDown = (event) => {
               if (event.key === 'Escape') {
                    handleClose();
               }
          };

          // window.addEventListener('keydown', handleKeyDown);

          // Remove event listener on cleanup
          // return () =>
          //  window.removeEventListener('keydown', handleKeyDown);

     }, [handleClose]);

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
                    type: 'spring',
                    damping: 25,
                    stiffness: 500,
               },
          },
          exit: {
               y: 50,
               opacity: 0,
          },
     };

     const handleRegister = () => {
          // if (typeof window !== 'undefined') {
          const eventId = cardrecieved.id;
          const registrationUrl = `/event-register/${eventId}`;
          router.push(registrationUrl);
     }
     // };

     const handleAbstractLink = () => {
          // if (typeof window !== 'undefined' && cardrecieved.abstract_link) {
          //     window.open(cardrecieved.abstract_link, '_blank');
          //   } else {
          //     window.open('http://istenith.com/');
          //   }
          // };
     };

     return (
          <Backdrop onClick={handleClose}>
               <motion.div
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='modal-custom flex flex-col md:flex-row border-slate-950'
               >
                    <button className="close-button" onClick={handleClose}>&times;</button>
                    <div className='image-container' style={{ maxWidth: '400px', flexShrink: 0 }}>
                         {cardrecieved.poster ? (
                              <Image
                                   loader={() => cardrecieved.poster}
                                   layout='responsive'
                                   width={100}
                                   height={100}
                                   unoptimized={true}
                                   src={cardrecieved.poster}
                                   alt='thumbnail'
                              />
                         ) : (
                              <Image
                                   loader={() => cardrecieved.poster}
                                   layout="responsive"
                                   width={200}
                                   height={500}
                                   src=""
                                   alt="event-image"
                              />
                         )}
                    </div>
                    <div className='' style={{ maxWidth: "600px", margin: "10px" }}>
                         <div className='flex detailM justify-between spaceFont pb-4' style={{borderBottom:"2px solid "}}>
                              <span>{cardrecieved.name}</span>
                              <span className={'text-right'}>{cardrecieved.date}</span>
                         </div>
                         <div className='text-justify mt-5 text-lg'>
                              {cardrecieved.description}
                         </div>
                    </div>
                    <div className='flex gap-3 btns'>
                         {isRegisteredEvent ? (
                              <motion.button
                                   className='btn btn-disabled max-w-xs'
                                   whileHover={{ scale: 1 }}
                                   whileTap={{ scale: 0.95 }}
                                   disabled
                              >
                                   Registered
                              </motion.button>
                         ) : (
                              <motion.button
                                   className='btn btn-primary max-w-xs'
                                   onClick={handleRegister}
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.95 }}
                              >
                                   Register
                              </motion.button>
                         )}

                         <motion.button
                              className='btn btn-secondary max-w-xs'
                              onClick={handleAbstractLink}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                         >
                              Abstract
                         </motion.button>
                    </div>
               </motion.div>
          </Backdrop>
     );
};



