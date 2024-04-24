import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';

const StreetLights = () => {
  return (
    <Section
      customPadding='my-5 mx-3 md:my-10 md:mx-5 lg:my-10 lg:mx-10'
      className='lg:max-h-fit'
    >
      <Link
        to='/'
        className='relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-lg group mb-8'
      >
        <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
        <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
        <span className='relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
          Go Back
        </span>
        <span className='absolute inset-0 border-2 border-black rounded-lg'></span>
      </Link>

      <Heading text='Street Lights' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./sl1.webp'
          alt='sl1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./sl2.png'
          alt='sl2'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./sl3.jpeg'
          alt='sl3'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./sl4.jpeg'
          alt='sl4'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./sl5.jpeg'
          alt='sl5'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./sl6.jpeg'
          alt='sl6'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl1.webp'
          alt='sl1'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl2.png'
          alt='sl2'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl3.jpeg'
          alt='sl3'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl4.jpeg'
          alt='sl4'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl5.jpeg'
          alt='sl5'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./sl6.jpeg'
          alt='sl6'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik'>
          We provide street lights, installation and their maintenance. These
          street lights are semi-integrated and fully integrated. You may order
          the solar lights of different capacities in watts, as per your
          requirement.
        </Typography>
      </div>
    </Section>
  );
};

export default StreetLights;
