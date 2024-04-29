import { Carousel } from '@material-tailwind/react';
import Section from './Section';
import React from 'react';

const Hero = () => {
  return (
    <Section id='hero' className='h-[31rem]'>
      <Carousel
        className='h-full'
        loop={true}
        autoplay={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src='./carousel1.png'
          alt='image 1'
          className='h-full w-full md:object-cover lg:object-fill'
        />
        <img
          src='./carousel2.png'
          alt='image 2'
          className='h-full w-full md:object-cover lg:object-fill'
        />
        <img
          src='./carousel3.png'
          alt='image 2'
          className='h-full w-full md:object-cover lg:object-fill'
        />
        <img
          src='./carousel4.png'
          alt='image 2'
          className='h-full w-full md:object-cover lg:object-fill'
        />
      </Carousel>
    </Section>
  );
};

export default Hero;
