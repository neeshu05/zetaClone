import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/Nav.css';

function Nav() {
  return (
    <div>
      <ul className='Nav_container'>
        <li>
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
        </li>
        <div className='Nav_right'>
          <li>
            <Link href='/'>Home
            </Link>
          </li>
          <li>
            <Link href='/aboutus/About'>About
            </Link>
          </li>
          <li>
            <Link href='/partner'>
            Partner with us
            </Link>
          </li>
          <li>
            <Link href='/blog'>Blog
            </Link>
          </li>
          <li>
            <Link href='/download'>Download Now
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
