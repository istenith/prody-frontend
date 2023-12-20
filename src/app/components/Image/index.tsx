"use client"
import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ImageProps{
  card: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    images: Array<string>;
  };
}

const ImageComponent: FunctionComponent<ImageProps> = ({card}) => {
  return (
    <Image loader={()=>card.thumbnail} layout='fill' objectFit='contain' className='rounded-md mx-auto my-4' unoptimized={true} src={card.thumbnail} alt="thumbnail"/>
  )
}

export default ImageComponent
