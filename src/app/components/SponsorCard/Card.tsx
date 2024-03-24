import React, { useEffect } from 'react'

interface CardProps {
     title: string;
     content: string;
     onClick: () => {};
     src: string;
     category: string;

}

const Card = ({ title, content, onClick, src ,category}: CardProps) => {
     useEffect(() => {

          return () => {

          }
     }, [])

     return (
          <>
               <div className='jutify-center align-center'>
               <h1 className="beyonderFont text-center  font-bold   pt-2">{category}</h1>
                    <img src={src} alt="supporter" className="jutify-center rounded m-auto w-2/3" />
                    <h3 className="text-center text-white mt-2 text-2xl font-semibold roboto truncate">{title}</h3>
                   

               </div>
          </>
     )
}

export default Card
