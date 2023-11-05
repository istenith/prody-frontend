"use client"
import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ImageProps{
  card: {
    id: number;
    title: string;
    decription: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    images: Array<string>;
  };
}

const ImageComponent: FunctionComponent<ImageProps> = ({card}) => {
  return (
    <Image loader={()=>card.thumbnail} unoptimized={true} width={350} height={350} src={card.thumbnail} alt="thumbnail"/>
  )
}

export default ImageComponent
