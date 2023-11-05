import React from 'react';
import styles from './globals.css';
import Image from 'next/image';

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
