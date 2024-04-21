import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default App;
