import React from 'react'

interface CardProps {
  title:string;
  content: string;
  onClick:()=>{};
  src: string
}

const Card = ({ title, content, onClick ,src}: CardProps) => {
  return (
      <div className="supportcard p-2 m-auto bg-gray-600 rounded-lg shadow-lg" onClick={onClick}>
        <img src={src} alt="supporter" className="card-img rounded m-auto h-2/3 w-5/6"/> 
        <h3 className="text-center text-white text-lg font-semibold truncate">{title}</h3>
        <p className="text-center text-white text-m overflow-ellipsis overflow-hidden">{content}</p>
      </div>
  )
}

export default Card
