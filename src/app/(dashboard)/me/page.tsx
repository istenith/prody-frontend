"use client"
import Image from 'next/image'
import React, {useEffect} from 'react'
import Astronaut from '../../../../public/images/Astronaut.png'
import { TypeAnimation } from 'react-type-animation'
import Navbar from '../../components/Navbar/Navbar'
import { LazyMotion , domAnimation, motion, useAnimate} from 'framer-motion'

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
      <div className=''>
        <Navbar isHomePage={false} />
        <div className="hero randomBlobBackground3 h-screen py-20 px-10">
          <div className="hero-content flex-col lg:flex-row">
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
              <p className='lemonMilkFont text-warning' style={{fontSize: '0.9rem'}}>&gt;&gt; ASTRONAUT PROFILE...</p>

              <h1 className="text-4xl py-4 font-bold beyonderFont" style={{lineHeight: '3rem'}}>
                <TypeAnimation
                  sequence={[`HI, ${username}`, 500, `HI, ${prody_id}`, 500]}
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
              <p className="py-6 text-lg">
                This is your <span className=''>space station</span> where you can check the events you&apos;ve completed, upcoming events and your progress!
              </p>
              <div className="flex m-auto flex-col w-11/12 md:w-80 lg:w-40 md:flex-row gap-4">
                <button className="btn btn-outline">Your Events</button>
                <button className="btn btn-primary">Logout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
        </div>
      </div>
      </div>
    </LazyMotion>
  )
}

export default Dashboard
