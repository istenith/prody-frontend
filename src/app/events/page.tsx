"use client"
import React, {useEffect, useState} from 'react'
import ImageComponent from './components/imageComponent';
import OpenDialogButton from './components/OpenDialogButton';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Modal from './components/Modal/modal';

interface Card{
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: Array<string>;
}


const Page = () => {
  const [cardData, setCardData] = useState<Card[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchData = async () => {
    try{
      const res = await fetch('https://dummyjson.com/products')
      const resJson = await res.json()
      setCardData(resJson.products.slice(0,12))
      setIsLoaded(true)
    } catch {
      console.log('error')
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);


  const openModal = (card: Card) => {
    console.log("open modal clicked")
    console.log(`Card recieved: ${card}`)
    console.log(card)
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };


  return (
    <div className=''>
        <Navbar isHomePage={false}/>    
        <div className='mainEventsPage text-center pt-20'>
          <h1 className='beyonderFont text-5xl'>
            Events
          </h1>
          <h2 className='spaceFont text-3xl m-4'>
            &nbsp;
            <TypeAnimation
              sequence={['PRODYOGIKI', 500, 'by iste', 500]}
              repeat={Infinity}
              cursor={false}
              speed={{type: 'keyStrokeDelayInMs', value: 125}}
            />
            &nbsp;
          </h2>
          <div className="flex flex-row w-full flex-wrap p-10 gap-5 content-around h-full justify-around">
            {isLoaded ? 
                cardData.map(card => {   
                  return(
                    <div key={card.id} className="card w-72 max-h-96 md:w-80 lg:w-80 shadow-xl card-custom-background">
                      <figure className="relative h-60">
                        <ImageComponent card={card} />
                      </figure>
                      <div className="card-body items-center">
                        <h2 className="card-title">{card.title}</h2>
                        <p>{card.description}</p>
                        <p>{card.price}</p>
                        <OpenDialogButton card={card} setModalOpenToTrue={openModal}/>
                      </div>
                    </div>  
                  )
                })
                :
                Array.apply(null, { length: 12 }).map((e, i) => (
                  <div key={i} className="flex flex-col gap-4 w-72 h-96 md:w-80 lg:w-80">
                    <div className="skeleton h-56 w-full"></div>
                    <div className="skeleton h-5 w-28"></div>
                    <div className="skeleton h-5 w-full"></div>
                    <div className="skeleton h-5 w-full"></div>
                    <div className="skeleton h-5 w-full"></div>
                  </div>
                ))
            }
          </div>
        </div>
        <AnimatePresence
          initial={false}
          mode='wait'
        >
          {modalOpen && <Modal cardrecieved={selectedCard} handleClose={closeModal} />}
        </AnimatePresence>
    </div>
  )
}

export default Page
