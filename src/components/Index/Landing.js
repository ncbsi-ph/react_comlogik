import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="expand" className="uk-flex-middle">
        <Column width="1-2" className="uk-flex uk-flex-column">
          <h1 className="uk-margin-remove">Beyond Just Information</h1>
          <p>
            Comlogik is the single source solution provider to all your
            healthcare information technology needs.
          </p>
          <div>
            <button className="uk-button uk-button-primary uk-margin-right">
              Request a demo
            </button>
            <button className="uk-button uk-button-default">
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
