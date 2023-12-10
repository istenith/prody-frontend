"use client"
import React, { useState } from 'react'
import FormComponent from './components/FormComponent'
import Navbar from '../components/Navbar/Navbar'

const Participate = () => {
  
  const [wantsLogin, setwantsLogin] = useState(false)
  
  return (
    <>    
      <Navbar isHomePage={false} />
      <div className='min-h-screen py-24 spaceThemeBackground'>
        <div className="card card-custom-background w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl m-auto align-middle">
          <div className="card-body">
            <h2 className="card-title">{wantsLogin ? <span>Login</span> : <span>Register</span>} to continue</h2>
            <div className="form-control w-full max-w-xs">
              {/* Input form */}
              {!wantsLogin ? 
                <p>
                  Already registered? 
                  <span className='cursor-pointer hover:underline-1 link-primary' onClick={()=>setwantsLogin(true)}>
                    &nbsp;Login &#129042;
                  </span>
                </p>
                : 
                <p>
                  New registration ? 
                  <span className='cursor-pointer hover:underline-1 link-primary' onClick={()=>setwantsLogin(false)}>
                    &nbsp;Here &#129042;
                  </span>
                </p>
                }

              {wantsLogin ? 
                <FormComponent isRegistered = {true}/>
                : 
                <FormComponent isRegistered={false} />
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Participate