"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.tsx';
import Footer from '../components/Footer/Footer';
import Card from '../components/ContactCard/Card.tsx';
import "../contacts/contact.css";

function Contact() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const apiEndpoint = 'https://api-dev.prody.istenith.com/api/contactus/';

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
  <div className='w-screen'>   
    <div className="contact-container w-screen">
      <Navbar isHomePage={false}/>
      {/* <div className="planet-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="173" viewBox="0 0 175 173" fill="none">
          <path d="M13.9323 132.722C-12.1557 92.8527 -0.542496 39.6684 39.8712 13.9317C80.2849 -11.805 134.195 -0.3482 160.284 39.5213C186.372 79.3908 174.758 132.575 134.344 158.312C93.9306 184.049 40.0204 172.592 13.9323 132.722Z" fill="url(#paint0_radial_647_1097)"/>
          <defs>
            <radialGradient id="paint0_radial_647_1097" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.755 0.183391) rotate(126.701) scale(186.488 187.228)">
              <stop/>
              <stop offset="0.567337" stop-color="#160815"/>
              <stop offset="0.840936" stop-color="#460D13"/>
              <stop offset="1" stop-color="#9C4F2E"/>
            </radialGradient>
          </defs>
        </svg>
      </div> */}

      {contactData.map((contact) => (
        <Card contact={contact} key={contact.id} />
        ))}
    </div>
   
   
  </div> 
  );
}

export default Contact;