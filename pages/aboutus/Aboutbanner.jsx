import React from 'react';
import '../../styles/about/aboutbanner.css';

function Aboutbanner() {
  return (
    <div className="about-banner">
      <div className="banner_content">
        <h1 style={{ fontSize: '40px', fontWeight: '700', textAlign: 'center' }}>
          OUR MISSION
        </h1>
        <p style={{ fontSize: '25px', fontWeight: '400', textAlign: 'center' }}>
          Enabling financial inclusion for the next billion Indians
          <br />
          & making their Zindagi Set. Building a platform that enables you to sell
          <br />
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <h3 style={{ textAlign: 'center' }}>EARN BETTER. LIVE BETTER.</h3>
      </div>
      <div style={{ paddingBottom: '120px' }}></div>
    </div>
  );
}

export default Aboutbanner;
