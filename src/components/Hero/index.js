import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.scss';

const HeroSection = ({ src, heroText, featured }) => {
  return (
    <section className='hero-section'>
      <img
        src={src}
        alt=''
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {featured ? <p>{featured}</p> : null}
      {heroText ? (
        <div className='cta'>
          <p>We</p>
          <p>{heroText}</p>
          <Button
            variant='outline-primary'
            className='mt-2'
            block
            size='lg'
            style={{ color: 'white' }}
          >
            About Us
          </Button>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
