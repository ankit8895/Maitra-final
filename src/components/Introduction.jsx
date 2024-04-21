import React from 'react';
import Section from './Section';
import { Typography } from '@material-tailwind/react';
import Heading from './Heading';

const Introduction = () => {
  return (
    <Section
      id='introduction'
      customPadding='my-20 mx-10'
      className='lg:max-h-fit'
    >
      <Heading text='Introduction' />
      <div className='flex flex-row justify-around items-center px-10'>
        <div className='flex items-center justify-center lg:w-2/5 h-[30rem]'>
          <img
            src='https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='photo'
            className='bg-center object-cover w-full h-[30rem] shadow-xl rounded-lg'
          />
        </div>
        <div className='flex flex-col justify-between items-start lg:w-2/5 h-[30rem]'>
          <Typography
            as='p'
            variant='paragraph'
            className='font-rubik text-justify'
          >
            <span className='font-medium lg:text-2xl text-[#0063A4]'>
              Maitra
            </span>
            <span className='font-medium lg:text-2xl text-[#FFCB05]'>
              {' '}
              Solar Solutions
            </span>{' '}
            provides comprehensive Asset management, Operations and Maintenance
            (O&M) services for Solar PV plants. Our programs, practices and
            procedures are focused on enhancing plant performance, reliability,
            safety, commercial optimization and regulatory compliance. We are
            confident you will find the offerings truly unique to make your PV
            asset operate safer, more efficient and more reliable.
            <br />
            <br /> Solar Energy has an infinite potential. With solar plants
            operating across India, We are delivering affordable clean energy
            solutions tailored to the unique needs of residential & commercial
            users, utility companies, power trading companies and industrial
            corporations.
          </Typography>
          <Typography as='div'>
            <Typography
              as='p'
              variant='lead'
              className='font-rubik mb-4 font-medium'
            >
              "अशक्यं प्रकृतः ऋते जीवनम"
            </Typography>
            <Typography
              as='p'
              variant='lead'
              className='font-rubik font-medium'
            >
              THERE IS NO LIFE WITHOUT NATURE
            </Typography>
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default Introduction;
