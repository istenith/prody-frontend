"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LandingPage from './components/LandingPage';
import EventsListing from './components/EventsListing';
import axios from 'axios';
import "./page.module.css"
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
        const res = await fetch('https://api-dev.prody.istenith.com/api/events/');
        const resJson = await res.json();
        const formattedData = resJson.map((event: Event) => {
          const eventDate = new Date(event.date_time);
          const formattedDate = `${eventDate.getDate()} ${getMonthName(eventDate.getMonth())} ${eventDate.getFullYear()}`;
          return {
            ...event,
            date: formattedDate,
          };
        });

        console.log(formattedData);
        setEvents(formattedData);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedToken = localStorage.getItem('myJwtToken');
        const response = await axios.get<User>('https://api-dev.prody.istenith.com/api/auth/user/', {
          headers: {
            Authorization: `${storedToken}`,
          },
        });
        setUser(response.data.user);
        console.log("response.data",response.data.user);
      } catch (error:any) {
        alert(`Error fetching user data: ${error.message}`);
        console.error(`Error fetching user data: ${error.message}`);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("events", events);
    console.log("user",user)
    
  }, [])
  

  useEffect(() => {
    console.log("events", events);
    console.log("user",user)
    if (user) {
      const { is_live_events, is_completed_events, is_upcoming_events } = user.registered_events;
      const userRegisteredEvents = [...is_live_events, ...is_completed_events, ...is_upcoming_events];
      setRegisteredEvents(userRegisteredEvents);

      const userNonRegisteredEvents = events.filter(event => {
        return !userRegisteredEvents.some(registeredEvent => registeredEvent.id === event.id);
      });
      setNonRegisteredEvents(userNonRegisteredEvents);


    }
  }, [events, user]);

  return (
    <div>
      <Navbar isHomePage={false} />
      {user ? (
        <>
          <LandingPage user={user} totalEvents={events.length} registeredEvents={registeredEvents.length} />
          <div className='spaceThemeBackground'>
            <EventsListing upComingEvents={false} user={user} events = {registeredEvents}/>
            <EventsListing upComingEvents={true} user={user} events = {nonRegisteredEvents} />
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
      </div>      
      )}
    </div>
  );
}

export default Dashboard;
