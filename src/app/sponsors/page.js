'use client'

import React, { useState, useEffect } from 'react';
import "./supporter.css";
import Navbar from '../components/Navbar/Navbar';

const SupporterCard = ({ title, content, onClick ,src}) => (
    <div className="supportcard p-2 m-auto bg-gray-600 rounded-lg shadow-lg" onClick={onClick}>
      <img src={src} alt="supporter" className="card-img rounded m-auto h-2/3 w-5/6"/> 
      <h3 className="text-center text-white text-lg font-semibold truncate">{title}</h3>
      <p className="text-center text-white text-m overflow-ellipsis overflow-hidden">{content}</p>
    </div>
);

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
      if (event.keyCode === 27) { // 27 is the key code for the Esc key
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

  const supporters = [
    { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1' ,src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01"},
    { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 1, title: 'Sponsor 1', content: 'Description for sponsor 1',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    { id: 2, title: 'Sponsor 2', content: 'Description for sponsor 2',src:"https://flaticons.net/icon.php?slug_category=brand-identity&slug_icon=tata-01" },
    // ... other supporters
  ];

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
            title={selectedSupporter.title}
            content={selectedSupporter.content}
            src={selectedSupporter.src}
            onClose={() => toggleModal(null)}
          />
        )}
      </div>
     </div>
    <div className={selectedSupporter ? " blurred items-center text-white p-8" : " items-center text-white p-8"}>
      
      <h2 className="text-center text-4xl font-bold mb-4">OUR SUPPORTERS</h2>
      <h3 className="text-center text-xl font-bold mt-12 mb-4">SPONSORS & PARTNERS //</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 mb-8">
        {supporters.map(supporter => (
          <SupporterCard key={supporter.id} title={supporter.title} content={supporter.content} src={supporter.src} onClick={() => toggleModal(supporter)} />
        ))}
        
      </div>
      <h3 className="text-center text-xl font-bold mt-12 mb-4">Past Production and Program Sponsors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
        {olds.map(old => (
          <SupporterCard key={old.id} title={old.title} content={old.content} src={old.src} onClick={() => toggleModal(old)} />
        ))}
        
      </div>
      <h3 className="text-center text-xl font-semibold mt-20 mb-4">Proud Partnership With:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mb-8">
        {partners.map(partner => (
          <SupporterCard key={partner.id} title={partner.title} content={partner.content} src={partner.src} onClick={() => toggleModal(partner)}/>
        ))}
      
      </div>
      
    </div>
    </>
  );
};

export default SupportersComponent;
