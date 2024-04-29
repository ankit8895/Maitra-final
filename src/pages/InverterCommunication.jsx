import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Carousel, Typography } from '@material-tailwind/react';

import useScrollToTop from '../hooks/useScrollToTop';

const InverterCommunication = () => {
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

      <Heading text='Inverter communication' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./ic1.jpeg'
          alt='ic1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./ic2.jpeg'
          alt='ic2'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./ic4.jpeg'
          alt='ic4'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./ic5.jpeg'
          alt='ic5'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./ic1.jpeg'
          alt='ic1'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./ic2.jpeg'
          alt='ic2'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./ic4.jpeg'
          alt='ic4'
        />
        <img
          className='h-96 w-full max-w-full object-fill rounded-lg object-center'
          src='./ic5.jpeg'
          alt='ic5'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          <span className='font-medium'>Prevent even minor yield losses:</span>{' '}
          Now let’s say you’ve installed a 500 kWp solar PV plant. Also, there
          are strings with 10 solar PV panels connected in series. On a fine
          sunny day, one of the PV panels in one of the strings got damaged and
          stopped producing. Or maybe there is a loose connection in this
          string. If you see the overall picture, you’ll only see a small dip in
          production and you’ll not be able to derive a good reason for that
          mild reduction. It may be because of the weather conditions or due to
          some temporary shadowing etc. Hence, you’ll find no reason to go and
          get the system checked. Because of that, 10 panels in the system are
          now not producing anything and that is a loss of almost 15 units per
          day. Having a string monitoring system allows you to track the correct
          reasons for the decline in production and fix them as soon as
          possible.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          <span className='font-medium'>
            Precise localization of the problems:
          </span>{' '}
          Another reason why string monitoring is important is to identify the
          exact point of failure in the solar PV system. Consider you have a
          system of 1 MWp capacity and the solar PV panels are installed in a
          huge area. If there is no way to identify exactly which string has
          failed and the production has gone down, it might take days for the
          maintenance team to identify the string and fix it. That means a huge
          cost of maintenance along with a continuous energy loss. Having string
          monitoring system in the plant eliminates both these problems and
          allows the maintenance team to track the correct location of the
          problem and fix it in the minimum time possible.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          <span className='font-medium'>Pro-active maintenance:</span> There are
          multiple types of defects and faults that can exist in a solar PV
          panel that are not easily detected by human eyes or before making a
          purchase. These defects cause severe damage to the overall system
          design and energy production. Following are a few defects:
        </Typography>
        <Typography
          variant='paragraph'
          className='font-rubik mb-4 lg:mb-8 px-4 lg:px-8'
        >
          <span className='font-medium'>Microcracks:</span> Can happen due to
          vibrations in the panels or mishandling while installation. These are
          not visible to the naked eyes but can cause serious loss of energy
          production over many years.
        </Typography>
        <Typography
          variant='paragraph'
          className='font-rubik mb-4 lg:mb-8 px-4 lg:px-8'
        >
          <span className='font-medium'>PID:</span> Potential Induced
          Degradation happens in the solar crystalline PV panels caused by stray
          currents and can cause efficiency loss of up to 30%. This defect can
          also take up to months to detect.
        </Typography>
        <Typography variant='paragraph' className='font-rubik'>
          Considering the above points, it is clear that string monitoring is an
          important measure to keep a track of the solar PV system and also to
          identify key issues with the solar PV panels.
        </Typography>
      </div>
    </Section>
  );
};

export default InverterCommunication;
