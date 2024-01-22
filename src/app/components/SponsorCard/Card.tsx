import React, { useEffect } from 'react'

interface CardProps {
     title: string;
     content: string;
     onClick: () => {};
     src: string
}

const Card = ({ title, content, onClick, src }: CardProps) => {
     useEffect(() => {

          return () => {

          }
     }, [])

     return (
          <>
               <div>
                    <img src={src} alt="supporter" className=" rounded m-auto w-2/3" />
                    <h3 className="text-center text-white mt-2 text-xl font-semibold roboto truncate">{title}</h3>
               </div>
          </>
     )
}

export default Card
