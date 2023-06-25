"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/about/content.css'
function Content() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 50, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-out-back', // Easing function for animations
      once: false // Whether to only animate elements once
    });
  });

  return (
    <div className='content'>
      <h2 className='content-heading'>How we evolved over the years</h2>
      <div class="image-container" data-aos="fade-in">
        <Image
          src="/images/Growth.webp"
          alt=""
          layout="responsive"
          width={3840}
          height={1080}
        />
      </div>

      <div style={{ paddingBottom: '120px' }}></div>
    </div>
  );
}

export default Content;
