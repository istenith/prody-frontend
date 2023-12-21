import React from 'react';

interface HeaderProps {
  message: string;
}

const Header: React.FC<HeaderProps> = ({ message }) => {
  return (
    <header className="mx-auto mt-2 mb-4"> {/* Add margin-bottom to create space between header and navbar */}
      <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-rose-500 text-center mx-auto">
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
      {/* Add more components or content below if needed */}
    </div>
  );
};

export default App;
