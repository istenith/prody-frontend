import React from 'react'
import {motion} from 'framer-motion'
import Link from "next/link"

const Navbar = () => {
  return (
    <motion.div
      initial={{y: '-100vh'}}
      animate={{y:0}}
      exit={{y:'100vh'}}
      transition={{duration: 1.5, delay: 0.6}}
      className='beyonderFont text-xs flex flex-row justify-around items-center fixed top-0 left-0 mx-auto w-full z-50 text-white'
    >
      <ul className='list-none navBarShape p-2 items-center flex flex-row w-8/12 justify-center gap-10'>
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
          <Link href={"/timeline"}>Register →</Link>
        </li>
      </ul>
    </motion.div>
  )
}

export default Navbar
