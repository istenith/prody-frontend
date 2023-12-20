"use client"
import React, { useEffect, useState } from 'react'


const UpcomingEvents = () => {
  const [events, setevents] = useState([])


  useEffect(()=>{
    fetch('https://api-dev.prody.istenith.com/api/events/events/', {
      mode: "cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
        'Access-Control-Allow-Credentials': 'true',
      }
    })
      .then(response => response.json)
      .then(data => {
        setevents(data as any)
        console.log(data)
      })
      .catch(error => console.error(error))
  }, [])


  console.log(events)
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
      </div> 
    </div>
  )
}

export default UpcomingEvents
