'use client'
import type { NextPage } from 'next'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import TimerContainer from './components/Timer'
import Footer from '../components/Footer/Footer'
import Header from './components/header'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'
import Loader from '../LoaderEvent'

const Home: NextPage = () => {
     const [time, setTime] = useState<number>(7);

     const [days, setDays] = useState<number>(0);
     const [hours, setHours] = useState<number>(0);
     const [minutes, setMinutes] = useState<number>(0);
     const [seconds, setSeconds] = useState<number>(0);
     const [message, setMessage] = useState<string>("");
     const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
     const [loading, setLoading] = useState(true);

     const timeToDays = time * 60 * 60 * 24 * 1000;
     let countDownDate = new Date().getTime() + timeToDays;

     useEffect(() => {
          var updateTime = setInterval(() => {
               var now = new Date().getTime();
               var difference = countDownDate - now;

               var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
               var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
               var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
               var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

               setDays(newDays);
               setHours(newHours);
               setMinutes(newMinutes);
               setSeconds(newSeconds);

               if (difference <= 0) {
                    clearInterval(updateTime);
                    setMessage("The Launch Has Started");
                    setDays(0);
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                    setCountdownEnded(true);
               }
          }, 1000);

          return () => {
               clearInterval(updateTime);
          };
     }, [time]);

     useEffect(() => {
          const fetchData = async () => {
               await new Promise(resolve => setTimeout(resolve, 2000));
               setLoading(false);
          };

          fetchData();
     }
          , [])


     return (
          <div className='h-full'>
               {loading && (
                    <Loader />
               )}
               <Navbar isHomePage={false} />

               <div className=" flex min-h-screen w-screen flex-col items-center" style={{ background: 'url("/image.svg")', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <Head>

                         <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <Header />

                    {countdownEnded ? (
                         <div className="text-4xl font-bold">Prodyogiki is LIVE!</div>
                    ) : (
                         <TimerContainer
                              days={days}
                              hours={hours}
                              minutes={minutes}
                              seconds={seconds}
                         />
                    )}

                    <div className='home-page-events-and-register-btn' style={{ display: 'flex', flexDirection:  'row', gap: '1rem', marginTop: '1rem' }}>
                         <Link href="/events">
                              <button
                                   className=" spaceFont py-2 px-4 border border-blue-500 text-blue-400 font-bold rounded-full transition duration-300 hover:bg-blue-500 hover:text-white "
                                   style={{width: "100%", margin :"auto"}}
                                   onClick={() => {
                                        console.log("Events button clicked");
                                   }}
                              >
                                   Events
                              </button>
                         </Link>

                         <Link href="/participate">
                              <button
                                   className="spaceFont py-2 px-4 border border-green-500 text-green-400 font-bold rounded-full transition duration-300 hover:bg-green-400 hover:text-white"
                              >
                                   Register
                              </button>
                         </Link>
                    </div>
                         <br />
                         <br />
                         <Footer/>
               </div>
          </div>

     )
}






export default Home;
