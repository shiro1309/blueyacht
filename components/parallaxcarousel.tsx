"use client"

import React, { useEffect, useRef } from 'react';

interface ParallaxCarouselProps {
  children: React.ReactNode;
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && childRef.current) {
        const { scrollTop } = carouselRef.current;
        const { offsetHeight } = childRef.current;
        if (scrollTop + offsetHeight > 800) {
          carouselRef.current.scrollTop = 0;
        } else {
          carouselRef.current.scrollTop += 1;
        }
      }
    }, 30); // Adjust this value to match the desired scrolling speed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={carouselRef} style={{ overflow: 'hidden', height: '800px' }} className='bg-black'>
      <div ref={childRef} style={{ animation: 'scroll 30s linear infinite' }}>{children}</div>
      <div style={{ animation: 'scroll 30s linear infinite' }}>{children}</div>
    </div>
  );
};

export default ParallaxCarousel;