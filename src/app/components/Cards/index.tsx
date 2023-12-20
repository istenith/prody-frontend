import React, { FC, ReactNode } from "react"
import Navbar from "../Navbar/Navbar";
import { Card } from "../exports";
import { ExploreButton } from "../Button";
import ImageComponent from "../Image";

type CardProps = {
    card: Card;
    handleOpenClose: any;
};

export const GlassCard = ({ card, handleOpenClose }: CardProps) => {
    return (
        <div key={card.id} className="card shadow-xl glass-bg p-4 hover-effect" style={{ width: '28%', height: '600px', margin: '0px auto 2% auto' }}>
            <figure className="relative m-auto my-5">
                <ImageComponent card={card} />
            </figure>
            <div className="text-center">
                <h1 className="font-bold text-lg" style={{ fontSize: '30px' }}>{card.title}</h1>
            </div>
            <br /><br />
            <div className="text-left">
                <h1 className="text-lg" style={{ fontSize: '20px' }}>PRICE POOL: <b> ₹ {card.price} /-</b></h1>
                <ExploreButton title="Explore" card={card} handleOpenClose={handleOpenClose}/>
                <p className="" style={{ fontWeight: 'normal' }}>{card.description}</p>
            </div>
        </div>
    )
}
