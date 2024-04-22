import { Typography } from '@material-tailwind/react';
import React from 'react';

const Heading = ({ text }) => {
  return (
    <div className='w-full py-4 mb-8'>
      <Typography
        as='h1'
        className='font-rubik font-semibold text-2xl md:text-4xl'
      >
        {text}
      </Typography>
      <div className='h-1 md:h-2 w-full bg-red-500' />
    </div>
  );
};

export default Heading;
