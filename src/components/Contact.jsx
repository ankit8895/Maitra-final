import React, { useState } from 'react';
import Section from './Section';
import Heading from './Heading';
import { Typography } from '@material-tailwind/react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Section
      id='contact'
      customPadding='my-5 mx-3 md:my-10 md:mx-5 lg:my-20 lg:mx-10'
      className='lg:max-h-fit'
    >
      <Heading text='Contact Us' />
      <div className='flex flex-col lg:flex-row justify-around items-center'>
        <div className='lg:w-[30rem]'>
          <div className='flex flex-col gap-6 mb-1 justify-between'>
            <Typography variant='h3' className='font-rubik'>
              Ready to go solar ?
            </Typography>
            <Typography variant='paragraph' className='font-rubik text-justify'>
              By clicking{' '}
              <span className='font-bold'>"Get A Free Solar Estimate"</span>, I
              consent to join the email list and receive SMS from Maitra Solar
              solutions, with access to our latest offers and services. Message
              a data rates may apply. Message frequency varies. More details on
              this are in our{' '}
              <Link
                to='/privacy-policy'
                className='text-start underline underline-offset-4 cursor-pointer font-bold'
              >
                Privacy Policy and Terms of Service
              </Link>
            </Typography>
          </div>
        </div>

        <div className='mt-8 mb-2 lg:w-[30rem]'>
          <div className='flex flex-col gap-2 justify-center w-full'>
            <Typography
              as='a'
              href='https://docs.google.com/forms/d/e/1FAIpQLSdOm5zke-gtnYMq9vhuHKT36jAUODur3RlST7au3nOYWsNzPQ/viewform?usp=sf_link'
              className='relative inline-block px-4 py-2 font-medium group mb-6 animate-bounce text-center'
              target='_blank'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0063A4] group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-[#0063A4] group-hover:bg-[#0063A4]'></span>
              <span className='relative text-black group-hover:text-white font-rubik'>
                Get A Free Solar Estimate
              </span>
            </Typography>
            <Typography variant='paragraph' className='font-rubik'>
              Email:{' '}
              <span className='underline underline-offset-4 cursor-pointer font-bold'>
                info@maitrasolarsolutions.in
              </span>
            </Typography>
            <Typography variant='paragraph' className='font-rubik'>
              To join our team, contact us at{' '}
              <span className='underline underline-offset-4 cursor-pointer font-bold'>
                hr@maitrasolarsolutions.in
              </span>
            </Typography>

            <Typography variant='paragraph' className='font-rubik'>
              Text <span className='font-bold'>"HELP"</span> for help or contact
              us at <br className='block md:hidden' />
              <span className='underline underline-offset-4 cursor-pointer font-bold'>
                +91-8446853660
              </span>
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
