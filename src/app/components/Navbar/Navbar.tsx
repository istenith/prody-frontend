import React , {useState ,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from "next/link"
import { useWindowSize } from '@uidotdev/usehooks'
import img from "../../../../public/logos/ProdyLogo.webp"
import Image from 'next/image'

interface NavbarProps {
  isHomePage: Boolean;
}


const Navbar = ({isHomePage}: NavbarProps) => {
  const [isLoggedIn ,setIsLoggedIn] = useState(false)
  const window = useWindowSize()
  const windowWidth = window.width!

  useEffect(() => {
    const token = localStorage.getItem('myJwtToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('myJwtToken');
    setIsLoggedIn(false);
  };

  if (windowWidth > 880) {
    return(  
      <motion.div
        initial={{y: '-100vh'}}
        animate={{y:0}}
        exit={{y:'100vh'}}
        transition={{duration: 1.8, delay: 1}}
        className='flex beyonderFont text-xs flex-row justify-around items-center fixed top-0 left-0 mx-auto w-full z-50 text-white'
      >
          <ul className='list-none navBarShape py-2 px-12 items-center flex flex-row justify-center gap-10'>
          
          {/* Conditional Rendering for the navbar to change content on homepage */}
          {!isHomePage?
            <>
              <li>
                <Link href={"/sponsors"}>Sponsors</Link>
              </li>
             
              <li>
                <Link href={"/contacts"}>Contact</Link>
              </li>
              <li>
                <Link href={"/events"}>Events</Link>
              </li>
              <li>
                <Link href={"/home"} className='spaceFont text-xl'>PRODYOGIKI</Link>
              </li>
              <li>
                <Link href={"/external"}>Hackathon</Link>
              </li>
              
              {!isLoggedIn ? (
              <li>
                <Link href={"/participate"}>Participate &#129042;</Link>
              </li>
            ) : (
              <>
              <li>
                <Link href={"/me"}>Dashboard</Link>
              </li>
              <li onClick={handleLogout}><Link href={"/participate"}>Log Out &#129042;</Link></li>
              </>
            )}
              
              
              
            </> :
            <>
              <li className='text-4xl  navBarShape'>&nbsp; Enter the Exoplanet</li> 
            </>
              }
        </ul>
      </motion.div>
    )
  }else{
    return(
      <div className="drawer fixed top-0 left-0" style={{zIndex: 100}}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-violet-950	 flex flex-row justify-around">
          <span className='spaceFont my-auto p-3'>Prodyogiki</span>
          <span className='p-3 my-auto'>
            <label htmlFor="my-drawer" className="text-2xl m-auto drawer-button">
              ☰
            </label>
          </span>
          
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
         
          <ul className="menu p-4 w-9/12 min-h-full bg-violet-950		 flex flex-col items-center justify-center">
          <Image src={img} alt="menu bar" className="drawer-overlay" style={{width:'100px'}} />
          <p className='tagLine spaceFont text-xs mt-5' style={{textAlign:'center', lineHeight:'1.5rem'}}>IGNITING THE COSMIC CURIOSITY</p>
          {/* <p className='lemonMilk text-sm pt-2'><span className='text-warning'>9<sup>th</sup> - 11<sup>th</sup></span> February, 2024</p> */}
          <br />
          <br />
            <li><Link href={"/home"}>Home</Link></li>
            <li><Link href={"/events"}>Events</Link></li>
            <li><Link href={"/timeline"}>Timeline</Link></li>
            <li><Link href={"/sponsors"}>Sponsors</Link></li>
            <li><Link href={"/external"}>Hackathon</Link></li>
            <li><Link href={"/contacts"}>Contact</Link></li>
            {!isLoggedIn ? (
              <li>
                <Link href={"/participate"}>Participate &#129042;</Link>
              </li>
            ) : (
              <>
              <li><Link href={"/me"}>Dashboard</Link></li>
              <li onClick={handleLogout}><Link href={"/participate"}>Log Out &#129042;</Link></li>
              </>
            )} 
            
          </ul>
        </div>
      </div>
    )
  }   
}
export default Navbar;
