import React from 'react';
import Image from 'next/image';
import prodyLogo from '../../../../public/logos/prodyWhite.webp'
import Tilt from 'react-parallax-tilt'

interface HeaderProps {
  message: string;
}

const Header: React.FC<HeaderProps> = ({ message }) => {
  return (
    <header className="mx-auto mt-9 mb-4 items-center">
      <div style={{ textAlign: 'center' }} className='mb-20' >
        <Tilt>
          <Image src={prodyLogo} alt='prodyLogo' width = "150" style={{ display: 'inline-block' }}/>
        </Tilt>
        <p className='tagLine spaceFont text-0.8 mt-5'>IGNITING THE COSMIC CURIOSITY</p>
        <br />
        <p className=' beyonderFont text-sm'><span className='text-warning'>2<sup>nd</sup> - 4<sup>th</sup></span> February, 2024</p>
        <br />
        <br />
        <br />
      </div>
    </header>
  );
};

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-800 p-4">
      
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header message="We are Launching Soon" />
      
    </div>
  );
};

export default App;