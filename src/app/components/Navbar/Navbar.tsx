import React from 'react'
import {motion} from 'framer-motion'
import Link from "next/link"
import { useWindowSize } from '@uidotdev/usehooks'
import img from "../../../../public/images/menu-bar.png"
import Image from 'next/image'

interface NavbarProps {
  isHomePage: Boolean;
}


const Navbar = ({isHomePage}: NavbarProps) => {
  const window = useWindowSize()
  const windowWidth = window.width!

  if (windowWidth > 880) {
    return(  
      <motion.div
        initial={{y: '-100vh'}}
        animate={{y:0}}
        exit={{y:'100vh'}}
        transition={{duration: 1.5, delay: 0.6}}
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
                <Link href={"/"} className='spaceFont text-3xl'>PRODYOGIKI</Link>
              </li>
              <li>
                <Link href={"/events"}>Events</Link>
              </li>
              <li>
                <Link href={"/participate"}>Participate &#129042;</Link>
              </li>
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
      <div className="drawer" style={{zIndex: 100}}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-row justify-between">
          <span className='spaceFont text-4xl p-8'>PRODYOGIKI</span>
          <span className='p-5 my-auto'>
            <label htmlFor="my-drawer" className="text-4xl m-auto drawer-button">
              ☰
            </label>
          </span>
          
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
        </div>
      </div>
    )
  }   
}

export default Navbar
