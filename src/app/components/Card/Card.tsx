import React, { useState } from 'react';
import ImageComponent from '../../events/components/imageComponent';
import OpenDialogButton from '../../events/components/OpenDialogButton';

interface CardProps {
  card: {
    id: number;
    date_time: string;
    date: string;
    name : string;
    description : string;
    poster: string;
    thumbnail: string;
    is_live : boolean;
    is_team_event : boolean;
  };
}

interface Card {
  id: number;
  date_time: string;
  date: string;
  name : string;
  description : string;
  poster: string;
  thumbnail: string;
  is_live : boolean;
  is_team_event : boolean;
}

const Card = ({ card }: CardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const openModal = (card: Card) => {
    console.log("open modal clicked");
    console.log(`Card received: ${card}`);
    console.log(card);
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div key={card.id} className="card w-72 max-h-96 md:w-80 lg:w-80 shadow-xl card-custom-background">
      <figure className="relative h-60">
        <ImageComponent card={card} />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{card.name}</h2>
        <p>{card.description}</p>
        <p>{card.date_time}</p>
        <OpenDialogButton card={card} setModalOpenToTrue={openModal} />
      </div>
    </div>
  );
};

export default Card;
