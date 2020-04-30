import React from 'react';
import CountUp from 'react-countup';

import { Section, Grid, Column } from '../Grid';

const Stat = (props) => {
  return (
    <Column>
      <Grid
        childWidth="1-1"
        className="uk-grid-small uk-flex-column uk-text-center"
      >
        <Column>
          <img className="uk-preserve" src={props.image} data-uk-svg=""></img>
        </Column>
        <Column>
          <h2 className="uk-text-center text-bold text-primary">
            <CountUp
              end={props.count}
              duration={5}
              suffix={props.suffix !== null ? props.suffix : null}
            />
          </h2>
        </Column>
        <Column>
          <h5 className="uk-text-center text-primary">{props.caption}</h5>
        </Column>
      </Grid>
    </Column>
  );
};

const Statistics = () => {
  return (
    <Section className="gray-bg">
      <Grid childWidth="1-2 expand@m">
        <Stat
          image="static/stat-1.svg"
          count={200}
          suffix="+"
          caption="PARTNER HOSPITALS & CLINICS"
        />
        <Stat
          image="static/stat-2.svg"
          count={20}
          suffix="+"
          caption="SUCCESSFUL YEARS IN THE INDUSTRY"
        />
        <Stat
          image="static/stat-3.svg"
          count={5000}
          suffix="+"
          caption="DOCTORS TRUST OUR SERVICES"
        />
        <Stat
          image="static/stat-4.svg"
          count={20}
          suffix="+"
          caption="AWARDS & RECOGNITIONS RECEIVED"
        />
      </Grid>
    </Section>
  );
};

export default Statistics;
