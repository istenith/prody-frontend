import React from 'react'

interface CardProps{
  contact: {
    id: number;
    image: string;
    name: string;
    position: string;
    email: string;
    phone: string;

  }
}

const Card = ({contact}: CardProps) => {
  return (
    <div key={contact.id} className="contact-card">
      <div className="contact-image">
        <img src={contact.image} alt={contact.name} />
      </div>
      <div className="contact-details">
        <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.position}</p>
        <p>{contact.phone}</p>
      </div>
    </div>
  )
}

export default Card
