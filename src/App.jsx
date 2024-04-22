import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpeedDialComponent from './components/SpeedDialComponent';
import { Typography } from '@material-tailwind/react';

const App = () => {
  return (
    <div className='m-0 p-0 relative'>
      <Header />
      <Hero />
      <Introduction />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <SpeedDialComponent />
      <Typography
        as='a'
        href='#'
        color='blue-gray'
        className='text-right font-normal h-min w-full px-4 font-rubik border-t-2'
      >
        This website is designed by Wellnexus India
      </Typography>
    </div>
  );
};

export default App;
