import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <Link href='/'>
          <Image
            src='/images/zet_new_logo.7adcc993 (1).svg'
            alt='Logo'
            width={90}
            height={40}
            style={{
              backgroundColor: 'white',
              marginTop: '20px'
            }}
          />
        
      </Link>
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'white'
        }}
      ></div>
      <div className='footer-body'>
        <div className='footer-content'>
          <p className='footer-title'>COMPANY</p>
          <Link href='/about'> About Us
          </Link>
          <Link href='/partner-with-us'>Partner with us
          </Link>
          <Link href='/blog'>Blog
          </Link>
        </div>
        <div className='footer-content'>
          <p className='footer-title'>LEGAL</p>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/terms-of-use'>Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
