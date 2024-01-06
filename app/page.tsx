import React from 'react';

import ImageSlide from '@/components/ImageSlide';

const images: string[] = [
    "/image/furina/1.png", 
    "/image/furina/2.png", 
    "/image/furina/3.png",
    "/image/furina/4.png",
    "/image/furina/5.png",
    "/image/furina/6.png",
]

import EmblaCarousel from '@/components/EmblaCarousel'

export default function Home() {
    

    return (
        <main className='pt-20'>
            
                <div className='flex justify-row  p-4 h-dvh'>
                    
                <EmblaCarousel>
                  {images.map((image: string, index: number) => (
                    <ImageSlide image={image} index={index} key={index} />
                  ))}
                </EmblaCarousel>
                </div>
            
        </main>
    )}