import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import { Typography } from '@material-tailwind/react';

const PlantThermography = () => {
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

      <Heading text='Plant Thermography' />
      <div className='hidden md:grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./pt1.jpg'
          alt='pt1'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-fill object-center'
          src='./pt2.jpg'
          alt='pt2'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./pt3.jpg'
          alt='pt3'
        />
        <img
          className='h-full w-full max-w-full rounded-lg object-contain object-center'
          src='./pt4.jpg'
          alt='pt4'
        />
      </div>

      <Carousel className='md:hidden mb-2 md:mb-4 lg:mb-8'>
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./pt1.jpg'
          alt='pt1'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./pt2.jpg'
          alt='pt2'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./pt3.jpg'
          alt='pt3'
        />
        <img
          className='h-96 w-full max-w-full rounded-lg object-fill object-center'
          src='./pt4.jpg'
          alt='pt4'
        />
      </Carousel>

      <div className='text-justify'>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          Thermal inspection in solar power plants plays a critical role to
          improve the performance of panels and reduce maintenance costs.
          Thermal inspection monitors the temperature distribution of PV panels
          and enables early intervention by detecting potential problems. This
          minimizes losses in energy production and increases the efficiency of
          the solar power plant.
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          <span className='font-medium'>Advantages of Thermal Inspection:</span>
        </Typography>
        <Typography variant='paragraph' className='font-rubik mb-4 lg:mb-8'>
          <span className='font-medium'>Early Problem Detection:</span> Thermal
          inspection detects faults or performance degradation in PV panels at
          an early stage, thus avoiding costly repairs.
        </Typography>
        <Typography variant='paragraph' className='font-rubik'>
          <span className='font-medium'>Safety:</span> Since problems are
          detected remotely, it is done safely as it does not require human
          intervention.
        </Typography>
      </div>
    </Section>
  );
};

export default PlantThermography;
