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
        heading="We are on a mission to help your solve your operational problems by delivering powerful healthcare solution that is afforable"
        sentence="Since 1999, Comlogik has been existing with the primary goal of helping healthcare institutions and other medical businesses eliminate redundant processes that are costly and time consuming. To do away with outdated practices and adopt the best processes applied by successful healthcare companies and focus on what is crucial - managing and growing your business."
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
