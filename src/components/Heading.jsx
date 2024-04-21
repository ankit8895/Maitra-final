import { Typography } from '@material-tailwind/react';
import React from 'react';

const Heading = ({ text }) => {
  return (
    <div className='w-full py-4'>
      <Typography
        as='h1'
        className='font-rubik font-semibold lg:text-4xl mb-8 border-b-4 border-red-600'
      >
        {text}
      </Typography>
    </div>
  );
};

export default Heading;
