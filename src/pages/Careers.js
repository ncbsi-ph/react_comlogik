import React from 'react';

import { Section, Grid, Column } from '../components/Grid';
import CommonHeader from '../components/CommonHeader';
import Benefits from '../components/Careers/Benefits';
import WorkPhotos from '../components/Careers/WorkPhotos';
import Jobs from '../components/Careers/Jobs';
import CTA from '../components/CTA';

const Careers = () => {
  return (
    <>
      <CommonHeader
        image="static/news-hero.gif"
        label="CAREERS"
        heading="Build your career with us"
        sentence="Bonded by our mission and propelled by our innovative spirit, our work at Comlogik is collaborative, transformative, and above all, it’s meaningful. Our employees take pride in using technology and data-driven insights to inspire changes that will make the Philippine healthcare system better for everyone that may have an effect with your friends, family or even you."
      />
      <Benefits />
      <Section container={false}>
        <WorkPhotos />
      </Section>
      <Jobs />
      <CTA />
    </>
  );
};

export default Careers;
