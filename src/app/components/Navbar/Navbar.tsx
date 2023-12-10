import React from 'react'
import {motion} from 'framer-motion'
import Link from "next/link"

interface NavbarProps {
  isHomePage: Boolean;
}

const Navbar = ({isHomePage}: NavbarProps) => {
  return (
    <motion.div
      initial={{y: '-100vh'}}
      animate={{y:0}}
      exit={{y:'100vh'}}
      transition={{duration: 1.5, delay: 0.6}}
      className='beyonderFont text-xs flex flex-row justify-around items-center fixed top-0 left-0 mx-auto w-full z-50 text-white'
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
            <li className='py-2 navBarShape'>Enter the Exoplanet.</li> 
          </>
            }
      </ul>
    </motion.div>
  )
}

export default Navbar
