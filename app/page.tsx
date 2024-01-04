import ImageList from '@/components/imagelist';
import ParallaxCarousel from '@/components/parallaxcarousel';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

export default function Home() {
    const images =[
        "/image/1.jpeg",
        "/image/2.png",
        "/image/3.jpg",
        "/image/4.jpg",
        "/image/5.jpg",
        "/image/6.jpg",
        "/image/7.jpeg",
    ]

    return (
        <main>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange
            >
                <div className='flex justify-end p-4'>
                    <ThemeToggleButton />
                </div>
                <ParallaxCarousel>
                  <ImageList images={images} />
                </ParallaxCarousel>
            </ThemeProvider>
        </main>
    )}