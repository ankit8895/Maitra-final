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
    <Section id='contact' customPadding='my-20 mx-10' className='lg:max-h-fit'>
      <Heading text='Ready to go solar?' />
      <div className='flex flex-row justify-around items-center px-10'>
        <div>
          <Typography variant='paragraph' className=''></Typography>
        </div>
        <div>
          <form className='max-w-screen-lg mt-8 mb-2 w-80 sm:w-96'>
            <div className='flex flex-col gap-6 mb-1'>
              <div className='relative h-11 w-full min-w-[200px]'>
                <Input label='Name' />
              </div>

              <div className='relative h-11 w-full min-w-[200px]'>
                <Input label='Email' />
              </div>

              <div className='relative h-11 w-full min-w-[200px]'>
                <Input label='Subject' />
              </div>

              <div className='relative h-11 w-full min-w-[200px]'>
                <Textarea label='Message' />
              </div>
              <div className='relative h-11 w-full min-w-[200px] items-center'>
                <Checkbox label='Remember Me' />
              </div>
            </div>
            <button
              className='mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Get a free solar estimate
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
