"use client"

import React, { useState } from 'react';
import FormComponent from '../components/Form/FormComponent';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './participatePage.css'; // Use the correct path to your global CSS file

const Participate = () => {
  const [wantsLogin, setwantsLogin] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('left');

  return (
    <>
      <Navbar isHomePage={false} />
      <div className={`min-h-screen pt-24 spaceThemeBackground participateContainer `}>
        <div className="card card-custom-background w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl m-auto align-middle">
          <div className= {`card-body ${animationDirection === 'left' ? 'slide-in-left' : 'slide-in-right'}`}>
            <h2 className="card-title">{wantsLogin ? <span>Login</span> : <span>Register</span>} to continue</h2>
            <div className="form-control w-full max-w-xs">
              {/* Input form */}
              <div className="link-container">
                {!wantsLogin ? (
                  <p>
                    Already registered?
                    <span
                      className="cursor-pointer hover:underline-1 link-primary link"
                      onClick={() => {
                        setwantsLogin(true);
                        setAnimationDirection('left');
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
                        setAnimationDirection('right');
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
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
}

export default Participate;
