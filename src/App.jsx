import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpeedDialComponent from './components/SpeedDialComponent';
import { Typography } from '@material-tailwind/react';

import ModuleCleaning from './pages/ModuleCleaning';
import InverterMaintenance from './pages/InverterMaintenance';
import Reporting from './pages/Reporting';
import PlantMonitoringPerformance from './pages/PlantMonitoringPerformance';
import InverterCommunication from './pages/InverterCommunication';
import PlantThermography from './pages/PlantThermography';
import ChemicalCleaning from './pages/ChemicalCleaning';
import Revamping from './pages/Revamping';
import StreetLights from './pages/StreetLights';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Router className='m-0 p-0 relative'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <Introduction />
              <Portfolio />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path='/module-cleaning' element={<ModuleCleaning />} />
        <Route path='/inverter-maintenance' element={<InverterMaintenance />} />
        <Route path='/reporting' element={<Reporting />} />
        <Route
          path='/plant-monitoring-performance'
          element={<PlantMonitoringPerformance />}
        />
        <Route
          path='/inverter-communication'
          element={<InverterCommunication />}
        />
        <Route path='/plant-thermography' element={<PlantThermography />} />
        <Route path='/chemical-cleaning' element={<ChemicalCleaning />} />
        <Route path='/revamping' element={<Revamping />} />
        <Route path='/street-lights' element={<StreetLights />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <SpeedDialComponent />
      <Typography
        as='a'
        href='https://www.instagram.com/wellnexusindia/'
        color='blue-gray'
        className='text-right font-normal h-min w-full px-4 font-rubik border-t-2'
      >
        This website is designed by{' '}
        <span className='text-[#D4AF37] font-bold underline decoration-2'>
          Wellnexus
        </span>{' '}
        India
      </Typography>
    </Router>
  );
};

export default App;
