import React from 'react';

import CommonHeader from '../components/CommonHeader';
import Ecosystem from '../components/Solutions/Ecosystem';
import Showcase from '../components/Solutions/Showcase';
import CTA from '../components/CTA';

const Solutions = () => {
  return (
    <>
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
