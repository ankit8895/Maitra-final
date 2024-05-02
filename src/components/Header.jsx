import React from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react';

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
      >
        <a href='#introduction' className='flex items-center'>
          Introduction
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
      >
        <a href='#portfolio' className='flex items-center'>
          Values
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
      >
        <a href='#offer' className='flex items-center'>
          Services
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
      >
        <a href='#contact' className='flex items-center'>
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='font-rubik sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Typography
          as='a'
          href='/'
          className='mr-4 cursor-pointer py-1.5 flex flex-row items-center gap-2'
        >
          <img src='./logo.png' alt='logo' className='w-20 h-20' />
          <Typography as='h2' className='font-rubik font-extrabold lg:text-2xl'>
            Maitra Solar Solutions
          </Typography>
        </Typography>
        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden lg:block'>{navList}</div>

          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {/* <div className='flex items-center gap-x-1'>
          <Button fullWidth variant='text' size='sm' className=''>
            <span>Log In</span>
          </Button>
          <Button fullWidth variant='gradient' size='sm' className=''>
            <span>Sign in</span>
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
