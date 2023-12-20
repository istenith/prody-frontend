import React, { useState } from "react"
import { Card } from "../exports";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";

type ButtonProps = {
    title: string;
    card: Card;
    handleOpenClose: any;
};

export const GradientButton = ({ title }: ButtonProps) => {
    return (
        <button className="button-bg py-3">{title}</button>
    )
}

export const ExploreButton = ({ title, card, handleOpenClose }: ButtonProps) => {

    return (
        <>
            <button className="button-explore py-3 flex" style={{ fontSize: '30px' }} onClick={() => { handleOpenClose(card) }}>
                {title}
                <span className="button-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#fff" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                </span>
            </button>
        </>
    )
}
