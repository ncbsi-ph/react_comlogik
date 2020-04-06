import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <Grid childWidth="1-1">
            <Column>
            <img className="logo-bg" src="static/logo-bg.svg" />
            <img className="landing-bg-1" src="static/landing-bg-1.svg" />
              <h1>Beyond Just Information</h1>
            </Column>
            <Column>
              <p className="sub-header">
                Comlogik is the single source solution provider to all your
                healthcare information technology needs.
              </p>
            </Column>
            <Column>
              <Grid childWidth="auto" className="uk-grid-small">
                <Column>
                  <button className="uk-button secondary-button uk-margin-right">
                    Request a demo
                  </button>
                </Column>
                <Column>
                  <button className="uk-button secondary-outline">
                    Comlogik Ecosystem
                  </button>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Column>
        <Column>
          <img data-src="static/landing-img.gif" data-uk-img=""></img>
        </Column>
      </Grid>
    </Section>
  );
};

export default Landing;
