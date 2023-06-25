"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import '../../styles/Whyus.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Whyus() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 50,
      easing: 'ease-in',
      once: false
    });
  }, []);

  return (
    <div className="whyus">
      <div className="whyus_container">
        <div className="whyus_image">
          <Image
            style={{
              height: '800px'
            }}
            src="/images/bgImg.webp"
            alt="Background"
            width={256}
            height={800}
          />
          <div
            style={{
              position: 'absolute',
              top: '150px',
              left: '0px'
            }}
          >
            <p
              style={{
                fontSize: '36px',
                lineHeight: '36px',
                fontWeight: '600',
                padding: '20px'
              }}
              data-aos="fade-right"
            >
              Why Choose us
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '36px',
                fontWeight: '400',
                lineBreak: 'auto',
                paddingBottom: '10px'
              }}
              data-aos="fade-right"
            >
              Why we are loved by our customers
            </p>
            <Image
              data-aos="fade-left"
              src="/images/whyUsHero.webp"
              alt="Why Us Hero"
              width={320}
              height={350}
            />
          </div>
        </div>

        <div className="whyus_grid_container">
          <div className="grid_item">
            <Image
              src="/images/zero_investment.d5743aab.svg"
              alt="Zero Investment"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Zero Investment
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Build your business without any investment
            </p>
          </div>
          <div className="grid_item">
            <Image
              src="/images/quick_payout.1d689e09.svg"
              alt="Quick Payout"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Quick Payout
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Direct Payout in your bank account in short time
            </p>
          </div>
          <div className="grid_item">
            <Image
              src="/images/Fin_products.0e8a0582.svg"
              alt="Limitless Earnings"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Limitless Earnings
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Direct Payout in your bank account in short time
            </p>
          </div>
          <div className="grid_item">
            <Image
              src="/images/Icon_support.c8382fc1.svg"
              alt="Training & Upskilling"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Training & Upskilling
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Direct Payout in your bank account in short time
            </p>
          </div>
          <div className="grid_item">
            <Image
              src="/images/customerSupport.5780cd23.svg"
              alt="Customer Support"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Customer Support
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Direct Payout in your bank account in short time
            </p>
          </div>
          <div className="grid_item">
            <Image
              src="/images/financialProduct.1b3d6eec.svg"
              alt="Financial Products"
              width={200}
              height={200}
            />
            <p
              style={{
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0.1rem',
                fontWeight: '600',
                padding: '20px 0px'
              }}
            >
              Financial Products
            </p>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '25px',
                letterSpacing: '0.1rem',
                fontWeight: '500'
              }}
            >
              Direct Payout in your bank account in short time
            </p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '180px' }}></div>
    </div>
  );
}

export default Whyus;
