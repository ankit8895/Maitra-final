import React, { useState } from 'react';

import { ImWhatsapp } from 'react-icons/im';
import { BsTelephone } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';

import Modal from './Modal';

const SpeedDialComponent = () => {
  const [prop, setProp] = useState(true);
  const handleOpenTabs = () => {
    setProp(!prop);
  };
  return (
    <div className='fixed top-[38rem] md:top-[70rem] lg:top-[33rem] right-4 animate-bounce'>
      <div className='group'>
        <button
          onClick={handleOpenTabs}
          className='relative align-middle select-none font-rubik font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full border-2 border-white'
          type='button'
        >
          <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <BsTelephone />
          </span>
        </button>
        <div
          className={`p-0.5 w-max absolute top-[-173px] left-[-4px] ${
            prop ? 'hidden' : 'flex flex-col items-center gap-1'
          }`}
          tabIndex='-1'
        >
          <Modal Modalfor='email' Modalsize='md'>
            <button className='flex flex-col items-center justify-center gap-1 p-1 m-0.5 border min-w-[48px] font-normal min-h-[48px] bg-red-500 rounded-full border-red-500 hover:scale-110 focus:scale-110 active:scale-100 transition-transform duration-300 ease-in-out relative'>
              <AiOutlineMail />
            </button>
          </Modal>
          <Modal Modalfor='Linkedin' Modalsize='md'>
            <button className='flex flex-col items-center justify-center gap-1 p-1 m-0.5 border min-w-[48px] font-normal min-h-[48px] bg-blue-500 rounded-full border-blue-500 hover:scale-110 focus:scale-110 active:scale-100 transition-transform duration-300 ease-in-out relative'>
              <GrLinkedinOption />
            </button>
          </Modal>
          <Modal Modalfor='whatsapp' Modalsize='md'>
            <button className='flex flex-col items-center justify-center gap-1 p-1 m-0.5 border min-w-[48px] font-normal min-h-[48px] bg-green-500 rounded-full border-green-500 hover:scale-110 focus:scale-110 active:scale-100 transition-transform duration-300 ease-in-out relative'>
              <ImWhatsapp />
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SpeedDialComponent;
