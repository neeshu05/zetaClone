import React from 'react'
import '../../styles/Banner.css'
import Image from 'next/image';
function Banner() {
  return (
    <div className="banner">
      <div className='Banner_container'>
        <div className='Banner_left'>
            <div className='content'>
                <h1 className='head'>
                Become a Financial Advisor and <br></br><span>Earn Rs.1 Lakh/Month</span>
                </h1>
                <p style={{
                  color:'black'
                }}>
                No investment required
                </p>
            </div>
        </div>
        <div className='Banner_right'> 
            {/* <img className = 'imgBanner' src='https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=1920&q=75'></img> */}
            <Image
            // public\images\Aufin.webp
            src="/images/HeroImgNew.webp"
            alt="Banner Image"
            className="imgBanner"
            width={1920}
              height={1080}
            />
        </div>
    </div>
    </div>
    
  )
}

export default Banner