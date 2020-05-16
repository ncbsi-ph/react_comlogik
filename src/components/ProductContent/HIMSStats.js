import React from 'react';
import CountUp from 'react-countup';

import { Section, Grid, Column } from '../Grid';

const HIMSStats = () => {
  return (
    <Section className="uk-section-small">
      <Grid
        childWidth="1-1 1-3@m"
        className="uk-flex-middle uk-grid-column-collapse"
      >
        <Column className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
          <div
            className="uk-background-primary uk-text-center uk-flex uk-flex-column uk-flex-middle uk-flex-center"
            style={{ width: 150, height: 150, borderRadius: '100%' }}
          >
            <div>
              <h1 className="uk-margin-remove" style={{ color: 'white' }}>
                <CountUp end={5} duration={5} />
              </h1>
              <span style={{ color: 'white' }}>seconds</span>
            </div>
          </div>
          <div className="uk-margin-top">to admit a new patient</div>
        </Column>
        <Column className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
          <div
            className="uk-background-primary uk-text-center uk-flex uk-flex-column uk-flex-middle uk-flex-center"
            style={{ width: 150, height: 150, borderRadius: '100%' }}
          >
            <div>
              <h1 className="uk-margin-remove" style={{ color: 'white' }}>
                <CountUp end={20} duration={5} />
              </h1>
              <span style={{ color: 'white' }}>seconds</span>
            </div>
          </div>
          <div className="uk-margin-top">to register a new patient</div>
        </Column>
        <Column className="uk-flex uk-flex-center uk-flex-middle uk-flex-column">
          <div
            className="uk-background-primary uk-text-center uk-flex uk-flex-column uk-flex-middle uk-flex-center"
            style={{ width: 150, height: 150, borderRadius: '100%' }}
          >
            <div>
              <h1 className="uk-margin-remove" style={{ color: 'white' }}>
                <CountUp end={10} duration={5} />
              </h1>
              <span style={{ color: 'white' }}>minutes</span>
            </div>
          </div>
          <div className="uk-margin-top">to train a new user</div>
        </Column>
      </Grid>
    </Section>
  );
};

export default HIMSStats;
