"use client"
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Astronaut from '../../../../public/images/Astronaut.png'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/Navbar/Navbar'
import { LazyMotion , domAnimation, motion, useAnimate} from 'framer-motion'
import UpcomingEvents from './components/UpcomingEvents'

const Dashboard = () => {
  const username = "Mehul Ambastha"
  const prody_id = "PRODY#2533"

  const [scope, animate] = useAnimate()

  const animateAstronaut = async () => {
    await animate(scope.current, {x: 100, opacity: 1}, {delay: 1})
    await animate(scope.current, {y: 20}, {duration: 1, ease: "linear"})
    animate(scope.current, {y: -20}, {duration: 1, repeatType: "mirror", ease: "linear", repeat: Infinity})
  }

  useEffect(() => {
    animateAstronaut()
  })
  


  return (
    <LazyMotion features={domAnimation}>
        <Navbar isHomePage={false} />
      <div className=''>
        <div className="hero randomBlobBackground3 m-auto min-h-screen py-20 px-10">
          <div className="hero-content w-11/12 flex-col lg:flex-row">
            <div ref={scope} style={{translate: '-100px', opacity: 0}}
            >
              <Image 
              height={200}
              width={300}
              alt='profile_image' 
              src={Astronaut} 
              className="max-w-sm rounded-lg" />
            </div>
            <div>

              <p className='lemonMilkFont text-warning' style={{fontSize: '0.9rem'}}>
                <TypeAnimation
                  sequence={[1500, ">> Collecting cosmic logs...", 1000, ">> loaded ASTRONAUT PROFILE...", 500]}
                  cursor={false}
                  repeat={0}
                  speed={70}
                  deletionSpeed={80}
                />  
              </p>

            <div className="w-11/12 m-auto typeAnimationText">
              <h1 className="text-4xl py-4 flex-wrap whitespace-pre-wrap font-bold beyonderFont" id='containerText' style={{lineHeight: '4rem'}}>
                <TypeAnimation
                  sequence={[5800, `HI, ${username}`, 500, `HI, ${prody_id}`, 500]}
                  cursor={false}
                  repeat={Infinity}
                />
              </h1>
            </div>
              <motion.div
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 6.8}}              
              >
                <p 
                  className="py-6 text-lg"
                >
                  {`This is your space hub where you can check the events you've completed,

                  upcoming events you can participate in and your progress!`}
                </p>
                <div className="flex m-auto flex-col w-11/12 md:w-80 lg:w-40 md:flex-row gap-4">
                  <button className="btn btn-outline">Your Events</button>
                  <button className="btn btn-primary">Logout</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <UpcomingEvents />
      </div>
    </LazyMotion>
  )
}

export default Dashboard
