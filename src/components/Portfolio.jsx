import React from 'react';
import Section from './Section';
import Heading from './Heading';

const Portfolio = () => {
  return (
    <Section
      id='portfolio'
      customPadding='my-20 mx-10'
      className='lg:max-h-fit'
    >
      <Heading text='Values' />
    </Section>
  );
};

export default Portfolio;
