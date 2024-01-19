"use client"
import React, { FunctionComponent  } from 'react'
import Image from 'next/image'

interface ImageProps{
  poster:string;
}

const ImageComponent: FunctionComponent<ImageProps> = ({poster}) => {

  
  return (
    <div className="custom-card-image-wrapper">

      {poster ? (
        <Image  layout='fill' objectFit='contain' className='rounded-md mx-auto my-4' unoptimized={true} src={poster} alt="thumbnail"/>
        ) : (
          <Image  layout='fill' objectFit='contain' className='rounded-md mx-auto my-4' unoptimized={true} src="" alt="thumbnail"/>
          )}        
    </div>
  )
}

export default ImageComponent
