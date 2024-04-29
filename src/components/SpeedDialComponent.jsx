import React from 'react';
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from '@material-tailwind/react';

import { ImWhatsapp } from 'react-icons/im';
import { BsTelephone } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';

import Modal from './Modal';

const SpeedDialComponent = () => {
  const labelProps = {
    variant: 'small',
    color: 'blue-gray',
    className:
      'absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal',
  };
  return (
    <div className='fixed top-[38rem] md:top-[70rem] lg:top-[33rem] right-4 animate-bounce'>
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size='lg' className='rounded-full'>
            <BsTelephone className='h-5 w-5 transition-transform' />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <Modal Modalfor='whatsapp' Modalsize='md'>
            <SpeedDialAction className='relative font-rubik text-green-600'>
              <ImWhatsapp className='h-5 w-5' />
              <Typography {...labelProps} color='green'>
                Whatsapp
              </Typography>
            </SpeedDialAction>
          </Modal>
          <Modal Modalfor='Linkedin' Modalsize='md'>
            <SpeedDialAction className='relative font-rubik text-blue-600'>
              <GrLinkedinOption className='h-5 w-5' />
              <Typography {...labelProps} color='blue'>
                Linkedin
              </Typography>
            </SpeedDialAction>
          </Modal>
          <Modal Modalfor='email' Modalsize='md'>
            <SpeedDialAction className='relative font-rubik text-red-600'>
              <AiOutlineMail className='h-5 w-5' />
              <Typography {...labelProps} color='red'>
                Email
              </Typography>
            </SpeedDialAction>
          </Modal>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
};

export default SpeedDialComponent;
