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
  let apiResponse = {}
  
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    const dataToApi = {
      username,
      email,
      password,
    }

    const apiUrl = isRegistered ? "https://api-dev.prody.istenith.com/api/login" : "https://api-dev.prody.istenith.com/api/register"

    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToApi)
    }).then(response => {
      try {
        if (response.status == 200) {
          return response.json()
        }
      } catch (error) {
        console.log(error)
      }

    }).then(data => {
      apiResponse = data
      console.log(apiResponse)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/me")
  }
  
  return (
    <div>
      <form >
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

        <button className="btn btn-info m-5" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? <span>Taking you in...</span> : (isRegistered ? <span>Login &#8594;</span> : <span>Register</span>)}
        </button>
      </form>
    </div>
  )
}

export default FormComponent