"use client"

import React, { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel({ children }: { children: React.ReactNode }) {

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
                    {children}
                </div>
            </div>
        </div>
    );
}