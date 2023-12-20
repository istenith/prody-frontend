'use client'
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { GlassCard } from '../components/Cards';
import { Card } from '../components/exports';
import Modal from '../components/Modal';

const Page = () => {
  const [cardData, setCardData] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const resJson = await res.json();
        const data = resJson.products.slice(0, 12); // Limiting data to 12 items
        setCardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCardData();
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<Card>();
  return (
    <Layout>
      <div className='text-center pt-20'>
        <Header title='Events' />
        <h2 className='spaceFont text-3xl m-4'>
          &nbsp;
          <TypeAnimation
            sequence={['PRODYOGIKI', 500, 'BY ISTE', 500]}
            repeat={Infinity}
            cursor={false}
            speed={{ type: 'keyStrokeDelayInMs', value: 125 }}
          />
          &nbsp;
        </h2>
        <div className="flex flex-row w-full flex-wrap p-10 h-full">
          {cardData && cardData.map(card => {
            return (
              <GlassCard card={card} key={card.id} handleOpenClose={() => { setModalOpen(!modalOpen); setActiveCard(card) }} />
            )
          })}
          {modalOpen && <Modal card={activeCard} handleClose={() => { setModalOpen(!modalOpen) }} />}
        </div>
      </div>
    </Layout>
  )
};

export default Page;
