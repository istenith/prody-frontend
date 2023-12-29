import React from 'react'
import ImageComponent from '../../events/components/imageComponent'
import OpenDialogButton from '../../events/components/OpenDialogButton'

interface CardProps{
  card : {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    images: Array<string>;
  }
}



const Card = ({card}: CardProps) => {
  return (
    <div key={card.id} className="card w-72 max-h-96 md:w-80 lg:w-80 shadow-xl card-custom-background">
    <figure className="relative h-60">
      <ImageComponent card={card} />
    </figure>
    <div className="card-body items-center">
      <h2 className="card-title">{card.title}</h2>
      <p>{card.description}</p>
      <p>{card.price}</p>
      <OpenDialogButton card={card} setModalOpenToTrue={openModal}/>
    </div>
  </div> 
  )
}

export default Card
