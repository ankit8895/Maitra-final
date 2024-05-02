import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';

import useScrollToTop from '../hooks/useScrollToTop';

const PlantMonitoringPerformance = () => {
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

      <Heading text='Plant Monitoring and Performance' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./pmp1.jpg'
          alt='pmp1'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./pmp1.jpg'
          alt='pmp1'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          System monitoring is essential for ensuring your solar array is
          running at it’s maximum capacity. Your Return-On-Investment (ROI) can
          be severely dented if you do not know of problems on your array
          straightaway. Without monitoring, you may not be aware of a problem on
          your arrays for weeks or even months.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          One outage could cost you more than the cost of years’ worth of remote
          monitoring. So ensuring they are running at peak performance is
          essential. Power losses and outages, create downtime and a loss of
          energy and revenue. So, the instead of asking why to have it, we would
          ask, ‘Why would you not want it?’.
        </Typography>
        <Typography variant='paragraph' className='font-rubik'>
          Why wouldn’t you like to keep an eye on the performance of your
          system, be notified the moment something goes wrong and ensure you are
          using the energy created in the most efficient way? Our monitoring
          service will provide you with up-to-date reports, system status,
          including fault detection and instantaneous alerts
        </Typography>
      </div>
    </Section>
  );
};

export default PlantMonitoringPerformance;
