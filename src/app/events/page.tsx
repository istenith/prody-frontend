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
import fetchUserData from '../components/fetchUserData';
import axios from 'axios';

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

interface User {
  registered_events: {
    is_live_events: Event[];
    is_completed_events: Event[];
    is_upcoming_events: Event[];
  };
  username : string;
  user_id : string;
  email : string;
}


interface Event {
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
  const [registeredEventIds, setRegisteredEventIds] = useState([])
  const [events, setEvents] = useState<Event[]>([]);
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [nonRegisteredEvents, setNonRegisteredEvents] = useState<Event[]>([]);
  const [user, setUser] = useState<User | null>(null)
  
  
  function getMonthName(monthIndex:any) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }
  
  
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await fetch('https://api-dev.prody.istenith.com/api/events/')
        const resJson = await res.json()
        const formattedData = resJson.map((event:Event) => {
          const eventDate = new Date(event.date_time);
          
          const formattedDate = `${eventDate.getDate()} ${getMonthName(eventDate.getMonth())} ${eventDate.getFullYear()}`;
          return {
            ...event,
            date: formattedDate,
          };
        });
        // console.log(formattedData)
        setCardData(formattedData)
        setIsLoaded(true)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  useEffect(()=>{
    const fetchUser = async () => {
      const res = await fetch('https://api-dev.prody.istenith.com/api/events/', { next: { revalidate: 60 } })
      const events = await res.json()
      console.log("events in the fetchuse: ", events)
      const storedToken = localStorage.getItem('myJwtToken');
      const response = await axios.get('https://api-dev.prody.istenith.com/api/auth/user/', {
        headers: {
          Authorization: `${storedToken}`,
        },
      });

      console.log("response.data.user2",response.data.user)
      const user = response.data.user
      
      const { is_live_events, is_completed_events, is_upcoming_events } = user.registered_events;
      const userRegisteredEvents = [...is_live_events, ...is_completed_events, ...is_upcoming_events];
      const userRegisteredEventsAlternate = events.filter((event: any) => {
        return userRegisteredEvents.some(registeredEvent => registeredEvent.id === event.id);
      });
      console.log("userRegisteredEventsAlternate",userRegisteredEventsAlternate)

      setRegisteredEvents(userRegisteredEventsAlternate);
  
      const userNonRegisteredEvents = events.filter((event: any) => {
        return !userRegisteredEvents.some(registeredEvent => registeredEvent.id === event.id);
      });
      setNonRegisteredEvents(userNonRegisteredEvents);
    }
    fetchUser()
  
  },[])

  useEffect(() => {

    console.log('Registered Events:', registeredEvents);
    console.log('Non-Registered Events:', nonRegisteredEvents);
  }, [registeredEvents, nonRegisteredEvents]);


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
          <h1 className='beyonderFont text-5xl events-main-text'>
            Events
          </h1>

            <h2 className='spaceFont hidden lg:block text-l m-4'>
              &nbsp;
              <TypeAnimation
                sequence={['PRODYOGIKI', 500, 'by iste', 500]}
                repeat={Infinity}
                cursor={false}
                speed={{type: 'keyStrokeDelayInMs', value: 125}}
              />
              &nbsp;
            </h2>

            {/* <h2 className='spaceFont block lg:hidden text-3xl m-4'>
              &nbsp;
                Prodyogiki
              &nbsp;
            </h2>             */}
            <br />


            <div className="custom-flex-container">
            {isLoaded ? 
              cardData.map(card => {   
                // const isEventRegistered = registeredEvents.some(registeredEvent => registeredEvent.id === card.id);

                return (
                  <div key={card.id} className="custom-card">
                    <figure className="custom-card-figure">
                        <ImageComponent poster={card.poster} />
                    </figure>
                    <div className="custom-card-body">
                      <h2 className="custom-card-title mt-2">{card.name}</h2>
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



        <Footer />
        </div>
        <AnimatePresence
          initial={false}
          mode='wait'
        >
        {modalOpen && (
            <Modal
              cardrecieved={selectedCard}
              handleClose={closeModal}
              isRegisteredEvent={registeredEvents.some(registeredEvent => registeredEvent.id === selectedCard?.id)}
            />
          )}

        </AnimatePresence>
    </div>
  )
}

export default Page
