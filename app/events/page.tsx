'use server'
import React from 'react'
import styles from './page.module.css'
import ImageComponent from './components/imageComponent';
import DialogComponent from './components/DialogComponent';
import OpenDialogButton from './components/OpenDialogButton';

interface Card{
  id: number;
  title: string;
  decription: string;
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
    <div className={styles.bg}>
      <div className="flex flex-row flex-wrap m-auto justify-evenly justify-items-center items-center">
        {cardData.map(card => {
          return(
            <div className="card w-70 glass m-4" key={card.id}>
              <figure>
                <ImageComponent card={card}/>
              </figure>
              <div className="card-body">
                <h2 className={"card-title " + styles.cardHeading}>{card.title}</h2>
                <p>{card.decription}</p>
                <div className="card-actions justify-end">
                  <OpenDialogButton />
                </div>
              </div>
              <DialogComponent card={card}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
