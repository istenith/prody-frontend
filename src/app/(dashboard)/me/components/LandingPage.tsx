"use client"
import React from 'react'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Astronaut from '../../../../../public/images/Astronaut.png'
import { TypeAnimation } from 'react-type-animation'
import { LazyMotion , domAnimation, motion, useAnimate} from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'


const LandingPage = ({user}) => {
  const window = useWindowSize()
  const windowWidth = window.width!
  const username = user.username
  const prody_id = user.user_id
  console.log(windowWidth)
  console.log("user",user)
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
    <div className=''>
      <div className="hero randomBlobBackground3 m-auto min-h-screen pt-20 px-10">
        <div className="hero-content w-11/12 flex-col lg:flex-row">
          <div ref={scope} className="hidden lg:block" style={{translate: '-100px', opacity: 0}}>
            <Image 
            height={200}
            width={300}
            alt='profile_image' 
            src={Astronaut} 
            className="max-w-sm rounded-lg" />
          </div>
        
        
          <div>
            <div className='hidden lg:block lemonMilkFont text-warning' style={{fontSize: '1rem'}}>
              <TypeAnimation
                    sequence={[1200, `>> Collecting space rock...`, 600, `>> Loaded Astronaut Profile...`, 600]}
                    cursor={false}
                    speed={80}
                    deletionSpeed={90}
                    repeat={0}
              />              
            </div>

            <div className='lemonMilkFont block lg:hidden text-warning' style={{fontSize: '1rem'}}>
              <TypeAnimation
                      sequence={[400, `>> Loaded Astronaut Profile...`]}
                      cursor={false}
                      speed={50}
                      deletionSpeed={90}
                      repeat={0}
              />             
            </div>

            <div className="m-auto typeAnimationText">
              <h1 className="text-4xl py-4 hidden lg:block flex-wrap font-bold beyonderFont" id='containerText' style={{lineHeight: '4rem'}}>
                <TypeAnimation
                  sequence={[4000, `👋 HI, ${username}`, 500, `👋 HI, ${prody_id}`, 500]}
                  cursor={false}
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <motion.div 
                className="block lg:hidden"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 2.5}}
              >
                <h1 className="text-2xl py-4 flex-wrap font-bold beyonderFont" id='containerText' style={{lineHeight: '4rem'}}>
                  {`👋 HI, ${username}`}
                </h1>
                <h2 className='text-sm flex-wrap beyonderFont'>
                  {`${prody_id}`}
                </h2>
              </motion.div>
            </div>
              
            <motion.div
              initial={{y: 10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={(windowWidth > 500) ? {delay: 10} : {delay: 4}}   
              className='mx-auto'           
            >
              <div 
                className="py-6 text-2xl coolveticaFont"
              >
                {`This is your space hub where you can check the events you've completed,
                  upcoming events you can participate in and your progress!`}
              </div>

              <div className="eventStats my-8 mb-12">
                <h2 className='coolveticaFont text-4xl my-4'>Your Journey</h2>
                <progress className="progress progress-info h-6 w-full" value={40} max="100"></progress>
              </div>

              <div className="coolveticaFont flex flex-col w-full lg:flex-row bg-transparent">
                <div className="grid flex-grow h-20 card rounded-box place-items-center">
                  <h1 className="text-2xl">
                    Total Events
                  </h1>
                  <h2 className="text-2xl">10</h2>
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow h-20 card rounded-box place-items-center">
                  <h1 className="text-2xl">
                    Registered Events
                  </h1>
                  <h2 className="text-2xl">4</h2>
                </div>
              </div>

              <div className="flex m-auto flex-col w-11/12 md:w-80 lg:w-40 md:flex-row gap-4 mt-12">
                <button className="btn btn-outline">Your Events</button>
                <button className="btn btn-primary">Logout</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
