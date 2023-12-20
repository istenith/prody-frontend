import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Card } from '@/src/app/components/exports';

type ModalProps = {
    handleClose: any;
    card?: Card;
};

const Modal = ({ handleClose, card }: ModalProps) => {

    console.log("card recieved in modal window", card)

    return (
        <>
            <div
                className="custom-modal-rules"
                onClick={handleClose}
            >
                <div>
                    {/* Design here the modal and add animation on open close */}
                    {card?.description}
                    {card?.discountPercentage}
                    {card?.id}
                    <img src={card?.thumbnail} alt="" />
                </div>
            </div>
        </>
    )
}

export default Modal
