"use client"
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Astronaut from '../../../../public/images/Astronaut.png'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/Navbar/Navbar'
import { LazyMotion , domAnimation, motion, useAnimate} from 'framer-motion'
import MediaQuery from 'react-responsive'
import LandingPage from './components/LandingPage'
import EventsListing from './components/EventsListing'
import axios from 'axios';

const Dashboard = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedToken = localStorage.getItem('myJwtToken'); 
        const response = await axios.get('https://api-dev.prody.istenith.com/api/auth/user/', {
          headers: {
            Authorization: `${storedToken}`,
          },        
        });


        setUser(response.data.user);
      } catch (error:any) {
        console.error(`Error fetching user data: ${error.message}`);
      }
    };

    fetchUserData();
  }, []);
  
  return (
    <div>
      <Navbar isHomePage={false} />
      {user ? (
        <>
          <LandingPage user={user} />
          <div className='spaceThemeBackground'>       
            <EventsListing upComingEvents={true} user={user}/>
            <EventsListing upComingEvents={false} user={user}/>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}      
    </div>

  )
}

export default Dashboard
