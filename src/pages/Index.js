import React from 'react';

import Landing from '../components/Index/Landing';
import Clients from '../components/Index/Clients';
import Advantages from '../components/Index/Advantages';
import Products from '../components/Index/Products';
import Team from '../components/Index/Team';
import Testimonials from '../components/Index/Testimonials';
import CTA from '../components/CTA';
import Map from '../components/Map';

const Index = () => {
  return (
    <>
      <Landing />
      <Clients />
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
