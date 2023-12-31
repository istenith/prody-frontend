import React, { FormEvent, useState, ChangeEvent } from 'react'
import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation';

interface Props {
  isRegistered: Boolean;
}

const FormComponent = ({isRegistered}: Props) => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)

    const apiUrl = isRegistered ? "https://api-dev.prody.istenith.com/api/auth/login/" : "https://api-dev.prody.istenith.com/api/auth/register/"

      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(isRegistered ? {username, password} : {username, email, password})
      }).then(response => {
        try {
          if (response.status == 200) {
            return response.json()
          }
        } catch (error) {
          console.log(error)
        }

      }).then(data => {
        const apiResponse = data
        console.log(apiResponse)
        isRegistered ? localStorage.setItem("userData", apiResponse.user_data) : localStorage
        .setItem("loginToken", apiResponse.jwt)
        
      })

    setIsLoading(false)
    router.refresh()
    router.push("/me")
  } 
  
  return (
    <div>
      <form onSubmit={submitForm} method='POST'>
        <label className="label">
          <span className="label-text">Enter username - no spaces!</span>
        </label>
        <input 
          type="text" 
          placeholder="Username"
          name="username" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setUsername(e.currentTarget.value)
          }} 
          className="input bg-transparent input-bordered w-full max-w-xs" 
        />

        <label className="label">
          <span className="label-text">Enter email</span>
        </label>
        <input 
          type="email" 
          placeholder="Your email here" 
          name="password" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setEmail(e.currentTarget.value)
          }} 
          className="input bg-transparent input-bordered w-full max-w-xs" 
        />

        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input 
          type="password" 
          placeholder="Top-Secret password" 
          name="password" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setPassword(e.currentTarget.value)
          }} 
          className="input bg-transparent input-bordered w-full max-w-xs" 
        />

        <button className="btn btn-info m-5" type='submit' disabled={isLoading}>
          {isLoading ? <span>Taking you in...</span> : (isRegistered ? <span>Login &#8594;</span> : <span>Register</span>)}
        </button>
      </form>
    </div>
  )
}

export default FormComponent