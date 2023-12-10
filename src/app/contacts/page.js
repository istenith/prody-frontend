"use client"
import React from 'react';
import "../contacts/contact.css";
import Navbar from '../components/Navbar/Navbar.tsx';
// import Image from 'next/image';

const Contact = () => {
  
  const contactData = [
    {
      id: 1,
      image: 'images/contact.jpg',
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      image: 'images/contact.jpg',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
    },
    {
      id: 3,
      image: 'images/contact.jpg',
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
    },
    {
      id: 4,
      image: 'images/contact.jpg',
      name: 'Bob Anderson',
      email: 'bobanderson@example.com',
    },
    {
      id: 5,
      image: 'images/contact.jpg',
      name: 'Eve Taylor',
      email: 'evetaylor@example.com',
    },
    {
      id: 6,
      image: 'images/contact.jpg',
      name: 'Charlie Brown',
      email: 'charliebrown@example.com',
    },
    {
      id: 7,
      image: 'images/contact.jpg',
      name: 'Grace Wilson',
      email: 'gracewilson@example.com',
    },
    {
      id: 8,
      image: 'images/contact.jpg',
      name: 'David Lee',
      email: 'davidlee@example.com',
    },
    {
      id: 9,
      image: 'images/contact.jpg',
      name: 'Lucy Rogers',
      email: 'lucyrogers@example.com',
    },
  ];
  

  return (

    
    <div className="contact-container">
      <Navbar isHomePage={false}/>


      

<div className="planet-svg">
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
      </div>

      {contactData.map((contact) => (
        <div key={contact.id} className="contact-card">



          <div className="contact-image">
            <img src={contact.image} alt={contact.name} />
          </div>
          <div className="contact-details">
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
