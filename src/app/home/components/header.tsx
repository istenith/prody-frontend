import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  message: string;
}

const Header: React.FC<HeaderProps> = ({ message }) => {
  return (
    <header className="mx-auto mt-4 mb-4 items-center">

      <div style={{ textAlign: 'center' }}>
       
        

 
<Image loader={()=>"/images/prodykkk-01.webp"} src = "/images/prodykkk-01.webp" alt = "logo" width = "500" height = "500" />


        
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