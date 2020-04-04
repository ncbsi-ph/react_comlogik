import React from 'react';

import CommonHeader from '../components/CommonHeader';
import Statistics from '../components/About/Statistics';
import Values from '../components/About/Values';
import WorkProcess from '../components/About/WorkProcess';
import TeamView from '../components/About/TeamView';
import CareerCTA from '../components/About/CareerCTA';

const About = () => {
  return (
    <>
      <CommonHeader
        image="static/about-hero.gif"
        label="ABOUT US"
        heading="We are one of the leading hospital systems provider in the Philippines"
        sentence="Comlogik Business Systems, Inc. is a Philippine based software development company that established its operation in the year 1999, with a vision to be a Global Technology Company.
      Comlogik led the way in developing innovative applications like online hospital services wherein patients can access their billing as well as the examination results, while your Administrators can access their reports and your Doctors their patient's records anywhere and anytime they need to."
      />
      <Statistics />
      <Values />
      <WorkProcess />
      <TeamView />
      <CareerCTA />
    </>
  );
};

export default About;
