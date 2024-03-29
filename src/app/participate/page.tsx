'use client'
import React, { useState, useEffect } from 'react';
import FormComponent from '../components/Form/FormComponent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './participatePage.css';
import Loader from '../LoaderEvent';

const Participate = () => {
  const [wantsLogin, setwantsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navbar isHomePage={false} />
      <div className="min-h-screen pt-24 spaceThemeBackground participateContainer">
        <div className="formCard card-custom-background w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl m-auto align-middle">
          <div className="card-body">
            <h2 className="card-title">{wantsLogin ? <span>Login</span> : <span>Register</span>} to continue</h2>
            <div className="form-control w-full max-w-xs">
              <div className="link-container">
                {!wantsLogin ? (
                  <p>
                    Already registered?
                    <span
                      className="cursor-pointer hover:underline-1 link-primary link"
                      onClick={() => {
                        setwantsLogin(true);
                      }}
                    >
                      &nbsp;Login &#129042;
                    </span>
                  </p>
                ) : (
                  <p>
                    New registration?
                    <span
                      className="cursor-pointer hover:underline-1 link-primary link"
                      onClick={() => {
                        setwantsLogin(false);
                      }}
                    >
                      &nbsp;Here &#129042;
                    </span>
                  </p>
                )}
              </div>

              {wantsLogin ? (
                <FormComponent isRegistered={true} />
              ) : (
                <FormComponent isRegistered={false} />
              )}
              <h2>The server is under maintainance , due to which registerations have been stopped .<br/> Registrations will <u>restart from <b>8PM, 29th March</b></u>KO. Please check back to book your place in the event!</h2> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Participate;
