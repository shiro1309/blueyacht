"use client"

import React, { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';





export default function EmblaCarousel({images}: any) {

    const autoplayOptions = {
        delay: 3000,
        stopOnInteraction: false,
        rootNode: (emblaRoot: any) => emblaRoot.parentElement
    }

    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay(autoplayOptions)]);

    return (
        <div className="embla w-96 p-6">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image: string, index: number) => (
                        <div className="embla__slide relative" key={index}>
                            <div className='absolute right-1 top-1 ' key={index}>
                                <div className='size-10 rounded-full dark:bg-black bg-gray-300 dark:bg-opacity-75 bg-opacity-75 flex items-center justify-center'>
                                    <span className='dark:text-sky-600 text-cyan-700'>{index + 1}</span>
                                </div>
                            </div>
                            <Image
                                className='block embla__slide__img rounded-lg'
                                src={image} 
                                alt={`image item ${index}`} 
                                width={400} 
                                height={300} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}