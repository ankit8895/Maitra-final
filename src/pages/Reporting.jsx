import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';

import useScrollToTop from '../hooks/useScrollToTop';

const Reporting = () => {
  useScrollToTop();
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

      <Heading text='Module Cleaning' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./reporting1.jpg'
          alt='reporting1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./reporting2.jpeg'
          alt='reporting2'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./reporting1.jpg'
          alt='reporting1'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./reporting2.jpeg'
          alt='reporting2'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          All the activities are captured in the format of photos with date and
          time and geographical location stamp and weekly or monthly basis, we
          share the reports. We consider the requirement of clients for the
          formats else we have our own format.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          Reporting assures you that, the work is complete and it helps to
          calculate the performance of plant.
        </Typography>
      </div>
    </Section>
  );
};

export default Reporting;
