import React, { Component } from 'react';

import { Section } from '../components/Grid';
import CommonHeader from '../components/CommonHeader';
import LogoCarousel from '../components/Clients/LogoCarousel';
import CaseStudies from '../components/Clients/CaseStudies';
import Partners from '../components/Clients/Partners';
import CTA from '../components/CTA';

const Clients = () => {
  const logos_1 = [
    'Adventist-Medical-Center-Iligan.png',
    'Alabang-Medical-Center.jpg',
    'Alaminos-Doctors-Hospital.png',
    'Angeles-Medical-Center.jpg',
    'ASCCOM-Medical-Center.png',
    'Baguio-Medical-Center.jpg',
    'Bataan-Doctors-General-Hospital.jpg',
    'Bicol-Access-Health-Centrum.jpg',
    'Binakayan-Doctors-Hospital.jpg',
    'blessed-family-doctors-hospital.jpg'
  ];
  const logos_2 = [
    'Daet-Doctors-Hospital.png',
    'Dagupan-Doctors-Villaflor-Memorial-Medical-Center.png',
    'Divine-Word-Hospital.jpg',
    'Dr-Amando-Garcia-Medical-Center.jpg',
    'Dr-Yangas-Hospital.png',
    'Floridablanca-Doctors-Hospital.jpg',
    'Heramil-General-Hospital.jpg',
    'Iligan-Medical-Center.jpg',
    'Infant-Jesus-Medical-Center.png',
    'Jecsons-Medical-Center.jpg'
  ];
  const logos_3 = [
    'La-Union-Medical-Diagnostic-Hospital.png',
    'Lopez-St-Jude-Hospital.png',
    'medical-center-of-taguig.png',
    'Medicus-Medical-Center.png',
    'Mercy-Community-Hospital.jpg',
    'Metro-Antipolo-Hospital-Medical-Center.png',
    'Metro-Lemery-Medical-Center.png',
    'Meycauayan-Doctors-Hospital.png',
    'MMG-Palawan.png',
    'MMG-Tagum.png'
  ];

  return (
    <>
      <CommonHeader
        svg={true}
        image="static/clients.svg"
        label="CLIENTS"
        heading="Placeholder client heading"
        sentence="Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi, euismod et eleifend eu, scelerisque ac velit. Sed placerat imperdiet elementum. Cras blandit nulla magna, sed malesuada ante laoreet sit amet. Maecenas non blandit justo. Donec velit ante, varius id libero sit amet, dictum tempor risus."
      ></CommonHeader>
      <Section removePadding="horizontal" container={false}>
        <LogoCarousel
          logos={logos_1.map(logo => `static/logos/${logo}`)}
        ></LogoCarousel>
        <LogoCarousel
          logos={logos_2.map(logo => `static/logos/${logo}`)}
        ></LogoCarousel>
        <LogoCarousel
          logos={logos_3.map(logo => `static/logos/${logo}`)}
        ></LogoCarousel>
      </Section>
      <CaseStudies></CaseStudies>
      <Partners></Partners>
      <CTA></CTA>
    </>
  );
};

export default Clients;
