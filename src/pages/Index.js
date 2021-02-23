import React, { useEffect } from 'react';

import Landing from '../components/Index/Landing';
import Clients from '../components/Index/Clients';
import Advantages from '../components/Index/Advantages';
import Products from '../components/Index/Products';
import Team from '../components/Index/Team';
import Testimonials from '../components/Index/Testimonials';
import CTA from '../components/CTA';
import Map from '../components/Map';
import CovidSystems from '../components/Index/CovidSystems';

const Index = () => {
  return (
    <>
      <Landing />
      <Clients />
      <CovidSystems />
      <Advantages />
      <Products target="products" />
      <Team />
      {/* <Testimonials /> */}
      <CTA />
      <Map />
    </>
  );
};

export default Index;
