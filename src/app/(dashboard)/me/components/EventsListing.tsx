import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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

  const [events, setEvents] = useState<Event[]>([])

  const fetchEvents = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const resJson = await res.json()
    const upcomingEvents: Event[] = resJson.products
    upcomingEvents.length = 12
    setEvents(upcomingEvents)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div className={["mx-auto", styles.upComingEvents].join(" ")}>
      <div className=''>        
        <h1 className="beyonderFont text-3xl font-bold" style={{lineHeight: "3rem"}}>
          {upComingEvents ? `Upcoming Events` : `Completed Events`}
        </h1>
        <h3 className='coolveticaFont text-2xl my-4'>
          {upComingEvents ? `Exciting events coming up in the next few days that you can participate in!` : `Events you have participated in`}
        </h3>
      </div>
      <div className="carousel carousel-center p-4 space-x-4 gap-6 rounded-box" style={{width: "90vw"}}>
          {events.map((event) => {
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
          }
      </div>
    </div>
  )
}

export default EventsListing
