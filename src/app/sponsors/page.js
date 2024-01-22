'use client'

import React, { useState, useEffect } from 'react';
import "./supporter.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Card from '../components/SponsorCard/Card.tsx';
import Loader from '../LoaderEvent';


// const Modal = ({ show, onClose, title,content,src }) => {

  

//   if (!show) return null;

//   return (
//     <div className="modal-backdrop">        
//       <div className="modal-content">
//       <br />
//       <br />
//       <button className="close-modal"  onClick={onClose}>&times;</button>
//       <img src={src} alt="supporter"  className="modal-img" /> 
//       <br />
//       <h3 className="text-center p-2 text-white text-4xl font-semibold " style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>{title}</h3>
//       <p className="text-center text-white text-xl overflow-ellipsis" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
//         {content}
//       </p>
//       </div>
    
//     </div>
//   );
// };

const SupportersComponent = () => {

  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    const fetchData = async () => {
      // Your asynchronous task goes here
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }
  , []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.prody.istenith.com/api/sponsors/');
        const resJson = await res.json();
        
        console.log(resJson);
        setSponsors(resJson);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);


  const [selectedSupporter, setSelectedSupporter] = useState(null);
  const toggleModal = (supporter) => {
    if (supporter) {
      setSelectedSupporter(supporter);
    } else {
      setSelectedSupporter(null);
    }
  };
  
  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) { 
        toggleModal(null);
      }
    };
    if (selectedSupporter) {
      // window.addEventListener('keydown', handleEscKeyPress);
    }
    return () => {
      // window.removeEventListener('keydown', handleEscKeyPress);
    };
  },[selectedSupporter]);

  return (
    <>
    {loading && (
        <Loader />
      )}
      <Navbar isHomePage={false}/>
      <div className="heading-come">
      <h1 className='heading'> COMING SOON!!</h1> 
      </div>
     {/* <div>
        {selectedSupporter && (
          <Modal
            show={!!selectedSupporter}
            title={selectedSupporter.name}
            content={selectedSupporter.description}
            src={selectedSupporter.logo}
            onClose={() => toggleModal(null)}
          />
        )}
      </div> */}
  {/* <div className='h-min'>
  <div className={selectedSupporter ? " blurred items-center text-white" : " items-center text-white sponserPage bg"}>
      <h2 className="beyonderFont  text-center text-2xl font-bold mb-9 mt-11 pt-12">OUR SUPPORTERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 mb-8 sponsor-card-div">
        {sponsors.map(supporter => (
          <Card key={supporter.id} title={supporter.name} content={supporter.description} src={supporter.logo} onClick={() => toggleModal(supporter)} />
        ))}
      </div> */}
    <Footer />
  {/* </div> */}
  {/* </div> */}
    </>
  );
};

export default SupportersComponent;
