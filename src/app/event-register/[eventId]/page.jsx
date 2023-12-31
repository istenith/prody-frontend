"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import '../event-register.css'

const EventRegisterPage = () => {
  const [event, setEvent] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamId, setTeamId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);

    // Extract the last part of the URL
    const urlSegments = currentUrl.split('/');
    const eventId = urlSegments[urlSegments.length - 1];
    console.log('Extracted eventId:', eventId);

    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://api-dev.prody.istenith.com/api/events/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error.message);
      }
    };

    fetchEventData();
  }, []);

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem('myJwtToken');
      if (!token) {
        alert('Token not found: User Unauthenticated');
        window.location.href = '/login';
        return;
      }

      const response = await axios.post(
        `https://api-dev.prody.istenith.com/api/auth/register-event/${event.id}/`,
        {
          team_name: teamName,
          team_id: teamId,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // alert(response.data.message);
      setErrorMessage(response.data.message);
      setShowModal(true);
      setIsErrorModal(false); // It's a success modal


    } catch (error) {

      const errorMessage =
      error.response.data.message || 
      (Array.isArray(error.response.data) ? error.response.data[0] : null) || 
      error.response.data.detail || 
      'An unexpected error occurred';

      setErrorMessage(errorMessage);
      setShowModal(true);
      setIsErrorModal(true); // It's an error modal

    // alert(errorMessage);
      console.error('Error registering for event:', errorMessage);    
      console.error('Error registering for event:', error.response.data);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar isHomePage={false} />
      <div className="registerEventsPage text-center pt-20 h-screen mobile-padding">
        <h2 className="beyonderFont text-3xl mb-8">Register</h2>

        {event ? (
          <div className="text-left max-w-lg mx-auto event-register-form">
            <p className="mb-4">
              <span className="font-bold">Event Name:</span><br /> {event.name}
            </p>
            <p className="mb-4">
              <span className="font-bold">Event Description:</span> <br />{event.description}
            </p>

            {event.is_team_event && (
              <div>
                <h5 className="text-m mb-4 text-red-500">This is a team event you need to create a team or join one.</h5>
                <h3 className="text-2xl mb-4">Create Team</h3>
                <label htmlFor="teamName" className="block mb-2">
                  Team Name:
                </label>
                <input
                  type="text"
                  id="teamName"
                  className="w-full px-4 py-2 border rounded mb-4 bg-transparent focus:border-blue-500 focus:outline-none"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <h2 className="text-xl mb-4 text-center">OR</h2>
                <h3 className="text-2xl mb-4">Join Team</h3>
                <label htmlFor="teamId" className="block mb-2">
                  Team ID (Optional):
                </label>
                <input
                  type="text"
                  id="teamId"
                  className="w-full px-4 py-2 border rounded mb-4 bg-transparent focus:border-blue-500 focus:outline-none"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                />
              </div>
            )}
            <button
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
              
        {/* {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="p-8 rounded shadow-md z-10 failed-registration-modal">
              <p className=" text-xl">Error in Registration:</p>
              <p className="text-red-500">{errorMessage}</p>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        )} */}

{showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="bg-gray-800 bg-opacity-90 absolute top-0 left-0 w-full h-full"></div>
    <div className={`registration-modal p-8 rounded shadow-lg z-10 relative fade-in ${isErrorModal ? 'error-modal' : 'success-modal'}`}>
      {isErrorModal && 
      (
        <p className='text-red-600 text-xl'>Error in Registration: </p>
      )}
      <p className={isErrorModal ? 'text-red-600' : 'text-green-600'}>{errorMessage}</p>
      <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
)}              
          </div>
        ) : (
          <p>Loading event data...</p>
        )}
      </div>
    </div>
  );
};

export default EventRegisterPage;
