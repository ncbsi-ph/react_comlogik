import React from 'react';
import { Helmet } from 'react-helmet';
import CommonHeader from '../components/CommonHeader';
import Ecosystem from '../components/Solutions/Ecosystem';
import Showcase from '../components/Solutions/Showcase';
import CTA from '../components/CTA';

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Comlogik Business Systems</title>
        <link rel="canonical" href="https://comlogikph.com/solutions" />

        <meta
          name="description"
          content="Discover Comlogik's innovative solutions designed to help businesses adapt to changing environments and stay ahead of the competition."
        />
        <meta
          name="keywords"
          content="Hospital Information System, HIS provider, healthcare IT solutions, hospital management software, patient care system, medical software, healthcare analytics, Comlogik, DOH Certified"
        />
        <meta
          property="og:title"
          content="Solutions - Comlogik Business Systems"
        />
        <meta
          property="og:description"
          content="Explore our suite of off-the-shelf products that address business challenges and foster growth in the healthcare industry."
        />
        <meta
          property="og:image"
          content="https://comlogikph.com/static/solutions-hero.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <CommonHeader
        image="static/solutions-hero.png"
        label="SOLUTIONS"
        heading="We know what you need, and we know what challenges you face."
        sentence="That’s why we’ve developed a set of commercial off-the-shelf products to help companies adapt to the changing business environment and stay a step ahead of the competition."
      />
      <Ecosystem />
      <Showcase />
      <CTA />
    </>
  );
};

export default Solutions;
