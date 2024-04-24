import React from 'react';
import { Link } from 'react-router-dom';
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
      src: './mc1.jpeg',
      heading: 'Module cleaning',
      description: `Effective module cleaning helps to generate more electricity and mostly done with brush and water. Sometimes, dry cleaning using brush only.`,
      route: '/module-cleaning',
    },
    {
      src: './im1.jpeg',
      heading: 'Inverter maintenance',
      description: `Inverters converts solar energy (DC) to usable (AC) energy. Periodic inverter maintenance helps to reduce breakdown of inverter also increases its life.`,
      route: '/inverter-maintenance',
    },
    {
      src: './reporting1.jpg',
      heading: 'Reporting',
      description: `Reports are the recording of previous activities and help to understand the work flow and give direction to plan next activities.`,
      route: '/reporting',
    },
    {
      src: './pmp1.jpg',
      heading: 'Plant monitoring & performance',
      description: `Plants are monitored using different applications to confirm if everything is in place. This will trigger alarms for showing non routine things.`,
      route: '/plant-monitoring-performance',
    },
    {
      src: './ic1.jpeg',
      heading: 'Inverter communication',
      description: `Communication between the Monitor Application and inverters should be smooth to get the actual generation data.`,
      route: '/inverter-communication',
    },
    {
      src: './pt1.jpg',
      heading: 'Plant Thermography',
      description: `Plant Thermography is best way to understand if there are any damages to solar plant. This will showcase the thermal images of all entities involved in plants.`,
      route: '/plant-thermography',
    },
    {
      src: './cc1.jpeg',
      heading: 'Chemical Cleaning',
      description: `If solar panels are covered with metal dust or other than normal dust, then it will reduce the generation. In these cases, chemical cleaning is conducted.`,
      route: '/chemical-cleaning',
    },
    {
      src: './Revamping.jpg',
      heading: 'Revamping',
      description: `After installation of solar plant, requirements are changed after few years, revamping of solar can be done.`,
      route: '/revamping',
    },
    {
      src: './sl1.webp',
      heading: 'Street lights',
      description: `We provide street lights, installation and their maintenance. These street lights are semi-integrated and fully integrated.`,
      route: '/street-lights',
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
          <Card key={index} className='mt-6 w-full md:h-min lg:h-full'>
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
              <Link
                to={item.route}
                className='relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-lg group'
              >
                <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
                <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
                <span className='relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white'>
                  Read More
                </span>
                <span className='absolute inset-0 border-2 border-black rounded-lg'></span>
              </Link>
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
                  ? 'hover:ring-[#0063A4] hover:shadow-[#0063A4]'
                  : 'hover:ring-[#FFCB05] hover:shadow-[#FFCB05]'
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
                  href={item.route}
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
