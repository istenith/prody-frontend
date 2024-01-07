import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  message: string;
}

const Header: React.FC<HeaderProps> = ({ message }) => {
  return (
    <header className="mx-auto mt-4 mb-4 items-center">

      <div style={{ textAlign: 'center' }}>
        {/* Add your SVG logo here */}
        

 
<Image loader={()=>"/images/prodykkk-01.png"} src = "/images/prodykkk-01.png" alt = "logo" width = "500" height = "500" />


        
      </div>
    </header>
  );
};

interface NavbarProps {
  // Define your NavbarProps if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-800 p-4">
      {/* Your navbar content goes here */}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header message="We are Launching Soon" />
      {/* needed */}
    </div>
  );
};

export default App;