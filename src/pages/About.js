import React from 'react';
import { Helmet } from 'react-helmet';
import CommonHeader from '../components/CommonHeader';
import Statistics from '../components/About/Statistics';
import Values from '../components/About/Values';
import WorkProcess from '../components/About/WorkProcess';
import TeamView from '../components/About/TeamView';
import CareerCTA from '../components/About/CareerCTA';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Comlogik Business Systems</title>
        <link rel="canonical" href="https://comlogikph.com/about" />
        <meta
          name="description"
          content="Learn more about Comlogik Business Systems, a leading provider of healthcare solutions since 1999, dedicated to eliminating redundant processes and helping businesses grow."
        />
        <meta
          property="og:title"
          content="About Us - Comlogik Business Systems"
        />
        <meta
          property="og:description"
          content="Discover how Comlogik helps healthcare institutions streamline operations with powerful, affordable solutions."
        />
        <meta
          property="og:image"
          content="https://comlogikph.com/static/about-hero.gif"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <CommonHeader
        image="static/about-hero.gif"
        label="ABOUT US"
        heading="We are on a mission to help you solve your operational problems by delivering powerful healthcare solutions that's affordable."
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
