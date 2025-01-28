import React from 'react';
import Landing from '../components/Index/Landing';
import Clients from '../components/Index/Clients';
import Advantages from '../components/Index/Advantages';
import Products from '../components/Index/Products';
import Team from '../components/Index/Team';
import CTA from '../components/CTA';
import Map from '../components/Map';
import CovidSystems from '../components/Index/CovidSystems';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Comlogik Business Systems - The leading healthcare system provider in
          the Philippines
        </title>
        <link rel="canonical" href="https://comlogikph.com/" />
        <meta
          name="description"
          content="Comlogik is the single source solution provider to all your healthcare information technology needs."
        />
        <meta
          property="og:title"
          content="Comlogik Business Systems - The leading healthcare system provider in the Philippines"
        />
        <meta
          property="og:description"
          content="Since 1999, Comlogik has been existing with the primary goal of helping healthcare institutions and other medical businesses eliminate redundant processes that are costly and time consuming. To do away with outdated practices and adopt the best processes applied by successful healthcare companies and focus on what is crucial - managing and growing your business."
        />
        <meta property="og:image" content="/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
