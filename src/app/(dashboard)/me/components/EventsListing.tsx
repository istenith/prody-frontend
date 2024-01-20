import React from 'react';
import ImageComponent from '@/src/app/events/components/imageComponent';
import styles from '../page.module.css';
import './dashboard.css';
import { useRouter } from 'next/navigation';

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
interface EventsListingProps {
  upComingEvents: boolean;
  user: any;
  events: MyEvent[]; 
}

const EventsListing: React.FC<EventsListingProps> = ({ upComingEvents, user, events }) => {
  console.log("Event Listing events", events)
  const router = useRouter();

  
  const isLoaded = true; 
  
  const handleRegisterNow = (event: MyEvent) => {
    const eventId = event.id;
    router.push(`/event-register/${eventId}`);

    console.log(`Registering.. for event:${event.name}`);
  };


  return (
    <div className={["flex justify-center flex-col items-center md:items-start mx-auto", styles.upComingEvents].join(" ")}>
      <div className=''>
        <h1 className="beyonderFont text-2xl font-bold" style={{ lineHeight: "3rem" }}>
          {upComingEvents ? `Upcoming Events` : `Participated Events`}
        </h1>
        <h3 className='coolveticaFont text-xl my-4'>
          {upComingEvents ? `Exciting events coming up in the next few days that you can participate in!` : `Events you have participated in`}
        </h3>
        <p className='text-red-300 text-xs swipe-text'>(Swipe to see the events)</p>
      </div>
      <div className="carousel carousel-center space-x-4 gap-6 rounded-box" style={{ width: "90vw" }}>
        {isLoaded ?
          events.map((event) => (
            <div key={event.id} className="carousel-item">
              <div className={["cardEventL w-72 max-h-96 md:w-80 lg:w-80 shadow-xl", styles.upComingEventCard].join(" ")}>
                {event.is_live && (
                    <div className="cardT">
                      <div className="live-triangle"  ></div>
                      <div className="live-text">LIVE</div>
                  </div>
                )}
                <figure className="relative h-60">
                  <ImageComponent poster={event.poster} />
                </figure>
                <div className="card-body items-center">
                  <h2 className="card-title">{event.name}</h2>
                  {upComingEvents && (
                    // Uncomment below line when Registrations begin!
                    // <button className="register-button btn btn-primary" onClick={() => handleRegisterNow(event)}>
                    //   Register Now
                    // </button>
                    <button className='btn btn-primary'>Coming Soon</button>

                  )}
                </div>
              </div>
            </div>
          ))
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
  );};

export default EventsListing;
