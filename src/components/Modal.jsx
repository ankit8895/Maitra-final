import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';

const Modal = ({ children, Modalfor, Modalsize }) => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <>
      <Button
        className='bg-transparent border-0 shadow-none hover:shadow-none p-0'
        onClick={() => handleOpen(Modalsize)}
      >
        {children}
      </Button>
      <Dialog
        open={size === 'md' || size === 'xxl'}
        size={size || 'md'}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className='z-10'>
          {Modalfor === 'whatsapp'
            ? 'Scan the OR Code'
            : Modalfor === 'email'
            ? 'Send Email'
            : Modalfor === 'Linkedin'
            ? 'Click to connect'
            : 'Privacy Policy'}
        </DialogHeader>
        <DialogBody
          className={`flex justify-center items-center z-10 overflow-scroll`}
        >
          {Modalfor === 'whatsapp' ? (
            <img src='./QRCode.jpg' alt='whatsapp-QR' className='w-1/2 h-1/2' />
          ) : Modalfor === 'email' ? (
            <Typography
              variant='paragraph'
              className='underline underline-offset-8 font-semibold text-xs md:text-base'
            >
              Email: info@maitrasolarsolutions.in
            </Typography>
          ) : Modalfor === 'Linkedin' ? (
            <a
              href='https://in.linkedin.com/in/maitra-solar-solutions'
              target='_blank'
              className='underline underline-offset-8 font-semibold text-sm md:text-base'
            >
              https://in.linkedin.com/in/maitra-solar-solutions
            </a>
          ) : (
            <></>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Modal;
