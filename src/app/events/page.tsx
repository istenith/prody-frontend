// @ts-ignore
"use client"
import React, {useEffect, useState} from 'react'
import ImageComponent from './components/imageComponent';
import OpenDialogButton from './components/OpenDialogButton';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal/modal';
import Skeleton from '../components/SkeletonCard/Skeleton';
import Footer from '../components/Footer/Footer';
 
interface Card{
  name:string;
  date_time :string;
  date :string;
  id: number;
  title: string;
  description: string;
  poster : string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: Array<string>;
}

interface MyEvent {
  id: number;
  date_time: string;
  date: string;
  name : string;
  description : string;
  poster: string;
  thumbnail: string;
  is_live : boolean;
  is_team_event : boolean;
}

const Page = () => {
  const [cardData, setCardData] = useState<Card[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  function getMonthName(monthIndex:any) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }

  const fetchData = async () => {
    try{
      const res = await fetch('https://api-dev.prody.istenith.com/api/events/')
      const resJson = await res.json()
      const formattedData = resJson.map((event:MyEvent) => {
        const eventDate = new Date(event.date_time);
        
        const formattedDate = `${eventDate.getDate()} ${getMonthName(eventDate.getMonth())} ${eventDate.getFullYear()}`;
        return {
          ...event,
          date: formattedDate,
        };
      });
      
      
      console.log(formattedData)
      setCardData(formattedData)
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
    <div className='h-min'>
      <Navbar isHomePage={false}/>    
        <div className='mainEventsPage text-center pt-20'>
          <h1 className='beyonderFont text-5xl'>
            Events
          </h1>

            <h2 className='spaceFont hidden lg:block text-3xl m-4'>
              &nbsp;
              <TypeAnimation
                sequence={['PRODYOGIKI', 500, 'by iste', 500]}
                repeat={Infinity}
                cursor={false}
                speed={{type: 'keyStrokeDelayInMs', value: 125}}
              />
              &nbsp;
            </h2>

            <h2 className='spaceFont block lg:hidden text-3xl m-4'>
              &nbsp;
                Prodyogiki
              &nbsp;
            </h2>            
            <br />


            <div className="custom-flex-container">
            {isLoaded ? 
              cardData.map(card => {   
                return (
                  <div key={card.id} className="custom-card">
                    <figure className="custom-card-figure">
                        <ImageComponent poster={card.poster} />
                    </figure>
                    <div className="custom-card-body">
                      <h2 className="custom-card-title">{card.name}</h2>
                      <p>{card.date}</p>
                      <br />
                      <OpenDialogButton card={card} setModalOpenToTrue={openModal}/>
                    </div>
                  </div>  
                );
              })
              :
              <Skeleton num={3} />
            }
          </div>



        </div>
        <AnimatePresence
          initial={false}
          mode='wait'
        >
          {modalOpen && <Modal cardrecieved={selectedCard} handleClose={closeModal} />}
        </AnimatePresence>
        <Footer />
    </div>
  )
}

export default Page
