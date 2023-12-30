import React, { useEffect, useState } from 'react'
import ImageComponent from '@/src/app/events/components/imageComponent';
import styles from '../page.module.css';

interface Event{
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: Array<string>;
}

const EventsListing = ({upComingEvents}: {upComingEvents: boolean;}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  const fetchEvents = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const resJson = await res.json()
    const upcomingEvents: Event[] = resJson.products
    upcomingEvents.length = 5
    setEvents(upcomingEvents)
    setIsLoaded(true)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className={["flex justify-center flex-col items-center md:items-start mx-auto", styles.upComingEvents].join(" ")}>
      <div className=''>        
        <h1 className="beyonderFont text-3xl font-bold" style={{lineHeight: "3rem"}}>
          {upComingEvents ? `Upcoming Events` : `Completed Events`}
        </h1>
        <h3 className='coolveticaFont text-2xl my-4'>
          {upComingEvents ? `Exciting events coming up in the next few days that you can participate in!` : `Events you have participated in`}
        </h3>
      </div>
      <div className="carousel carousel-center space-x-4 gap-6 rounded-box" style={{width: "90vw"}}>
          {
          isLoaded ? 
            events.map((event) => {
              return(
                <div key={event.id} className="carousel-item">
                  <div className={["card w-72 max-h-96 md:w-80 lg:w-80 shadow-xl", styles.upComingEventCard].join(" ")}>
                    <figure className="relative h-60">
                      <ImageComponent card={event} />
                    </figure>
                    <div className="card-body items-center">
                      <h2 className="card-title">{event.title}</h2>
                    </div>
                  </div>  
                </div> 
              )
              })
              :
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className='carousel-item'>
                  <div className="flex flex-col gap-4 w-72 h-96 md:w-80 lg:w-80">
                    <div className="skeleton h-56 w-full"></div>
                    <div className="skeleton h-5 w-28"></div>
                    <div className="skeleton h-5 w-full"></div>
                    <div className="skeleton h-5 w-full"></div>
                  </div>
                </div>
              ))
          }
      </div>
    </div>
  )
}

export default EventsListing
