'use client'


import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/ContacttCard/Card';
import Footer from '../components/Footer/Footer';
import '../contacts/contact.css';

const Contact = () => {
  const [contactData, setContactData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api-dev.prody.istenith.com/api/contactus/');
      const resJson = await res.json();
      setContactData(resJson);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-min">
      <Navbar isHomePage={false} />
      <div className="mainEventsPage text-center pt-20 bg">
        <h1 className="beyonderFont text-5xl cardHeading">Contact Us</h1>
        <div className="flex flex-row w-full flex-wrap p-10 gap-5 content-around h-full justify-around">
          {isLoaded &&
            contactData.map((contact) => (
              <Card contact={contact} key={contact.id} />
            ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
