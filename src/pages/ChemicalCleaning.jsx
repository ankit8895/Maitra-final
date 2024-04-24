import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';

const ChemicalCleaning = () => {
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

      <Heading text='Chemical Cleaning' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./cc1.jpeg'
          alt='cc1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./cc2.jpeg'
          alt='cc2'
        />
      </div>
      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./cc1.jpeg'
          alt='cc1'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./cc2.jpeg'
          alt='cc2'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          Solar panel cleaning is now a firmly established part of maintaining a
          solar panel array. If you own or maintain a commercial solar panel
          array, you will no doubt be interested in reaping the largest
          financial reward from your array and seeing your ROI as soon as
          possible.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          Solar panel cleaning will help you to do just that. Having dirty solar
          panels can severely dent your ROI time. By having clean solar panels,
          more light hits the solar cells meaning more generation which in turn
          means more money, sooner.
        </Typography>
        <Typography variant='paragraph' className='font-rubik'>
          We offer a complete solar panel cleaning service, including a
          guaranteed 24 hours response time if required. In cases of bird
          dropping strikes, lichen growth, dust clouds due to building works or
          previously unnoticed dirt build up on solar panels, this is a useful
          part of our service which will see your solar panels instantly
          increase their output.
        </Typography>
      </div>
    </Section>
  );
};

export default ChemicalCleaning;
