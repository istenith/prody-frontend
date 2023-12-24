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

const Dashboard = () => {
  
  return (
    <div>
      <Navbar isHomePage={false} />
      <LandingPage />
      <div className='spaceThemeBackground'>       
        <EventsListing upComingEvents={true}/>
        <EventsListing upComingEvents={false}/>
      </div>
    </div>

  )
}

export default Dashboard
