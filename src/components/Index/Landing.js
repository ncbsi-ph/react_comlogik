import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="expand" className="uk-flex-middle">
        <Column width="1-2" className="uk-flex uk-flex-column">
          <img className="logo-bg" src="static/logo-bg.svg" />
          <img className="landing-bg-1" src="static/landing-bg-1.svg" />
          <h1>Beyond Just Information</h1>
          <p className="sub-header">
            Comlogik is the single source solution provider to all your
            healthcare information technology needs.
          </p>
          <div>
            <button className="uk-button secondary-button uk-margin-right">
              Request a demo
            </button>
            <button className="uk-button secondary-outline">
              Comlogik Ecosystem
            </button>
          </div>
        </Column>
        <Column>
          <img data-src="static/landing-img.gif" data-uk-img=""></img>
        </Column>
      </Grid>
    </Section>
  );
};

export default Landing;
