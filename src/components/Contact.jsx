import React, { useState } from 'react';
import axios from 'axios';
import Section from './Section';
import Heading from './Heading';
import {
  Checkbox,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const formSubmitHandler = async () => {
    const formData = {
      name,
      email,
      subject,
      message,
    };

    // try {
    //   const response = await axios.post(
    //     'https://docs.google.com/forms/d/e/1FAIpQLSfD373DJ24n83fG77JAEsQKH3FmvRUGSl6YbVWWQKncHegrIw/viewform?embedded=true',
    //     formData
    //   );

    //   console.log('Form submited', response);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }

    const queryParams = new URLSearchParams(formData).toString();
    const googleFormsURL = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfD373DJ24n83fG77JAEsQKH3FmvRUGSl6YbVWWQKncHegrIw/formResponse?${queryParams}`;
    window.open(googleFormsURL, '_blank');
  };

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
            </Typography>
          </div>
        </div>

        <div className='mt-8 mb-2 lg:w-[30rem]'>
          {/* <form className='flex flex-col gap-2 items-center justify-center w-full'>
            <div className='relative w-full min-w-[200px]'>
              <Input
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Input
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Input
                label='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className='relative w-full min-w-[200px]'>
              <Textarea
                label='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='relative w-full min-w-[200px] items-center'>
              <Checkbox label='I agree the Terms and Conditions' />
            </div>
            <div className='relative w-full min-w-[200px]'>
              <button
                onClick={formSubmitHandler}
                className='block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                type='button'
              >
                Get a free solar estimate
              </button>
            </div>
          </form> */}
          {/* <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSedHuPW1240_1w7ABRmoBlvoPfl_4Ys0xWgBCGNci10yzMnBA/viewform?embedded=true'
            height='350'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
            className='w-full'
          >
            Loading…
          </iframe> */}
          <div className='flex flex-col gap-2 justify-center w-full'>
            <Typography
              as='a'
              href='https://docs.google.com/forms/d/e/1FAIpQLSedHuPW1240_1w7ABRmoBlvoPfl_4Ys0xWgBCGNci10yzMnBA/viewform?embedded=true'
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
              <span className='underline cursor-pointer'>
                info@maitrasolarsolutions.in
              </span>
            </Typography>
            <Typography variant='paragraph' className='font-rubik'>
              To join our team, contact us at{' '}
              <span className='underline cursor-pointer'>
                hr@maitrasolarsolutions.in
              </span>
            </Typography>

            <Typography variant='paragraph' className='font-rubik'>
              Text "HELP" for help or contact us at{' '}
              <br className='block md:hidden' />
              <span className='underline cursor-pointer'>+91-8446853660</span>
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
