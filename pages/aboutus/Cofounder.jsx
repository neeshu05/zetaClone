import React from 'react';
import '../../styles/about/cofounder.css';
import Image from 'next/image';

function Cofounder() {
  return (
    <div className="cofounder_container">
      <div className="cofounder_title_container">
        <p className="cofounder_title">Meet our Founders</p>
        <p className="cofounder_subtitle">Few words from the founders &apos; desk</p>
      </div>
      
      <div className='cofounder-content'>
      <div className="cofounder_card">
        <div className="cofounder_info">
        <Image
      className="cofounder_image"
      src="/images/Manish.webp"
      alt="Manish Shara"
      width={120}
      height={120}
    />
          <div className="cofounder_details">
            <h4 className="cofounder_name">Manish Shara</h4>
            <h4 className="cofounder_role">Co-Founder and CEO</h4>
          </div>
        </div>
      </div>

      <div className="cofounder_card">
        <div className="cofounder_info">
          <Image
      className="cofounder_image"
      // src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FManish.519c8845.png&w=640&q=75"
      src="/images/Yash.webp"
           
      alt="Manish Shara"
      width={120}
      height={120}
    />
          <div className="cofounder_details">
            <h4 className="cofounder_name">Yash Desai</h4>
            <h4 className="cofounder_role">Co-Founder and CEO</h4>
          </div>
        </div>
      </div>

      <div className="cofounder_card">
        <div className="cofounder_info">
            <Image
      className="cofounder_image"
      src="/images/Lokesh.webp"
           
      alt="Manish Shara"
      width={120}
      height={120}
    />
          <div className="cofounder_details">
            <h4 className="cofounder_name">Lokesh Agarwal</h4>
            <h4 className="cofounder_role">CTO</h4>
          </div>
        </div>
      </div>

      </div>

     
    </div>
  );
}

export default Cofounder;
