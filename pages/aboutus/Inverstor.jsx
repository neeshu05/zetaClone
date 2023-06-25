"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import '../../styles/about/investor.css';
import AOS from 'aos';

function Inverstor() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the screen to trigger animations
      easing: 'ease-in-cubic', // Easing function for animations
      once: false // Whether to only animate elements once
    });
  });

  const data = [
    {
      name: 'Kunal Shah',
      image:
        '/images/Inv1.webp',
      title: 'Founder, CRED'
    },
    {
      name: 'Gaurav Munjal',
      image:
        '/images/Inv2.webp',
      title: 'Founder, UNACADEMY'
    },
    {
      name: 'Aakrit Vaish',
      image:
        '/images/Inv3.webp',
      title: 'Co-Founder, HAPTIK'
    },
    {
      name: 'Harshil Mathur',
      image:
        '/images/Inv4.webp',
      title: 'Founder, RAZORPAY'
    },
    {
      name: 'Vidit Aatrey',
      image:
        '/images/Inv5.webp',
    title: 'Founder & CEO, MEESHO'
    
    },

    {
      name: 'Amrish Rau',
      image:
        '/images/Inv6.webp',
        title: 'CEO, PINELABS'
    },
    {
      name: 'Lalit Keshre',
      image:
        '/images/Inv7.webp',
        title:'CEO, GROWW'
    },
    {
      name: 'Gokul Rajaram',
      image:'/images/Inv8.webp',
      title: 'Product, DOORDASH'
    }
  ];

  return (
    <div className='investor' data-aos='fade-left'>
      <div className='project_title'>
        <h2>Meet the Investors</h2>
      </div>
      <div className='investor_layout'>
        {data.map(e => (
          <div className='investor_layout_element' data-aos='fade-left' key={e.name}>
            <Image
              src={e.image}
              alt={e.name}
              layout='responsive'
              width={828}
              height={466}
            />
            <h2>{e.name}</h2>
            <h2>{e.title}</h2>
          </div>
        ))}
      </div>
      <div style={{ paddingBottom: '120px' }}></div>
    </div>
  );
}

export default Inverstor;
