"use client"
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import '../../styles/Slider.css';

function Slider() {
  const images = [
    '/images/Aufin.webp',
    '/images/Axis.webp',
    '/images/Idfc.webp',
    '/images/Bajaj.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 50, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'linear', // Easing function for animations
      once: false // Whether to only animate elements once
    });
  }, []);

  return (
    <div className='slide'>
      <div className='slider_content'>
        <p className='slider_heading'>Top Brands on ZET</p>
        <p className='slider_description'>We are trusted by the best brands in the country</p>
      </div>

      <div className="image_container" style={{ transition: 'opacity ease-in' }}>
        <Image
          data-aos="fade-in"
          src={images[currentIndex % images.length]}
          alt="Slider Image 1"
          width={200}
          height={70}
        />
        <Image
          data-aos="fade-in"
          src={images[(currentIndex + 1) % images.length]}
          alt="Slider Image 2"
          width={200}
          height={70}
        />
        <Image
          data-aos="fade-in"
          src={images[(currentIndex + 2) % images.length]}
          alt="Slider Image 3"
          width={200}
          height={70}
        />
        <Image
          data-aos="fade-in"
          src={images[(currentIndex + 3) % images.length]}
          alt="Slider Image 4"
          width={200}
          height={70}
        />
      </div>
    </div>
  );
}

export default Slider;
