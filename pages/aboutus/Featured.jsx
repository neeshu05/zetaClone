"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/about/Featured.css'
const Featured = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 50, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-cubic', // Easing function for animations
      once: false // Whether to only animate elements once
    });
  }, []);

  return (
    <div className="featured">
      <div className='ProjectTitle' data-aos="fade-left">
        Got Featured
      </div>
      <div className='grid_layout'>
        <div style={{ padding: '20px' }} data-aos="fade-left">
          <Image
            src='/images/EconomicTimes.webp'
            alt="Image1"
            layout="responsive"
            width={100}
            height={70}
          />
        </div>
        <div style={{ padding: '20px' }} data-aos="fade-left">
          <Image
            src = '/images/YourStory.webp'
            alt="Image2"
            layout="responsive"
            width={100}
            height={70}
          />
        </div>
        <div style={{ padding: '20px' }} data-aos="fade-left">
          <Image
            src='/images/mint.webp'
            alt="Image3"
            layout="responsive"
            width={100}
            height={70}
          />
        </div>
        <div style={{ padding: '20px' }} data-aos="fade-left">
          <Image
            src='/images/Inc42.webp'
            alt="Image4"
            layout="responsive"
            width={100}
            height={70}
          />
        </div>
        <div style={{ padding: '20px' }} data-aos="fade-left">
          <Image
            src='/images/BusinessStandard.webp'
            alt="Image5"
            layout="responsive"
            width={100}
            height={70}
          />
        </div>
      </div>
      <div style={{ paddingBottom: '120px' }}></div>
    </div>
  );
};

export default Featured;
