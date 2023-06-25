"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../styles/Testimonial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  const messages = [
    'More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans',
    '14 Lakh+ Financial Advisors across India are using ZET to increase their income.',
    'More than ₹20 Cr earned by our Agents by selling Credit Cards and Loans',
    '14 Lakh+ Financial Advisors across India are using ZET to increase their income.'
  ];

  const [data, setData] = useState(0);
  const [slide, setSlide] = useState(20);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in',
      once: false
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData((prevData) => (prevData + 1) % messages.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [data, messages.length]);

  return (
    <div className="testimonial_container">
      <div className="testimonial_content">
        <Image
          data-aos="fade-up"
          className="testimonial_image"
          src="/images/peeps1.webp"
          alt="Testimonial"
          width={1920}
          height={680}
        />
        <div className="testimonial_text">
          <h2
            style={{
              textTransform: 'uppercase',
              color: '#ffffff',
              padding: '20px',
              paddingTop: '40px',
              fontSize: '40px'
            }}
            data-aos="fade-left"
          >
            the zet effect
          </h2>
          <p
            className="description"
            data-aos="fade-left"
            data-aos-delay="200"
            style={{
              color: '#ffffff',
              fontSize: '20px'
            }}
          >
            {messages[data]}
          </p>
          <div
            className="progress_bar"
            style={{
              backgroundColor: 'black',
              width: '240px',
              height: '6px',
              borderRadius: '5px'
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                width: `${slide}%`,
                height: '6px',
                transition: 'width 0.5s'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
