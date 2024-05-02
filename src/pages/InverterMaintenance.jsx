import React from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

import useScrollToTop from '../hooks/useScrollToTop';

const InverterMaintenance = () => {
  useScrollToTop();
  return (
    <Section
      customPadding='my-5 mx-3 md:my-10 md:mx-5 lg:my-10 lg:mx-10'
      className='lg:max-h-fit'
    >
      <Link
        to='/'
        className='relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-lg group mb-4 lg:mb-8'
      >
        <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
        <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
        <span className='relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
          Go Back
        </span>
        <span className='absolute inset-0 border-2 border-black rounded-lg'></span>
      </Link>
      <Heading text='Inverter Maintenance' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./im1.jpeg'
          alt='im1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./im2.jpeg'
          alt='im2'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./im3.jpeg'
          alt='im3'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./im4.jpeg'
          alt='im4'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./im6.jpeg'
          alt='im6'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./im7.jpeg'
          alt='im7'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im1.jpeg'
          alt='im1'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im2.jpeg'
          alt='im2'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im3.jpeg'
          alt='im3'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im4.jpeg'
          alt='im4'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im6.jpeg'
          alt='im6'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./im7.jpeg'
          alt='im7'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          Solar Maintenance Solar Solutions provides a complete solar array
          testing, servicing and repair service on commercial rooftop and
          residential solar arrays. We can provide you with any or all of the
          following:
        </Typography>
        <ul className='list-disc md:flex md:flex-row md:flex-wrap lg:gap-8 gap-4'>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Energy production analysis
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              String testing
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Voltage & current check
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              AC/DC connector check
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Inverter testing
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Junction box, isolator, distribution board and wiring inspection
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Visual inspection of entire system for signs of damage
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Test of parameters of system to ensure optimum efficiency
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Roof fixing and roof condition check
            </Typography>
          </li>
          <li className='mb-2 md:mb-0'>
            <Typography variant='paragraph' className='font-rubik'>
              Advice, replacement of faulty parts and repairs, where necessary
            </Typography>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default InverterMaintenance;
