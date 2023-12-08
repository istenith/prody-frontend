"use client"
import React from 'react'
import ImageComponent from './components/imageComponent';
import OpenDialogButton from './components/OpenDialogButton';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../components/Navbar/Navbar';

interface Card{
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  images: Array<string>;
}


const page = async () => {
  const res = await fetch('https://dummyjson.com/products')
  const resJson = await res.json()
  const cardData: Card[] = resJson.products
  cardData.length = 12

  return (
    <>
        <Navbar />    
        <div className='mainEventsPage text-center pt-20'>
          <h1 className='beyonderFont text-5xl'>
            Events
          </h1>
          <h2 className='spaceFont text-3xl m-4'>
            &nbsp;
            <TypeAnimation
              sequence={['PRODYOGIKI', 500, 'by iste', 500]}
              repeat={Infinity}
              cursor={false}
              speed={{type: 'keyStrokeDelayInMs', value: 125}}
            />
            &nbsp;
          </h2>
          <div className="flex flex-row w-full flex-wrap p-10 gap-5 content-around h-full justify-around">
              {cardData.map(card => {   
                return(
                    <div key={card.id} className="card w-72 max-h-96 md:w-80 lg:w-80 shadow-xl card-custom">
                      <figure className="relative h-60">
                        <ImageComponent card={card} />
                      </figure>
                      <div className="card-body items-center">
                        <h2 className="card-title">{card.title}</h2>
                        <p>{card.description}</p>
                        <p>{card.price}</p>
                        <OpenDialogButton card={card}/>
                      </div>
                    </div>   
                )
              })}

          </div>
        </div>
    </>
  )
}

export default page
