import { Typography } from '@material-tailwind/react';
import React from 'react';

const Footer = () => {
  const navList = (
    <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
      <li>
        <Typography
          as='a'
          href='#introduction'
          color='blue-gray'
          className='font-normal font-rubik transition-colors hover:text-[#0063A4] focus:text-[#0063A4] text-lg'
        >
          Introduction
        </Typography>
      </li>
      <li>
        <Typography
          as='a'
          href='#portfolio'
          color='blue-gray'
          className='font-normal font-rubik transition-colors hover:text-[#0063A4] focus:text-[#0063A4] text-lg'
        >
          Values
        </Typography>
      </li>
      <li>
        <Typography
          as='a'
          href='#offer'
          color='blue-gray'
          className='font-normal font-rubik transition-colors hover:text-[#0063A4] focus:text-[#0063A4] text-lg'
        >
          Services
        </Typography>
      </li>
      <li>
        <Typography
          as='a'
          href='#contact'
          color='blue-gray'
          className='font-normal font-rubik transition-colors hover:text-[#0063A4] focus:text-[#0063A4] text-lg'
        >
          Contact Us
        </Typography>
      </li>
    </ul>
  );
  return (
    <footer className='w-full border-t-2 p-8'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between'>
        <img src='./logo.png' alt='logo-ct' className='w-20' />
        {navList}
      </div>
    </footer>
  );
};

export default Footer;
