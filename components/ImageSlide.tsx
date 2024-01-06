import Image from 'next/image';

export default function ImageSlide({ image, index }: { image: string, index: number }) {
  return (
    <div className="embla__slide relative">
      <div className='absolute right-1 top-1 '>
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
  );
}