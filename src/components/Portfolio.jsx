import React from 'react';
import Section from './Section';
import Heading from './Heading';

const Portfolio = () => {
  return (
    <Section
      id='portfolio'
      customPadding='my-5 mx-3 md:my-10 md:mx-5 lg:my-20 lg:mx-10'
      className='lg:max-h-fit'
    >
      <Heading text='Values' />

      <div className='gap-4 lg:gap-12 lg:px-10 flex flex-wrap items-center justify-center'>
        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#0063A4] rounded-lg md:w-72 shadow-lg md:h-96'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center md:mt-12'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img
              className='relative w-52 md:w-40 scale-150'
              src='./Customer_Satisfaction.png'
              alt='Customer Satisfaction'
            />
          </div>
          <div className='relative text-white px-6 pb-6 md:mt-28 lg:mt-[5.5rem]'>
            <div className='flex justify-center items-center'>
              <span className='block bg-white rounded-full text-[#0063A4] text-lg font-bold px-3 py-2 leading-none items-center'>
                Customer Satisfaction
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#FFCB05] rounded-lg md:w-72 shadow-lg md:h-96'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img
              className='relative w-52 md:w-40 h-40 md:h-full scale-150'
              src='./Safety_first.png'
              alt='Safety First'
            />
          </div>
          <div className='relative text-white px-6 pb-6 md:mt-10 lg:mt-5'>
            <div className='flex justify-center items-center'>
              <span className='block bg-white rounded-full text-[#FFCB05] text-xl font-bold px-3 py-2 leading-none items-center'>
                Safety First
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#0063A4] rounded-lg md:w-72 shadow-lg md:h-96'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center md:mt-12'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img
              className='relative w-52 md:w-40 scale-150'
              src='./Excellence.png'
              alt='Excellence'
            />
          </div>
          <div className='relative text-white px-6 pb-6 md:mt-24 lg:mt-[5.5rem]'>
            <div className='flex justify-center items-center'>
              <span className='block bg-white rounded-full text-[#0063A4] text-xl font-bold px-3 py-2 leading-none items-center'>
                Excellence
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#FFCB05] rounded-lg md:w-72 shadow-lg md:h-96'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center md:mt-12'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img
              className='relative w-52 md:w-40 scale-150'
              src='./Respect.png'
              alt='Respect'
            />
          </div>
          <div className='relative text-white px-6 pb-6 md:mt-24'>
            <div className='flex justify-center items-center'>
              <span className='block bg-white rounded-full text-[#FFCB05] text-xl font-bold px-3 py-2 leading-none items-center'>
                Respect
              </span>
            </div>
          </div>
        </div>

        <div className='flex-shrink-0 m-6 relative overflow-hidden bg-[#0063A4] rounded-lg md:w-72 shadow-lg md:h-96'>
          <svg
            className='absolute bottom-0 left-0 mb-8'
            viewBox='0 0 375 283'
            fill='none'
            style={{ transform: 'scale(1.5)', opacity: 0.1 }}
          >
            <rect
              x='159.52'
              y='175'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 159.52 175)'
              fill='white'
            />
            <rect
              y='107.48'
              width='152'
              height='152'
              rx='8'
              transform='rotate(-45 0 107.48)'
              fill='white'
            />
          </svg>
          <div className='relative pt-10 px-10 flex items-center justify-center md:mt-12'>
            <div
              className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img
              className='relative w-52 md:w-40 scale-150'
              src='./Teamwork.png'
              alt='Respect'
            />
          </div>
          <div className='relative text-white px-6 pb-6 md:mt-24'>
            <div className='flex justify-center items-center'>
              <span className='block bg-white rounded-full text-[#0063A4] text-xl font-bold px-3 py-2 leading-none items-center'>
                Teamwork
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
