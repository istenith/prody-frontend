import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Backdrop from '../Backdrop/backdrop';
import { useRouter } from 'next/navigation';
import './modalStyles.css';

const Modal = ({ cardrecieved, handleClose }) => {
  useEffect(() => {
    console.log('cardrecieved', cardrecieved);
  }, [cardrecieved]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    if (typeof window !== 'undefined') {
      const eventId = cardrecieved.id;
      const registrationUrl = `/event-register/${eventId}`;
      router.push(registrationUrl);
    }
  };

  const handleAbstractLink = () => {
    if (typeof window !== 'undefined' && cardrecieved.abstract_link) {
      window.open(cardrecieved.abstract_link, '_blank');
    } else {
      window.open('http://istenith.com/');
    }
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
        <div className='image-container' style={{ maxWidth: '500px', flexShrink: 0 }}>
          {cardrecieved.poster ? (
            <Image
              loader={() => cardrecieved.poster}
              layout='responsive'
              width={500}
              height={500}
              unoptimized={true}
              src={cardrecieved.poster}
              alt='thumbnail'
            />
          ) : (
            <Image
                loader={() => cardrecieved.poster}
                layout="responsive"
                width={300}
                height={100}
                src=""
                alt="event-image"
              />
            )}
        </div>

        <div className='flex-grow flex-col gap-4 justify-center items-center'>
          <div role='tablist' className='tabs w-11/12 mx-auto h-4/5 tabs-lifted'>

            <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Event' defaultChecked />
            <div role='tabpanel' className='tab-content h-full bg-base-100 border-base-300 rounded-box p-6'>
              <h2>{cardrecieved.name}</h2>
            </div>

            <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Description' />
            <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
              {cardrecieved.description}
            </div>

            <input type='radio' name='my_tabs_2' role='tab' className='tab' aria-label='Date' />
            <div role='tabpanel' className='h-full tab-content bg-base-100 border-base-300 rounded-box p-6'>
              {cardrecieved.date}
            </div>
          </div>
        <div className='flex gap-3 btns'>
            <motion.button
              className='btn btn-primary max-w-xs'
              onClick={handleRegister}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.button>
            <motion.button
              className='btn btn-secondary max-w-xs'
              onClick={handleAbstractLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Abstract
            </motion.button>
      </div>
      </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;


