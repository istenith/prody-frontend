'use client'

import React, { useState, useEffect } from 'react';
import "./supporter.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Card from '../components/SponsorCard/Card.tsx';
// import { url } from 'inspector';

const Modal = ({ show, onClose, title,content,src }) => {

  if (!show) return null;

  return (
    <div className="modal-backdrop">        
      <div className="modal-content">
      <button className="close-modal"  onClick={onClose}>&times;</button>
        <img src={src} alt="supporter" className="modal-img"/> 
      <h3 className="text-center p-2 text-white text-5xl font-semibold truncate">{title}</h3>
      <p className="text-center text-white text-2xl overflow-ellipsis overflow-hidden">{content}</p>
      </div>
    
    </div>
  );
};

const SupportersComponent = () => {

  const [sponsors, setSponsors] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api-dev.prody.istenith.com/api/sponsors/');
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
      window.addEventListener('keydown', handleEscKeyPress);
    }
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  },[selectedSupporter]);

  // const supporters = [
  //   { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' ,src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01"},
  //   { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
  //   { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
  //   { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
  //   { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
  //   { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
  // ];

  const olds = [
    { id: 1, title: 'Old Sponsor 1', content: 'Description for old sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01"  },
    { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    // ... other previous sponsors
  ];

  const partners = [
    { id: 1, title: 'Partner 1', content: 'Description for partner 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    // ... other partners
  ];

  return (
    <>
      <Navbar isHomePage={false}/>
     <div className='pt-10'>
     <div>
        {selectedSupporter && (
          <Modal
            show={!!selectedSupporter}
            title={selectedSupporter.name}
            content={selectedSupporter.description}
            src={selectedSupporter.logo}
            onClose={() => toggleModal(null)}
          />
        )}
      </div>
     </div>
  <div className={selectedSupporter ? " blurred items-center text-white" : " items-center text-white"} style= {{background :'url("../../../public/support.webp")'}}>
      
      <h2 className="text-center text-4xl font-bold mb-4">OUR SUPPORTERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 mb-8">
        {sponsors.map(supporter => (
          <Card key={supporter.id} title={supporter.name} content={supporter.description} src={supporter.logo} onClick={() => toggleModal(supporter)} />
        ))}
        
      </div>
      {/* <h3 className="text-center text-xl font-bold mt-12 mb-4">Past Production and Program Sponsors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
        {olds.map(old => (
          <Card key={old.id} title={old.title} content={old.content} src={old.src} onClick={() => toggleModal(old)} />
        ))}
        
      </div>
      <h3 className="text-center text-xl font-semibold mt-20 mb-4">Proud Partnership With:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
        {partners.map(partner => (
          <Card key={partner.id} title={partner.title} content={partner.content} src={partner.src} onClick={() => toggleModal(partner)}/>
        ))}     
      </div> */}
    <Footer />
    </div>
    </>
  );
};

export default SupportersComponent;
