import React, { Component } from 'react';

import CommonHeader from '../components/CommonHeader';
import Statistics from '../components/About/Statistics';
import Values from '../components/About/Values';
import WorkProcess from '../components/About/WorkProcess';
import TeamView from '../components/About/TeamView';
import CareerCTA from '../components/About/CareerCTA';

export default class About extends Component {
  render() {
    return (
      <>
        <CommonHeader
          image="static/about-hero.gif"
          label="ABOUT US"
          heading="We are one of the leading hospital systems provider in the Philippines"
          sentence="Comlogik Business Systems, Inc. is a Philippine based software development company that established its operation in the year 1999, with a vision to be a Global Technology Company.
      Comlogik led the way in developing innovative applications like online hospital services wherein patients can access their billing as well as the examination results, while your Administrators can access their reports and your Doctors their patient's records anywhere and anytime they need to."
        ></CommonHeader>
        <Statistics></Statistics>
        <Values></Values>
        <WorkProcess></WorkProcess>
        <TeamView></TeamView>
        <CareerCTA></CareerCTA>
      </>
    );
  }
}
