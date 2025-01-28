import React from 'react';
import { Helmet } from 'react-helmet';
import { Section } from '../components/Grid';
import CommonHeader from '../components/CommonHeader';
import Benefits from '../components/Careers/Benefits';
import WorkPhotos from '../components/Careers/WorkPhotos';
import Jobs from '../components/Careers/Jobs';
import CTA from '../components/CTA';

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team at Comlogik</title>
        <link rel="canonical" href="https://comlogikph.com/careers" />
        <meta
          name="description"
          content="Explore exciting career opportunities at Comlogik and be part of a team transforming the Philippine healthcare system through innovation and collaboration."
        />
        <meta
          property="og:title"
          content="Careers - Join Our Team at Comlogik"
        />
        <meta
          property="og:description"
          content="Join Comlogik and contribute to making the Philippine healthcare system better for everyone. Discover career opportunities with us."
        />
        <meta
          property="og:image"
          content="https://comlogikph.com/static/careers.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <CommonHeader
        image="static/careers.png"
        label="CAREERS"
        heading="Build your career with us"
        sentence="Bonded by our mission and propelled by our innovative spirit, our work at Comlogik is collaborative, transformative, and above all, it’s meaningful. Our employees take pride in using technology and data-driven insights to inspire changes that will make the Philippine healthcare system better for everyone that may have an effect with your friends, family or even you."
      />
      <Jobs />
      <Benefits />
      <Section container={false} className="py-0">
        <WorkPhotos />
      </Section>
      <CTA />
    </>
  );
};

export default Careers;
