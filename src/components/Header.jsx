// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import {
//   Navbar,
//   Typography,
//   IconButton,
//   Collapse,
// } from '@material-tailwind/react';

// const Header = () => {
//   const { pathname } = useLocation();
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       'resize',
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const navList = (
//     <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
//       <Typography
//         as='li'
//         variant='small'
//         color='blue-gray'
//         className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
//       >
//         <a href='#introduction' className='flex items-center'>
//           Introduction
//         </a>
//       </Typography>
//       <Typography
//         as='li'
//         variant='small'
//         color='blue-gray'
//         className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
//       >
//         <a href='#portfolio' className='flex items-center'>
//           Values
//         </a>
//       </Typography>
//       <Typography
//         as='li'
//         variant='small'
//         color='blue-gray'
//         className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
//       >
//         <a href='#offer' className='flex items-center'>
//           Services
//         </a>
//       </Typography>
//       <Typography
//         as='li'
//         variant='small'
//         color='blue-gray'
//         className='p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]'
//       >
//         <a href='#contact' className='flex items-center'>
//           Contact
//         </a>
//       </Typography>
//     </ul>
//   );

//   return (
//     <Navbar className='font-rubik sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8'>
//       <div className='flex items-center justify-between text-blue-gray-900'>
//         <Typography
//           as='a'
//           href='/'
//           className='mr-4 cursor-pointer py-1.5 flex flex-row items-center gap-2'
//         >
//           <img src='./logo.png' alt='logo' className='w-20 h-20' />
//           <Typography as='h2' className='font-rubik font-extrabold lg:text-2xl'>
//             Maitra Solar Solutions
//           </Typography>
//         </Typography>
//         {pathname === '/' && (
//           <div className='flex items-center gap-4'>
//             <div className='mr-4 hidden lg:block'>{navList}</div>

//             <IconButton
//               variant='text'
//               className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
//               ripple={false}
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   className='h-6 w-6'
//                   viewBox='0 0 24 24'
//                   stroke='currentColor'
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     d='M6 18L18 6M6 6l12 12'
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   className='h-6 w-6'
//                   fill='none'
//                   stroke='currentColor'
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     d='M4 6h16M4 12h16M4 18h16'
//                   />
//                 </svg>
//               )}
//             </IconButton>
//           </div>
//         )}
//       </div>
//       <Collapse open={openNav}>{navList}</Collapse>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { pathname } = useLocation();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const navListMenuItems = [
  //   {
  //     title: "Consulting",
  //     route:
  //   },
  //   {
  //     title: "Installation",
  //   },
  //   {
  //     title: "Maintenance",
  //   },
  //   {
  //     title: "Training",
  //   },
  //   {
  //     title: "Support",
  //   },
  // ];
  const navListMenuItems = [
    {
      heading: "Module cleaning",
      route: "/module-cleaning",
    },
    {
      heading: "Inverter maintenance",
      route: "/inverter-maintenance",
    },
    {
      heading: "Reporting",
      route: "/reporting",
    },
    {
      heading: "Plant monitoring & performance",
      route: "/plant-monitoring-performance",
    },
    {
      heading: "Inverter communication",
      route: "/inverter-communication",
    },
    {
      heading: "Plant Thermography",
      route: "/plant-thermography",
    },
    {
      heading: "Chemical Cleaning",
      route: "/chemical-cleaning",
    },
    {
      heading: "Revamping",
      route: "/revamping",
    },
    {
      heading: "Street lights",
      route: "/street-lights",
    },
  ];

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(({ heading, route }, key) => (
      <a href={route} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold font-rubik"
            >
              {heading}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ));

    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
        >
          <MenuHandler>
            <Typography
              as="div"
              variant="small"
              color="blue-gray"
              className="font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]"
            >
              <ListItem
                className="flex items-center justify-start gap-2 pl-1 pr-0 font-medium text-gray-900 bg-transparent hover:bg-transparent hover:text-[#0063A4] focus:text-[#0063A4] focus-visible:bg-transparent focus-within:bg-transparent active:bg-transparent enabled:bg-transparent checked:bg-transparent"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Services
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block font-medium ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden font-medium ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]"
      >
        <a href="#introduction" className="flex items-center">
          Introduction
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]"
      >
        <a href="#portfolio" className="flex items-center">
          Values
        </a>
      </Typography>
      <NavListMenu />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-rubik text-lg hover:text-[#0063A4] focus:text-[#0063A4]"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="font-rubik sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 flex flex-row items-center gap-2"
        >
          <img src="./logo.png" alt="logo" className="w-20 h-20" />
          <Typography as="h2" className="font-rubik font-extrabold lg:text-2xl">
            Maitra Solar Solutions
          </Typography>
        </Typography>
        {pathname === "/" ? (
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <NavListMenu />
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        )}
      </div>
      {pathname === "/" ? (
        <Collapse open={openNav}>{navList}</Collapse>
      ) : (
        <Collapse open={openNav}>
          <NavListMenu />
        </Collapse>
      )}
    </Navbar>
  );
};

export default Header;
