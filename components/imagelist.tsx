import React from 'react';
import Image from 'next/image';

interface ImageListProps {
  images: string[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`image item ${index}`} width={300} height={300} />
        </div>
      ))}
    </div>
  );
};

export default ImageList;