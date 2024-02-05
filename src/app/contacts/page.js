'use client'


import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/ContactCard/Card';
import Footer from '../components/Footer/Footer';
import '../contacts/contact.css';
import Loader from '../LoaderEvent';

const Contact = () => {
  const [contactData, setContactData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.prody.istenith.com/api/contactus/', { next: { revalidate: 60 } });
      const resJson = await res.json();
      setContactData(resJson);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
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
    fetchData();
  }, []);

  return (
    <div className="h-min">
      {loading && (
        <Loader />
      )}
      <Navbar isHomePage={false} />
      <div className="mainEventsPage text-center pt-20 bg">
        <h2 className="beyonderFont  text-center text-2xl font-bold">Contact Us</h2>
        <div className="flex flex-row w-full flex-wrap p-10 gap-5 content-around h-full justify-around">
          {isLoaded &&
            contactData.map((contact) => (
              <Card contact={contact} key={contact.id} />
            ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
