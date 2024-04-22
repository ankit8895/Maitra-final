import React from 'react';
import Section from './Section';
import Heading from './Heading';
import {
  Checkbox,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react';

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
              By clicking "Get A Free Solar Estimate", I consent to join the
              email list and receive SMS from Maitra Solar solutions, with
              access to our latest offers and services. Message a data rates may
              apply. Message frequency varies. More details on this are in our{' '}
              <span className='underline cursor-pointer'>
                Privacy Policy and Terms of Service
              </span>
              .
              <br />
              <br />
              Text "HELP" for help or contact us at{' '}
              <br className='block md:hidden' />
              <span className='underline cursor-pointer'>+91-8446853660</span>
            </Typography>
            <Typography variant='paragraph' className='font-rubik'>
              <span>Email:</span>{' '}
              <span className='underline cursor-pointer'>
                info@maitrasolarsolutions.in
              </span>
              <br />
              To join our team, contact us at{' '}
              <span className='underline cursor-pointer'>
                hr@maitrasolarsolutions.in
              </span>
            </Typography>
          </div>
        </div>

        <div className='mt-8 mb-2 lg:w-[30rem]'>
          <form className='flex flex-col gap-2 items-center justify-center w-full'>
            <div className='relative w-full min-w-[200px]'>
              <Input label='Name' />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Input label='Email' />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Input label='Subject' />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Textarea label='Message' />
            </div>
            <div className='relative w-full min-w-[200px] items-center'>
              <Checkbox label='I agree the Terms and Conditions' />
            </div>
            <div className='relative w-full min-w-[200px]'>
              <button
                className='block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
              >
                Get a free solar estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
