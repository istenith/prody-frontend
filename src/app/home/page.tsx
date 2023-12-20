'use client'
import type { NextPage } from 'next'

import Head from 'next/head'
import  {useEffect, useState}  from 'react'
import  TimerContainer  from './components/Timer'
import Footer  from './components/footer'
import  Header  from './components/header'
import styles from './page.module.css'


const Home: NextPage = () => {

  const [time, setTime] = useState<number>(7);
  const [newTime, setNewTime] = useState<number>(0)
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

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
      }
    })

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
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Header message={message} />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <Footer />
    </div>
  )
}

<div style={{width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(89deg, #1E003C 0%, #482D6A 100%)'}}>
    <div style={{width: 555, height: 585, left: 920, top: 9656, position: 'absolute', background: 'rgba(26, 80, 142, 0.50)', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
    <div style={{width: 848, height: 871, left: 285, top: 9671, position: 'absolute', background: 'rgba(26, 80, 142, 0.40)', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
    <div style={{width: 1487.53, height: 995.93, left: -448.24, top: 9002.80, position: 'absolute', transform: 'rotate(-59.59deg)', transformOrigin: '0 0', border: '0.92px rgba(255, 255, 255, 0.15) solid'}}></div>
    <div style={{width: 853.47, height: 571.41, left: 220.61, top: 10237.08, position: 'absolute', transform: 'rotate(-59.59deg)', transformOrigin: '0 0', border: '0.92px rgba(255, 255, 255, 0.20) solid'}}></div>
    <div style={{width: 1110.27, height: 261.93, left: 311.86, top: 8054.05, position: 'absolute'}}>
        <div style={{width: 174.70, height: 171.87, left: 0, top: 0, position: 'absolute', background: 'radial-gradient(46.30% 46.30% at 63.31% 15.65%, black 0%, #160815 57%, #460D13 84%, #9C4F2E 100%)'}}></div>
        <div style={{width: 144.99, height: 142.64, left: 965.28, top: 119.28, position: 'absolute', background: 'radial-gradient(47.24% 47.24% at 81.14% 18.66%, #090909 0%, #140D17 75%, #450F15 88%, #624B10 100%)'}}></div>
    </div>
    <div style={{width: 2028.36, height: 3522.28, left: -395.09, top: 573, position: 'absolute'}}>
        <div style={{width: 1278.20, height: 810.96, left: 525.53, top: 2092.06, position: 'absolute', transform: 'rotate(39.47deg)', transformOrigin: '0 0', background: 'rgba(37, 19, 106, 0)', boxShadow: '400px 400px 400px ', borderRadius: 9999, filter: 'blur(400px)'}} />
        <div style={{width: 465.69, height: 839.65, left: 1205.09, top: 232.96, position: 'absolute', transform: 'rotate(-30.02deg)', transformOrigin: '0 0', background: '#251268', boxShadow: '250px 250px 250px ', filter: 'blur(250px)'}}></div>
        <div style={{width: 465.69, height: 839.65, left: 1205.09, top: 232.96, position: 'absolute', transform: 'rotate(-30.02deg)', transformOrigin: '0 0', background: '#251268', boxShadow: '250px 250px 250px ', filter: 'blur(250px)'}}></div>
        <div style={{width: 465.69, height: 839.65, left: 1205.09, top: 232.96, position: 'absolute', transform: 'rotate(-30.02deg)', transformOrigin: '0 0', background: '#251268', boxShadow: '250px 250px 250px ', filter: 'blur(250px)'}}></div>
        <div style={{width: 465.69, height: 839.65, left: 1205.09, top: 232.96, position: 'absolute', transform: 'rotate(-30.02deg)', transformOrigin: '0 0', background: '#251268', boxShadow: '250px 250px 250px ', filter: 'blur(250px)'}}></div>
        <div style={{width: 465.69, height: 839.65, left: 1205.09, top: 232.96, position: 'absolute', transform: 'rotate(-30.02deg)', transformOrigin: '0 0', background: '#251268', boxShadow: '250px 250px 250px ', filter: 'blur(250px)'}}></div>
    </div>
    <div style={{width: 112.31, height: 110.49, left: 1138.15, top: 244.67, position: 'absolute', background: 'radial-gradient(45.42% 45.42% at 43.45% 25.81%, rgba(17, 17, 17, 0) 50%, #5E2495 96%)'}}></div>
    <div style={{width: 38.99, height: 38.60, left: 1267.83, top: 355.16, position: 'absolute', transform: 'rotate(25.99deg)', transformOrigin: '0 0', background: 'radial-gradient(45.42% 45.42% at 43.45% 25.81%, rgba(17, 17, 17, 0) 50%, #A24F2C 96%)'}}></div>
    <div style={{left: 843, top: 73, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}> </div>
    <div style={{width: 147, height: 24, left: 164, top: 71, position: 'absolute'}}>
        <div style={{width: 26.25, height: 0, left: 29, top: 24, position: 'absolute', transform: 'rotate(-49.64deg)', transformOrigin: '0 0', border: '2px white solid'}}></div>
        <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', letterSpacing: 5, wordWrap: 'break-word'}}>Prodyogiki</div>
    </div>
    <div style={{left: 1136, top: 74, position: 'absolute'}}>
        <div style={{width: 14, height: 0, left: 78, top: 10, position: 'absolute', border: '1.50px white solid'}}></div>
        <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Register</div>
    </div>
    <div style={{left: 1135, top: 74, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word'}}>Register</div>
    <div style={{width: 14, height: 0, left: 1214, top: 84, position: 'absolute', border: '1.50px white solid'}}></div>
    <div style={{width: 302.74, height: 362.27, left: 1420.11, top: 720.81, position: 'absolute', transform: 'rotate(174.51deg)', transformOrigin: '0 0', background: 'radial-gradient(49.69% 49.69% at 63.68% 14.86%, #111111 39%, #251268 85%, #5F1084 90%), radial-gradient(34.20% 34.20% at 36.70% 37.81%, rgba(242.21, 242.36, 242.14, 0) 54%, rgba(0, 0, 0, 0.62) 87%)', boxShadow: '0px 0px 30px rgba(110.23, 66.96, 49.14, 0.25) inset'}}></div>
    <div style={{width: 879, height: 439, left: 282, top: 279, position: 'absolute'}}>
        <div style={{width: 114, height: 114, left: -37, top: -57, position: 'absolute', background: 'radial-gradient(49.45% 49.45% at 64.06% 14.96%, rgba(17, 17, 17, 0) 58%, rgba(31, 39, 55, 0.70) 87%)'}}></div>
        <div style={{width: 375.07, height: 277.04, left: -464, top: 15, position: 'absolute'}}>
            <div style={{width: 361.07, height: 267.04, left: 0, top: 10, position: 'absolute', background: '#3E1D6A', boxShadow: '207.5098876953125px 207.5098876953125px 207.5098876953125px ', filter: 'blur(207.51px)'}}></div>
            <div style={{width: 361.07, height: 277, left: 14, top: 0, position: 'absolute', background: '#3E1D6A', boxShadow: '207.5098876953125px 207.5098876953125px 207.5098876953125px ', filter: 'blur(207.51px)'}}></div>
            <div style={{width: 123, height: 123, left: 209, top: 94, position: 'absolute', background: 'radial-gradient(47.18% 47.18% at 52.40% 13.22%, #111111 47%, #1F2737 87%)'}}></div>
        </div>
    </div>
    <div style={{width: 30.32, height: 47.38, left: 340.94, top: 989.52, position: 'absolute'}}>
        <div style={{width: 21.38, height: 32.72, left: 8.18, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.68)'}}></div>
        <div style={{width: 17.12, height: 32.72, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.33)'}}></div>
        <div style={{width: 12.57, height: 24.39, left: 17.75, top: 22.99, position: 'absolute', background: 'rgba(255, 255, 255, 0.68)'}}></div>
        <div style={{width: 20.36, height: 16.59, left: 0.75, top: 30.78, position: 'absolute', background: 'rgba(255, 255, 255, 0.33)'}}></div>
        <div style={{width: 16.58, height: 15.20, left: 12.98, top: 17.52, position: 'absolute', background: 'white'}}></div>
    </div>
    <div style={{width: 198.55, height: 4.93, left: 482.34, top: 1014.19, position: 'absolute', border: '1.96px #EDBAFF solid'}}></div>
    <div style={{width: 349, height: 367, left: 979, top: 1095, position: 'absolute', background: '#D0719B', boxShadow: '150px 150px 150px ', borderRadius: 9999, filter: 'blur(150px)'}} />
    <div style={{width: 53.62, height: 52.75, left: 1106.06, top: 1304.24, position: 'absolute', background: 'linear-gradient(119deg, rgba(198, 156, 74, 0.28) 27%, rgba(255, 107, 0, 0) 100%)'}}></div>
    <div style={{width: 104.48, height: 111.49, left: 1330, top: 1108.61, position: 'absolute', transform: 'rotate(-0.88deg)', transformOrigin: '0 0', background: '#6B2C96', boxShadow: '50px 50px 50px ', borderRadius: 9999, filter: 'blur(50px)'}} />
    <div style={{width: 1918.55, height: 1476.97, left: -221.61, top: 223.53, position: 'absolute'}}>
        <div style={{width: 1306.59, height: 783.44, left: 753.71, top: 0, position: 'absolute', transform: 'rotate(38.69deg)', transformOrigin: '0 0', background: 'rgba(173, 56, 193, 0.50)', boxShadow: '837.5604858398438px 837.5604858398438px 837.5604858398438px ', borderRadius: 9999, filter: 'blur(837.56px)'}} />
        <div style={{width: 713.64, height: 514.45, left: 582.39, top: 436.97, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: '#AD38C1', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
        <div style={{width: 1755.88, height: 1082.78, left: 187.58, top: 115.85, position: 'absolute', transform: 'rotate(9.66deg)', transformOrigin: '0 0', border: '1.04px rgba(255, 255, 255, 0.10) solid'}}></div>
        <div style={{width: 307.51, height: 300.56, left: 837.08, top: 645.47, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: 'rgba(148, 137, 228, 0.51)', boxShadow: '70px 70px 70px ', borderRadius: 9999, filter: 'blur(70px)'}} />
        <div style={{width: 171.65, height: 167.76, left: 921.25, top: 695.47, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: '#A5FAFF', boxShadow: '60px 60px 60px ', borderRadius: 9999, filter: 'blur(60px)'}} />
        <div style={{width: 89.25, height: 87.80, left: 515.43, top: 469.04, position: 'absolute', background: 'radial-gradient(37.07% 37.07% at 31.02% 36.05%, #190F2E 47%, #7D4087 95%)', boxShadow: '4px 4px 4px ', filter: 'blur(4px)'}}></div>
        <div style={{width: 168.45, height: 165.71, left: 493.37, top: 706.80, position: 'absolute', background: 'radial-gradient(50.82% 47.01% at 47.70% 65.67%, #386480 0%, #5B4BB9 68%, #F9FDFF 93%)'}}></div>
        <div style={{width: 77.21, height: 75.97, left: 293.81, top: 782.76, position: 'absolute', background: 'radial-gradient(31.94% 31.94% at 41.30% 33.72%, #130F1A 47%, #3B2A5E 82%, #8543B1 99%)', boxShadow: '5px 5px 5px ', filter: 'blur(5px)'}}></div>
        <div style={{width: 76.21, height: 74.98, left: 857.38, top: 882.41, position: 'absolute', background: 'radial-gradient(72.39% 72.39% at 116.69% 262.07%, #77099E 0%, #6B2DAA 70%, #6CE8FF 100%)', boxShadow: '5px 5px 5px ', filter: 'blur(5px)'}}></div>
        <div style={{width: 168.47, height: 165.74, left: 1413.92, top: 675.23, position: 'absolute', background: 'radial-gradient(50.82% 55.92% at 96.07% 23.88%, #FF994F 0%, #EB6E53 72%, #DEFFFB 90%)'}}></div>
        <div style={{width: 37.20, height: 49.08, left: 1479.27, top: 733.93, position: 'absolute', background: 'linear-gradient(139deg, rgba(111, 53, 0, 0.34) 0%, rgba(181, 87, 0, 0) 100%)'}}></div>
        <div style={{width: 107.30, height: 105.56, left: 1218.38, top: 716.67, position: 'absolute', background: 'radial-gradient(62.47% 58.01% at 121.37% 18.10%, #200F31 0%, #82118C 84%)'}}></div>
        <div style={{width: 200.56, height: 3.95, left: 760.11, top: 793.62, position: 'absolute', border: '1.96px #BAFBFF solid'}}></div>
        <div style={{width: 225.46, height: 221.82, left: 1242.44, top: 996.85, position: 'absolute', background: 'radial-gradient(46.59% 52.32% at 89.51% 49.73%, #45122B 0%, #1B1200 69%, #FFE7D1 88%)', boxShadow: '1px 1px 5px #FD91FF inset'}}></div>
        <div style={{width: 233.91, height: 206.10, left: 984.73, top: 765.01, position: 'absolute', border: '3.20px #BAFBFF solid'}}></div>
        <div style={{width: 74.63, height: 72.36, left: 1562.90, top: 981.19, position: 'absolute', transform: 'rotate(-171.64deg)', transformOrigin: '0 0', background: 'radial-gradient(65.40% 61.89% at 65.20% 130.18%, black 41%, black 60%, #3F048B 100%)', boxShadow: '7px 7px 7px ', borderRadius: 9999, filter: 'blur(7px)'}} />
        <div style={{width: 198.55, height: 195.34, left: 341.95, top: 996.85, position: 'absolute', background: 'radial-gradient(41.16% 41.16% at 49.17% 55.64%, #07090F 47%, #07193E 70%, #015980 93%)'}}></div>
    </div>
    <div style={{width: 1918.55, height: 1476.97, left: -221.61, top: 223.53, position: 'absolute'}}>
        <div style={{width: 713.64, height: 514.45, left: 582.39, top: 436.97, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: '#AD38C1', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
        <div style={{width: 1755.88, height: 1082.78, left: 187.58, top: 115.85, position: 'absolute', transform: 'rotate(9.66deg)', transformOrigin: '0 0', border: '1.04px rgba(255, 255, 255, 0.10) solid'}}></div>
        <div style={{width: 307.51, height: 300.56, left: 837.08, top: 645.47, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: 'rgba(148, 137, 228, 0.51)', boxShadow: '70px 70px 70px ', borderRadius: 9999, filter: 'blur(70px)'}} />
        <div style={{width: 171.65, height: 167.76, left: 921.25, top: 695.47, position: 'absolute', transform: 'rotate(2.95deg)', transformOrigin: '0 0', background: '#A5FAFF', boxShadow: '60px 60px 60px ', borderRadius: 9999, filter: 'blur(60px)'}} />
        <div style={{width: 89.25, height: 87.80, left: 515.43, top: 469.04, position: 'absolute', background: 'radial-gradient(37.07% 37.07% at 31.02% 36.05%, #190F2E 47%, #7D4087 95%)', boxShadow: '4px 4px 4px ', filter: 'blur(4px)'}}></div>
        <div style={{width: 168.45, height: 165.71, left: 493.37, top: 706.80, position: 'absolute', background: 'radial-gradient(50.82% 47.01% at 47.70% 65.67%, #692A95 0%, #4531BB 68%, #F9FDFF 93%)'}}></div>
        <div style={{width: 77.21, height: 75.97, left: 293.81, top: 782.76, position: 'absolute', background: 'radial-gradient(31.94% 31.94% at 41.30% 33.72%, #170D3E 47%, #231451 82%, #8543B1 99%)', boxShadow: '5px 5px 5px ', filter: 'blur(5px)'}}></div>
        <div style={{width: 76.21, height: 74.98, left: 857.38, top: 882.41, position: 'absolute', background: 'radial-gradient(72.39% 72.39% at 116.69% 262.07%, #77099E 0%, #6B2DAA 70%, #6CE8FF 100%)', boxShadow: '5px 5px 5px ', filter: 'blur(5px)'}}></div>
        <div style={{width: 168.47, height: 165.74, left: 1413.92, top: 675.23, position: 'absolute', background: 'radial-gradient(50.82% 55.92% at 96.07% 23.88%, #3F187B 0%, #271788 72%, #D889C4 90%)'}}></div>
        <div style={{width: 107.30, height: 105.56, left: 1218.38, top: 716.67, position: 'absolute', background: 'radial-gradient(62.47% 58.01% at 121.37% 18.10%, #200F31 0%, #82118C 84%)'}}></div>
        <div style={{width: 200.56, height: 3.95, left: 760.11, top: 793.62, position: 'absolute', border: '1.96px #BAFBFF solid'}}></div>
        <div style={{width: 225.46, height: 221.82, left: 1242.44, top: 996.85, position: 'absolute', background: 'radial-gradient(46.59% 52.32% at 89.51% 49.73%, #45122B 0%, #1B1200 69%, #FFE7D1 88%)', boxShadow: '1px 1px 5px #FD91FF inset'}}></div>
        <div style={{width: 233.91, height: 206.10, left: 984.73, top: 765.01, position: 'absolute', border: '3.20px #BAFBFF solid'}}></div>
        <div style={{width: 74.63, height: 72.36, left: 1562.90, top: 981.19, position: 'absolute', transform: 'rotate(-171.64deg)', transformOrigin: '0 0', background: 'radial-gradient(65.40% 61.89% at 65.20% 130.18%, black 41%, black 60%, #3F048B 100%)', boxShadow: '7px 7px 7px ', borderRadius: 9999, filter: 'blur(7px)'}} />
        <div style={{width: 198.55, height: 195.34, left: 341.95, top: 996.85, position: 'absolute', background: 'radial-gradient(41.16% 41.16% at 49.17% 55.64%, #0C0922 47%, #07193E 76%, #6C329F 93%)'}}></div>
        <div style={{width: 1306.59, height: 783.44, left: 753.71, top: 0, position: 'absolute', transform: 'rotate(38.69deg)', transformOrigin: '0 0', background: '#2F0E98', boxShadow: '837.5604858398438px 837.5604858398438px 837.5604858398438px ', borderRadius: 9999, filter: 'blur(837.56px)'}} />
    </div>
    <div style={{width: 228, height: 20, left: 568, top: 2438, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: 20.80, letterSpacing: 1.28, wordWrap: 'break-word'}}>Enter the Cosmos Hub</div>
    <div style={{width: 572.29, height: 253.40, left: 61.09, top: 3503.29, position: 'absolute', transform: 'rotate(28.83deg)', transformOrigin: '0 0', background: 'rgba(82.02, 223.98, 147.54, 0.70)', boxShadow: '300px 300px 300px ', borderRadius: 9999, filter: 'blur(300px)'}} />
    <div style={{width: 584.62, height: 379.83, left: 15.04, top: 2700.23, position: 'absolute', background: 'linear-gradient(180deg, black 0%, rgba(170.84, 72.13, 9.78, 0) 100%)', boxShadow: '200px 200px 200px ', filter: 'blur(200px)'}}></div>
    <div style={{width: 436.21, height: 429.16, left: 57.94, top: 3048.48, position: 'absolute', background: '#251268', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
    <div style={{width: 297.38, height: 292.57, left: 127.35, top: 3116.78, position: 'absolute', background: 'black', boxShadow: '50px 50px 50px ', borderRadius: 9999, filter: 'blur(50px)'}} />
    <div style={{paddingTop: 23, paddingBottom: 24, paddingLeft: 64, paddingRight: 63, left: 659, top: 3562, position: 'absolute', background: 'white', boxShadow: '0px 5px 11px rgba(0, 3, 66, 0.07)', borderRadius: 10.02, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div style={{paddingBottom: 0.44, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.12, display: 'flex'}}>
            <div style={{color: 'black', fontSize: 20.33, fontFamily: 'Inter', fontWeight: '600', lineHeight: 27.45, wordWrap: 'break-word'}}>Cosmos Hub</div>
            <div style={{color: 'black', fontSize: 21.33, fontFamily: 'Inter', fontWeight: '600', lineHeight: 27.45, wordWrap: 'break-word'}}>→</div>
        </div>
    </div>
    <div style={{width: 1503.06, height: 938.61, left: -594.65, top: 2994.51, position: 'absolute', transform: 'rotate(-7.21deg)', transformOrigin: '0 0', border: '0.90px rgba(255, 255, 255, 0.10) solid'}}></div>
    <div style={{width: 100.60, height: 99.25, left: 234.61, top: 9740.16, position: 'absolute', background: 'radial-gradient(56.12% 48.58% at 38.82% 64.48%, rgba(0, 0, 0, 0) 0%, rgba(7, 79, 120, 0) 60%, #25D28A 100%)'}}></div>
    <div style={{width: 168.62, height: 166.35, left: 1155, top: 9855, position: 'absolute', background: 'radial-gradient(56.11% 48.57% at 133.44% 48.03%, #030F1A 6%, #030F1A 60%, #25D28A 100%)', border: '1px #2CA78E solid'}}></div>
    <div style={{width: 526, height: 483.55, left: 393, top: 9664.45, position: 'absolute'}}>
        <div style={{width: 526, height: 483.55, left: 0, top: 0, position: 'absolute', background: '#069862', boxShadow: '200px 200px 200px ', borderRadius: 9999, filter: 'blur(200px)'}} />
        <div style={{width: 181.93, height: 167.25, left: 172.03, top: 158.15, position: 'absolute', background: '#50C1C1', boxShadow: '50px 50px 50px ', borderRadius: 9999, filter: 'blur(50px)'}} />
        <div style={{width: 89.11, height: 81.92, left: 218.83, top: 201.38, position: 'absolute', background: '#B0F1FF', boxShadow: '10px 10px 10px ', borderRadius: 9999, filter: 'blur(10px)'}} />
    </div>
    <div style={{width: 466.27, height: 460.01, left: 107, top: 9951.85, position: 'absolute', background: 'radial-gradient(55.24% 60.29% at 76.45% 138.73%, black 54%, #3A1C0B 83%, #9ED574 100%)'}}></div>
    <div style={{paddingTop: 103.12, paddingBottom: 480.65, paddingRight: 511.17, left: -162, top: 8173, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 1034.32, height: 845.27, position: 'relative'}}>
            <div style={{width: 868.14, height: 189.12, left: 170.95, top: 536.88, position: 'absolute', transform: 'rotate(6.01deg)', transformOrigin: '0 0', background: '#9B352E', boxShadow: '500px 500px 500px ', borderRadius: 9999, filter: 'blur(500px)'}} />
            <div style={{width: 841, height: 405, left: 141.30, top: 172.30, position: 'absolute', transform: 'rotate(20.42deg)', transformOrigin: '0 0', background: '#9B352E', boxShadow: '500px 500px 500px ', filter: 'blur(500px)'}}></div>
            <div style={{width: 345, height: 340.36, left: 367.94, top: 0, position: 'absolute', background: '#AE1511', boxShadow: '250px 250px 250px ', borderRadius: 9999, filter: 'blur(250px)'}} />
            <div style={{width: 270, height: 266.37, left: 405.94, top: 36.50, position: 'absolute', background: '#DD7600', boxShadow: '150px 150px 150px ', borderRadius: 9999, filter: 'blur(150px)'}} />
            <div style={{width: 152, height: 149.96, left: 441.15, top: 71.45, position: 'absolute', background: '#DD7600', boxShadow: '4px 4px 4px ', borderRadius: 9999, filter: 'blur(4px)'}} />
        </div>
    </div>
    <div style={{height: 24, paddingBottom: 434.80, paddingLeft: 8, paddingRight: 8, left: 967, top: 13111, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 24, height: 24, background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 24, height: 19.40, background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 24, height: 20.20, background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 24, height: 19.79, background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 21, height: 24, background: 'white'}}></div>
            </div>
        </div>
        <div style={{width: 24, height: 24, opacity: 0.50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 24, height: 16.80, background: 'white'}}></div>
            </div>
        </div>
    </div>
    <div style={{width: 373, height: 430, left: 128, top: 10274, position: 'absolute', background: '#171717', borderRadius: 20, overflow: 'hidden'}}>
        <div style={{width: 373, height: 357, left: 1, top: 433, position: 'absolute', background: 'white', borderRadius: 9999}} />
        <div style={{width: 32, height: 32, left: 32, top: 363.08, position: 'absolute', opacity: 0.33, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 32, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 6.18, height: 6.18, border: '1.50px white solid'}}></div>
                <div style={{width: 8.40, height: 15, border: '1.50px white solid'}}></div>
                <div style={{width: 8.40, height: 15, border: '1.50px white solid'}}></div>
                <div style={{width: 6.18, height: 6.18, border: '1.50px white solid'}}></div>
                <div style={{width: 6.18, height: 6.18, border: '1.50px white solid'}}></div>
                <div style={{width: 15.88, height: 0, border: '1.50px white solid'}}></div>
            </div>
        </div>
        <div style={{left: 32, top: 31, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: 17, letterSpacing: 1.04, wordWrap: 'break-word'}}>Connect</div>
    </div>
    <div style={{width: 374, height: 430, left: 535, top: 10280, position: 'absolute', background: '#171717', borderRadius: 20, overflow: 'hidden'}}>
        <div style={{width: 34, height: 32, left: 32, top: 361, position: 'absolute', opacity: 0.33, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 34, height: 32, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 30, height: 28.70, border: '1.50px white solid'}}></div>
            </div>
        </div>
        <div style={{left: 32, top: 31, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: 17, letterSpacing: 1.04, wordWrap: 'break-word'}}>Integrate</div>
        <div style={{width: 374, height: 350, left: 0, top: 482, position: 'absolute', background: 'white', borderRadius: 9999}} />
    </div>
    <div style={{width: 373, height: 430, left: 941, top: 10280, position: 'absolute', background: '#171717', borderRadius: 20, overflow: 'hidden'}}>
        <div style={{width: 392, height: 368, left: -11, top: 446, position: 'absolute', background: 'white', borderRadius: 9999}} />
        <div style={{width: 17, height: 16, left: 40, top: 357, position: 'absolute', border: '1.50px rgba(255, 255, 255, 0.90) solid'}}></div>
        <div style={{width: 22.13, height: 15.94, left: 38, top: 372, position: 'absolute', border: '1.50px rgba(255, 255, 255, 0.90) solid'}}></div>
        <div style={{left: 32, top: 31, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: 17, letterSpacing: 1.04, wordWrap: 'break-word'}}>Validate</div>
    </div>
    <div style={{height: 28, paddingTop: 4, paddingBottom: 5, paddingLeft: 10, paddingRight: 27, left: 1265, top: 70, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 72, alignSelf: 'stretch', position: 'relative'}}>
            <div style={{width: 14, height: 0, left: 58, top: 10, position: 'absolute', border: '1.50px white solid'}}></div>
            <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Rubik', fontWeight: '500', wordWrap: 'break-word'}}>Login</div>
        </div>
    </div>
    <div style={{width: 1440, height: 1117.41, left: 27, top: 951, position: 'absolute'}}>
        <div style={{width: 1987.19, height: 939.20, left: -274, top: -158, position: 'absolute'}} />
        <div style={{height: 530.27, paddingTop: 238.86, left: 8, top: 49, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 93, display: 'inline-flex'}}>
            <div style={{width: 1184, height: 134, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{width: 373.34, height: 502, paddingBottom: 361.27, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 7.09, display: 'inline-flex'}}>
                    <div style={{color: 'white', fontSize: 27.43, fontFamily: 'Inter', fontWeight: '700', lineHeight: 36.10, wordWrap: 'break-word'}}>Receive Updates</div>
                    <div style={{paddingBottom: 60.42, paddingRight: 119.53, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.41, display: 'inline-flex'}}>
                        <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 13, fontFamily: 'Inter', fontWeight: '300', lineHeight: 21.12, letterSpacing: 0.05, wordWrap: 'break-word'}}>Unsubscribe at any time.</div>
                        <div style={{paddingRight: 0.41, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{color: 'white', fontSize: 13, fontFamily: 'Inter', fontWeight: '300', lineHeight: 21.12, letterSpacing: 0.05, wordWrap: 'break-word'}}>Privacy policy↗</div>
                        </div>
                    </div>
                </div>
                <div style={{width: 373.33, height: 65.98, position: 'relative'}}>
                    <div style={{width: 373.33, height: 65.98, left: 7, top: -416.80, position: 'absolute', background: 'rgba(255, 255, 255, 0.10)', borderRadius: 8}}>
                        <div style={{paddingRight: 184.33, left: 24, top: -41.30, position: 'absolute'}} />
                        <div style={{left: 24, top: 16.62, position: 'absolute', color: '#666666', fontSize: 21.33, fontFamily: 'Inter', fontWeight: '200', wordWrap: 'break-word'}}>Your email</div>
                        <div style={{width: 30.89, height: 22.67, left: 325.67, top: 21.67, position: 'absolute', background: '#666666'}}></div>
                    </div>
                    <div style={{width: 32, height: 32, left: 325, top: -341.88, position: 'absolute'}} />
                </div>
            </div>
            <div style={{width: 905.38, height: 254.30, position: 'relative'}}>
                <div style={{width: 42.29, height: 20, left: 0, top: 23.50, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Learn</div>
                <div style={{width: 90.59, height: 20, left: 0, top: 3, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Introduction</div>
                <div style={{width: 65.18, height: 20, left: 0, top: 45, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Features</div>
                <div style={{width: 56.11, height: 20, left: 0, top: 87, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Staking</div>
                <div style={{width: 76.73, height: 20, left: 0, top: 129, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Get ATOM</div>
                <div style={{width: 30.26, height: 20, left: 0, top: 171, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>FAQ</div>
                <div style={{width: 37.04, height: 20, left: 202.66, top: 23.50, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Build</div>
                <div style={{width: 141, height: 26, left: 202.67, top: 0.14, position: 'absolute', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 4.20, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Developer Portal</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 87.56, height: 86.30, paddingBottom: 60.30, left: 202.66, top: 42, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.56, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Ignite CLI</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 113.67, height: 86.30, paddingBottom: 60.30, left: 202.66, top: 84, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.67, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Cosmos SDK</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 109.38, height: 86.30, paddingBottom: 60.30, left: 202.66, top: 126, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.38, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>IBC Protocol</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 55.81, height: 20, left: 405.33, top: 23.50, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Explore</div>
                <div style={{width: 53.48, height: 20, left: 405.33, top: 3, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Tokens</div>
                <div style={{width: 121.61, height: 20, left: 405.33, top: 45, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Apps & Services</div>
                <div style={{width: 53.79, height: 20, left: 405.33, top: 87, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Wallets</div>
                <div style={{width: 88.95, height: 20, left: 405.33, top: 129, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Gravity DEX</div>
                <div style={{width: 49.69, height: 86.30, paddingBottom: 60.30, left: 405.33, top: 168, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 3.69, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Blog</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 80.84, height: 20, left: 607.98, top: 23.50, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Participate</div>
                <div style={{width: 102, height: 23, paddingRight: 0.11, left: 607.67, top: 0.14, position: 'absolute', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 3.89, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Community</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 110.31, height: 86.30, paddingBottom: 60.30, left: 607.98, top: 42, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.31, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Contributors</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 66.88, height: 86.30, paddingBottom: 60.30, left: 607.98, top: 84, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 3.88, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Events</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 106.78, height: 86.30, paddingBottom: 60.30, left: 607.98, top: 126, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 3.78, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Newsletters</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 78.42, height: 20, left: 810.66, top: 23.50, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Resources</div>
                <div style={{width: 61.36, height: 86.30, paddingBottom: 60.30, left: 810.66, top: 0, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.36, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>About</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 82.61, height: 86.30, paddingBottom: 60.30, left: 810.66, top: 42, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.61, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Press Kit</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 68.19, height: 86.30, paddingBottom: 60.30, left: 810.66, top: 84, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 4.19, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Design</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
                <div style={{width: 94.72, height: 86.30, paddingBottom: 60.30, left: 810.66, top: 126, position: 'absolute', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 3.72, display: 'inline-flex'}}>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 16, fontFamily: 'Inter', fontWeight: '300', lineHeight: 26, wordWrap: 'break-word'}}>Resources</div>
                    <div style={{color: 'rgba(255, 255, 255, 0.50)', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', lineHeight: 12, wordWrap: 'break-word'}}>↗</div>
                </div>
            </div>
        </div>
        <div style={{width: 1243, height: 81, left: 53, top: 8, position: 'absolute', background: 'rgba(58.11, 30.10, 90.51, 0)'}}>
            <div style={{width: 100, height: 100, left: 19, top: -45, position: 'absolute'}}>
                <div style={{width: 91, height: 21, left: 1, top: 65, position: 'absolute'}} />
                <div style={{paddingLeft: 49, paddingRight: 35, left: 13, top: 65, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{width: 66, height: 33, color: '#9492FF', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>HOME</div>
                </div>
            </div>
            <div style={{paddingTop: 4, paddingBottom: 2, paddingLeft: 14, left: 119, top: 10, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 141, alignSelf: 'stretch', paddingTop: 7, paddingLeft: 79, paddingRight: 22, justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>EVENT</div>
                </div>
            </div>
            <div style={{paddingBottom: 13, paddingLeft: 49, paddingRight: 29, left: 296, top: 22, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 102, height: 18, color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>DASHBOARD</div>
            </div>
            <div style={{paddingLeft: 51, paddingRight: 43, left: 458, top: 21, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 76, height: 28, color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>WORKSHOP</div>
            </div>
            <div style={{paddingTop: 11, paddingLeft: 28, left: 602, top: 10, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 125, height: 28, color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>TIMELINE</div>
            </div>
            <div style={{paddingBottom: 4, paddingLeft: 18, left: 765, top: 16, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 123, height: 33, color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>SPONSOR</div>
            </div>
            <div style={{paddingLeft: 12, left: 926, top: 18, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 169, height: 28, color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>CONTACT US</div>
            </div>
        </div>
    </div>
</div>

export default Home