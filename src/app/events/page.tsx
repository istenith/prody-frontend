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
      <div className="">
        {cardData.map(card => {
          return(
            <div key={card.id} className="bg-transparent duration-500 hover:rotate-180 rounded-2xl cursor-pointer w-[300px] h-[420px]">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full">
                  <figure>
                    <ImageComponent card={card}/>
                  </figure>
                </div>

                <div className="absolute w-full h-full">
                  {/* <div className="card m-4">
                    <div className="card-body">
                      <h2 className={"card-title " + styles.cardHeading}>{card.title}</h2>
                      <p>{card.decription}</p>
                      <div className="card-actions justify-end">
                        <OpenDialogButton />
                      </div>
                    </div>
                    <DialogComponent card={card}/>
                  </div> */}
                bdlkD
                </div>
              </div>
            </div>
            
          )
        })}
      </div>
    </div>
  )
}

export default page
