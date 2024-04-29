import React from 'react';
import Section from './Section';
import { Typography } from '@material-tailwind/react';
import Heading from './Heading';

const Introduction = () => {
  return (
    <Section
      id='introduction'
      customPadding=' my-5 mx-3 md:my-10 md:mx-5 lg:my-20 lg:mx-10'
      className="lg:max-h-fit bg-[url('./background.png')] bg-cover"
    >
      <Heading text='Introduction' />
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-evenly lg:justify-around items-center lg:px-10'>
        <div className='flex items-center justify-center md:w-1/3 lg:w-2/5 md:h-[30rem]'>
          <img
            src='./profile.jpeg'
            alt='profile-photo'
            className='bg-center object-cover lg:object-contain lg:bg-[#080607] w-full md:h-full shadow-xl rounded-lg'
          />
        </div>
        <div className='flex flex-col justify-between items-start md:w-1/2 lg:w-2/5 md:h-[30rem]'>
          <Typography
            as='p'
            variant='paragraph'
            className='font-rubik text-justify mb-3 lg:mb-0'
          >
            <span className='font-medium text-[#0063A4]'>Maitra</span>
            <span className='font-medium text-[#FFCB05]'>
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
              className='font-rubik md:mb-1 lg:mb-4 font-medium'
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
