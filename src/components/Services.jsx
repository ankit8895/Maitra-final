import React from 'react';
import Section from './Section';
import Heading from './Heading';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

const Services = () => {
  const servicesList = [
    {
      src: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      heading: 'Module cleaning',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './im1.jpeg',
      heading: 'Inverter maintenance',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './reporting1.jpg',
      heading: 'Reporting',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './pmp1.jpg',
      heading: 'Plant monitoring & performance',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './ic1.jpeg',
      heading: 'Inverter communication',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './pt1.jpg',
      heading: 'Plant Thermography',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './cc1.jpeg',
      heading: 'Chemical Cleaning',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './Revamping.jpg',
      heading: 'Revamping',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
    {
      src: './sl1.webp',
      heading: 'Street lights',
      description: `The place is close to Barceloneta Beach and bus stop just 2 min by
      walk and near to &quot;Naviglio&quot; where you can enjoy the main
      night life in Barcelona.`,
    },
  ];
  return (
    <Section
      id='offer'
      customPadding='my-5 mx-3 md:my-10 md:mx-5 lg:my-20 lg:mx-10'
      className="lg:max-h-fit bg-[url('./background.png')] bg-cover"
    >
      <Heading text='Services' />
      <div className='hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-12 lg:px-10'>
        {servicesList.map((item, index) => (
          <Card key={index} className='mt-6 w-full md:h-min'>
            <CardHeader
              color='blue-gray'
              className='relative hidden md:block lg:h-56 bg-transparent'
            >
              <img src={item.src} alt='card-image' className='h-full w-full' />
            </CardHeader>
            <CardBody>
              <Typography
                variant='h5'
                color='blue-gray'
                className='mb-2 font-rubik'
              >
                {item.heading}
              </Typography>
              <Typography className='hidden lg:block font-rubik text-justify'>
                {item.description}
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button className='font-rubik'>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className=' lg:hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-12 lg:px-10'>
        {servicesList.map((item, index) => (
          <div key={index} className='animate-in zoom-in duration-200'>
            <div
              className={`ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 transform duration-200 hover:shadow-md z-0 relative ${
                index % 2 === 0
                  ? 'ring-[#0063A4] shadow-[#0063A4]'
                  : 'ring-[#FFCB05] shadow-[#FFCB05]'
              }`}
            >
              <div className='flex flex-col break-inside-avoid-page z-0 relative'>
                <div className='flex justify-between'>
                  <div className='flex space-x-6'>
                    <div className='flex space-x-4 flex-shrink-0 md:w-56'>
                      <div>
                        <Typography
                          variant='lead'
                          className={`font-semibold font-rubik ${
                            index % 2 === 0
                              ? 'text-[#0063A4]'
                              : 'text-[#FFCB05]'
                          }`}
                        >
                          {item.heading}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <Typography
                  as='a'
                  href='#'
                  target='_blank'
                  className='font-rubik text-justify'
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
