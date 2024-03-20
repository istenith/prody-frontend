import React from "react";
import dynamic from 'next/dynamic';

const FirstPage = dynamic(
  () => import('./homeComponents/Fullpage.js'),
  { ssr: false } 
);



function App() {
  return (
    <div>
      <FirstPage />
    </div>
  );
}

export default App;