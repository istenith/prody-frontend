'use client'

import React, { useState, useEffect } from 'react';
import "./supporter.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from '../components/SponsorCard/Card.tsx';
import Loader from '../LoaderEvent';
import next from 'next';


const Modal = ({ show, onClose, title, content, src }) => {



     if (!show) return null;

     return (
          <div className="modal-backdrop">
               <div className="modal-content">
                    <br />
                    <br />
                    <button className="close-modal" onClick={onClose}>&times;</button>
                    <img src={src} alt="supporter" className="modal-img" />
                    <br />
                    <h3 className="text-center p-2 text-white text-4xl font-semibold " style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>{title}</h3>
                    <p className="text-center text-white text-xl overflow-ellipsis" style={{ whiteSpace: 'pre-line', overflowWrap: 'break-word' }}>
                         {content}
                    </p>
               </div>

          </div>
     );
};

const SupportersComponent = () => {

     const [sponsors, setSponsors] = useState([])
     const [loading, setLoading] = useState(true);

     useEffect(() => {
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
                       // Sort the data by title in alphabetical order
                       const sortedSponsors = resJson.sort((a, b) => b.id - a.id);

           
       
                   console.log(sortedSponsors);
       
           
                       setSponsors(sortedSponsors);
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

     // useEffect(() => {
     //      const handleEscKeyPress = (event) => {
     //           if (event.keyCode === 27) {
     //                toggleModal(null);
     //           }
     //      };
     //      if (selectedSupporter) {
     //           window.addEventListener('keydown', handleEscKeyPress);
     //      }
     //      return () => {
     //           window.removeEventListener('keydown', handleEscKeyPress);
     //      };
     // }, [selectedSupporter]);


     const srcAndromeda = "./images/andromeda.png";

     return (
          <>
               {loading && (
                    <Loader />
               )}
               <Navbar isHomePage={false} />
               
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
                              
                              <div className='h-min'>
                                   <div className={selectedSupporter ? " blurred items-center text-white" : " items-center text-white sponserPage bg"}>
                                        <h2 className="beyonderFont  text-center text-3xl font-bold leading-loose mb-9 mt-11 pt-12">OUR SUPPORTERS</h2>
                                        <h1 className="beyonderFont text-center mb-10 pt-10">Title Sponser <br/>[Stellarscape hackathon]</h1>
                                        <div className="flex justify-center mb-20">
                                             <div className='w-1/3 andro'>
                                                  <img src={srcAndromeda} alt='eyewear' className='' />
                                             </div>
                                             
                                        </div>

                                        {/* educational */}
                                        <h1 className="beyonderFont text-center mb-10 pt-10">Educational Partners</h1>
                                        <div className="flex justify-center mb-20">
                                             <div className="w-full md:w-64"></div> {/* Empty space on the left */}
                                             <div className="flex flex-col md:flex-row gap-10">
                                             <div className="w-full text-center md:w-1/2 flex justify-center items-center">

                                                  <img src='./sponsers/new_Next.png' alt='eyewear' className='w-1/2' />

                                             </div>
                                             <div className="w-full text-center md:w-1/2 flex justify-center items-center">
                                                  <img src='./sponsers/placewit.png' alt='eyewear' className='w-1/2' />
                                             </div>

                                             </div>
                                             <div className="w-full md:w-64"></div> {/* Empty space on the right */}
                                        </div>

                                        <h1 className="beyonderFont text-center mb-10 pt-10">eyewear Partner</h1>
                                        <div className="flex justify-center mb-20">
                                             
                                                  <img src="./sponsers/akash.png" alt='eyewear' className="w-full h-full max-w-none" style={{ maxWidth: '800px' }} />
                                             
                                        </div>

                                        <h1 className="beyonderFont text-center mb-10 pt-10">Media Partner</h1>
                                        <div className="flex justify-center mb-20">
                                             <div className='w-1/3'>
                                                  <img src="https://exchange4media.gumlet.io/news-photo/93208-hindunew.jpg?w=400&dpr=2.6" alt='eyewear' className='' />
                                             </div>
                                             
                                        </div>


                                       

                                   </div>

                              </div>
                 <Footer/>
               
          </>
     );
};

export default SupportersComponent;
