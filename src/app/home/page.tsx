'use client'
import type { NextPage } from 'next'

import Head from 'next/head'
import  {useEffect, useState}  from 'react'
import  TimerContainer  from './components/Timer'
import Footer  from './components/footer'
import  Header  from './components/header'
import Navbar from '../components/Navbar/Navbar'  


const Home: NextPage = () => {

  const [time, setTime] = useState<number>(7);
  const [newTime, setNewTime] = useState<number>(0)
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
  

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
    }

  }, [time]);

  const handleClick = () => {

    setTime(newTime);
    console.log(time);
    setNewTime(0);
  };

  const handleChange = (e: any) => {
    let inputTime = e.target.value;
    setNewTime(inputTime);

  };

  

  return (
           <>
            <Navbar isHomePage={false}/>  

    
            <div className="flex min-h-screen flex-col items-center" style= {{background : 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgMTQyMiA4MDAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ib29vc2NpbGxhdGUtZ3JhZCI+PHN0b3Agc3RvcC1jb2xvcj0iaHNsKDIwNiwgNzUlLCA0OSUpIiBzdG9wLW9wYWNpdHk9IjEiIG9mZnNldD0iMCUiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSJoc2woMzMxLCA5MCUsIDU2JSkiIHN0b3Atb3BhY2l0eT0iMSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9InVybCgjb29vc2NpbGxhdGUtZ3JhZCkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTSAwIDU3MiBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiA1NzIiIG9wYWNpdHk9IjAuODciPjwvcGF0aD48cGF0aCBkPSJNIDAgNTUwIFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDU1MCIgb3BhY2l0eT0iMC4xMSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCA1MjggUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgNTI4IiBvcGFjaXR5PSIwLjM5Ij48L3BhdGg+PHBhdGggZD0iTSAwIDUwNiBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiA1MDYiIG9wYWNpdHk9IjAuNzMiPjwvcGF0aD48cGF0aCBkPSJNIDAgNDg0IFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDQ4NCIgb3BhY2l0eT0iMC43MSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCA0NjIgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgNDYyIiBvcGFjaXR5PSIwLjQ3Ij48L3BhdGg+PHBhdGggZD0iTSAwIDQ0MCBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiA0NDAiIG9wYWNpdHk9IjAuNTYiPjwvcGF0aD48cGF0aCBkPSJNIDAgNDE4IFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDQxOCIgb3BhY2l0eT0iMC4yNSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAzOTYgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgMzk2IiBvcGFjaXR5PSIwLjUyIj48L3BhdGg+PHBhdGggZD0iTSAwIDM3NCBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiAzNzQiIG9wYWNpdHk9IjAuNTIiPjwvcGF0aD48cGF0aCBkPSJNIDAgMzUyIFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDM1MiIgb3BhY2l0eT0iMC43MyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAzMzAgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgMzMwIiBvcGFjaXR5PSIwLjA4Ij48L3BhdGg+PHBhdGggZD0iTSAwIDMwOCBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiAzMDgiIG9wYWNpdHk9IjAuNjUiPjwvcGF0aD48cGF0aCBkPSJNIDAgMjg2IFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDI4NiIgb3BhY2l0eT0iMC41OCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAyNjQgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgMjY0IiBvcGFjaXR5PSIwLjg5Ij48L3BhdGg+PHBhdGggZD0iTSAwIDI0MiBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiAyNDIiIG9wYWNpdHk9IjAuNDciPjwvcGF0aD48cGF0aCBkPSJNIDAgMjIwIFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDIyMCIgb3BhY2l0eT0iMC4xNCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxOTggUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgMTk4IiBvcGFjaXR5PSIwLjIwIj48L3BhdGg+PHBhdGggZD0iTSAwIDE3NiBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiAxNzYiIG9wYWNpdHk9IjAuNzYiPjwvcGF0aD48cGF0aCBkPSJNIDAgMTU0IFEgMzU1LjUgLTEwMCA3MTEgNDAwIFEgMTA2Ni41IDkwMCAxNDIyIDE1NCIgb3BhY2l0eT0iMC4xNyI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxMzIgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgMTMyIiBvcGFjaXR5PSIwLjY3Ij48L3BhdGg+PHBhdGggZD0iTSAwIDExMCBRIDM1NS41IC0xMDAgNzExIDQwMCBRIDEwNjYuNSA5MDAgMTQyMiAxMTAiIG9wYWNpdHk9IjAuNjciPjwvcGF0aD48cGF0aCBkPSJNIDAgODggUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgODgiIG9wYWNpdHk9IjAuNjQiPjwvcGF0aD48cGF0aCBkPSJNIDAgNjYgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgNjYiIG9wYWNpdHk9IjAuNjYiPjwvcGF0aD48cGF0aCBkPSJNIDAgNDQgUSAzNTUuNSAtMTAwIDcxMSA0MDAgUSAxMDY2LjUgOTAwIDE0MjIgNDQiIG9wYWNpdHk9IjAuMzgiPjwvcGF0aD48L2c+PC9zdmc+")' }}>
            <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" /> 
        
      </Head>

      <Header   />

      {countdownEnded ? (
          <div className="text-4xl font-bold">Prodyogiki</div>
        ) : (
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        )}

        <Footer />
    </div>
    </>

  ) 
}





export default Home