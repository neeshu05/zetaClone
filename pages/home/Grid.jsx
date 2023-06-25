"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/Grid.css';
import Image from 'next/image';

function Grid() {
useEffect(() => {
AOS.init({
duration: 1200, // Animation duration in milliseconds
offset: 50, // Offset (in pixels) from the top of the screen to trigger animations
easing: 'ease-in', // Easing function for animations
once: false // Whether to only animate elements once
});
}, []);

return (
<div className='grid'>
<div className='grid_container'>
<div className='grid_title'>
<p className='heading'>Products on ZET</p>
<p className='non_heading'>We are trusted by the best brands in the country</p>
</div>
<div className='card'>
      <div className='grid_card' data-aos='fade-right'>
        <div className='card_content' style={{ backgroundColor: '#edffec' }}>
          <div className='image_content'>
            <Image
              src='/images/CC.webp'
              alt='Credit Card'
              width={200}
              height={200}
            />
          </div>
          <div className='text_content'>
            <p className='text_heading' style={{ fontSize: '24px', fontWeight: 'bolder', lineHeight: '60px' }}>
              CREDIT CARDS
            </p>
            <p className='text_description' style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
              100% Contactless Application Process with Instant Approval From Top Banks.
            </p>
          </div>
        </div>
      </div>
      <div className='grid_card' data-aos='fade-left'>
        <div className='card_content' style={{ backgroundColor: '#fff1ca' }}>
          <div className='image_content'>
            <Image
              src='/images/Loan.webp'
              alt='Loans'
              width={200}
              height={200}
            />
          </div>
          <div className='text_content'>
            <p className='text_heading' style={{ fontSize: '24px', fontWeight: 'bolder', lineHeight: '60px' }}>
              LOANS
            </p>
            <p className='text_description' style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
              100% Contactless Application Process with Instant Approval From Top Banks.
            </p>
          </div>
        </div>
      </div>
      <div className='grid_card' data-aos='fade-right'>
        <div className='card_content' style={{ backgroundColor: '#ffeee7' }}>
          <div className='image_content'>
            <Image
              src='/images/BNPL.webp'
              alt='Buy Now Pay Later'
              width={200}
              height={200}
            />
          </div>
          <div className='text_content'>
            <p className='text_heading' style={{ fontSize: '24px', fontWeight: 'bolder', lineHeight: '60px' }}>
              BUY NOW PAY LATER
            </p>
            <p className='text_description' style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
              100% Contactless Application Process with Instant Approval From Top Banks.
            </p>
          </div>
        </div>
      </div>
      <div className='grid_card' data-aos='fade-left'>
        <div className='card_content'>
          <div className='image_content'>
            <Image
              src='/images/AccountSave.webp'
              alt='Saving Account'
              width={200}
              height={200}
            />
          </div>
          <div className='text_content'>
            <p className='text_heading'>SAVING ACCOUNT</p>
            <p className='text_description' style={{ fontSize: '16px', fontWeight: '500', lineHeight: '25px' }}>
              100% Contactless Application Process with Instant Approval From Top Banks.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Grid;