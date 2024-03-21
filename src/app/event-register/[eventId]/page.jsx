"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import '../event-register.css'
import Footer from '../../components/Footer/Footer';
import { useRouter } from 'next/navigation';

const EventRegisterPage = () => {
  const [event, setEvent] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamId, setTeamId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentUrl = window.location.href;
    // const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);

    // Extract the last part of the URL
    const urlSegments = currentUrl.split('/');
    const eventId = urlSegments[urlSegments.length - 1];
    console.log('Extracted eventId:', eventId);

    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://api.prody.istenith.com/api/events/${eventId}`);
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
        alert('Please Login/Signup to register!');
        // window.location.href = '/participate';
        router.push('/participate');
        return;
      }

      const response = await axios.post(
        `https://api.prody.istenith.com/api/auth/register-event/${event.id}/`,
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

      setErrorMessage(response.data.message);

      setShowModal(true);
      setIsErrorModal(false);
      if(response.data.message ==="User registered for the event successfully" || response.data.message === "Team created and user added successfully" || response.data.message === "User joined the team successfully")
      {
        // window.alert("Registered successfully!");
        // window.location.href = '/events';
      }

    } catch (error) {

      const errorMessage =
      error.response.data.message || 
      (Array.isArray(error.response.data) ? error.response.data[0] : null) || 
      error.response.data.detail || 
      'An unexpected error occurred';

      setErrorMessage(errorMessage);
      setShowModal(true);
      setIsErrorModal(true); 

      console.error('Error registering for event:', errorMessage);    
      console.error('Error registering for event:', error.response.data);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <div>
      <Navbar isHomePage={false} />
      <div className="registerEventsPage text-center pt-20 pb-10 mobile-padding">
        <h2 className="beyonderFont text-3xl mb-8 m-auto w-auto">Register</h2>

        {event ? (
          <div className="text-left card max-w-lg mx-auto event-register-form">
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
                  Team Name(Become the Leader):
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
                  Team ID (Join your friends):
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
            <div className="flex flex-col md:flex-row gap-2 mx-0 md:mx-auto">
            <button
              onClick={handleRegister}
              className="spaceFont bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              className="spaceFont bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Register
            </button>
            <button className='spaceFont py-2 px-4 border border-green-500 text-green-500 font-bold transition duration-300 hover:bg-green-400 hover:text-white'>
              <a href="https://chat.whatsapp.com/LFksVEgp1r8KDvyBBXxd7u" target='__blank' className='flex items-center justify-center md:justify-start'>
              Join Community<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" className='className="ml-1 md:ml-0"'>
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></a>
            </button>

            </div>
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
  </>
  );
};

export default EventRegisterPage;
