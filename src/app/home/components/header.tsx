import React from 'react';

interface HeaderProps {
  message: string;
}

const Header: React.FC<HeaderProps> = ({ message }) => {
  return (
    <header className="mx-auto mt-2 mb-4">
      <h1
        style={{
          fontSize: '2rem',
          marginTop: '2rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
          fontFamily: 'Tourner' , // 
          color: '#ff007f', // 
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {message ? message : " WE'RE LAUNCHING SOON"}
      </h1>
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
