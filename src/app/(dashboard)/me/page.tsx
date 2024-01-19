"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LandingPage from './components/LandingPage';
import EventsListing from './components/EventsListing';
import "./page.module.css"
import { useRouter } from 'next/navigation';
import fetchUserData from '../../components/fetchUserData';
import Loader from "../../LoaderEvent"


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

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [nonRegisteredEvents, setNonRegisteredEvents] = useState<Event[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  function getMonthName(monthIndex: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api-dev.prody.istenith.com/api/events/', { next: { revalidate: 60 } });
        const resJson = await res.json();
        const formattedData = resJson.map((event: Event) => {
          const eventDate = new Date(event.date_time);
          const formattedDate = `${eventDate.getDate()} ${getMonthName(eventDate.getMonth())} ${eventDate.getFullYear()}`;
          return {
            ...event,
            date: formattedDate,
          };
        });
        // console.log("events formatted data ones" , formattedData)
        setEvents(formattedData);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const userFound = fetchUserData(setUser)

    if (!userFound) router.push('/participate')
  }, []);

  useEffect(() => {
    // Simulate an asynchronous task
    const fetchData = async () => {
      // Your asynchronous task goes here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }
    , []);



  useEffect(() => {

    if (user) {
      const { is_live_events, is_completed_events, is_upcoming_events } = user.registered_events;
      const userRegisteredEvents = [...is_live_events, ...is_completed_events, ...is_upcoming_events];
      console.log("dashboard page user", user)
      const userRegisteredEventsAlternate = events.filter(event => {
        return userRegisteredEvents.some(registeredEvent => registeredEvent.id === event.id);
      });
      console.log("userRegisteredEventsAlternate",userRegisteredEventsAlternate)
      setRegisteredEvents(userRegisteredEventsAlternate);

      const userNonRegisteredEvents = events.filter(event => {
        return !userRegisteredEvents.some(registeredEvent => registeredEvent.id === event.id);
      });
      setNonRegisteredEvents(userNonRegisteredEvents);
    }
  }, [events, user]);

  return (
    <div>
      {loading && <Loader />}
      <Navbar isHomePage={false} />
      {user ? (
        <>
          <LandingPage user={user} totalEvents={events.length} registeredEvents={registeredEvents.length} />
          <div className='spaceThemeBackground'>
            <EventsListing upComingEvents={false} user={user} events = {registeredEvents}/>
            <EventsListing upComingEvents={true} user={user} events = {nonRegisteredEvents} />
            <Footer />
          </div>
        </>
      ) : (
      <div className="loader-container">
        <div className="loader"></div>
        <div className='mainEventsPage text-center pt-20'>
          <h1 className='beyonderFont text-5xl'>
            Loading User Data ...
          </h1>
        </div>
        <Footer />
      </div>      
      )}
    </div>
  );
}

export default Dashboard;
