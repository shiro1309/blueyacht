
import useEmblaCarousel from 'embla-carousel-react';

import ImageList from '@/components/imagelist';
import ParallaxCarousel from '@/components/parallaxcarousel';

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
                    
                    <EmblaCarousel images={images}/>
                </div>
            
        </main>
    )}