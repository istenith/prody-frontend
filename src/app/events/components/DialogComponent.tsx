import React, { FunctionComponent } from 'react'
import ImageComponent from './imageComponent';

interface ModalProps {
  card: {
      id: number;
      title: string;
      decription: string;
      price: number;
      discountPercentage: number;
      thumbnail: string;
      images: Array<string>;
  }
}

const DialogComponent: FunctionComponent<ModalProps> = ({card}) => {
  return (
    <dialog id="my_modal_5" className="m-auto modal modal-bottom sm:modal-middle w-full">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{card.title}</h3>
        <ImageComponent card={card}/>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex veniam quidem sunt nostrum rem eum beatae animi aliquid quam ab! Vero inventore repellat labore nulla aliquam ut maiores eligendi expedita animi consequuntur! Aperiam quibusdam illum harum fuga libero ad dicta voluptas minus officia fugiat asperiores, eveniet natus magni sint provident eligendi voluptatum! Quia debitis dolor unde quaerat voluptas repellat minima?
        </p>
        <div className="modal-action">
          <button className='btn btn-success'>Register</button>
          <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost fixed right-2 top-2">✕</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DialogComponent
