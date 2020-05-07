import React from 'react';

import { Section, Grid, Column } from './Grid';

const CTA = () => {
  return (
    <Section className="gradient-bg-dark">
      <Grid childWidth="1-1" className="uk-grid-medium uk-text-center">
        <Column>
          <h1 className="uk-margin-remove text-white">
            Let's grab a coffee together
          </h1>
        </Column>
        <Column>
          <p className="text-white">
            Whether you’re tired of looking for the right experts for the job or
            simply wanting to know more about our company and how we are helping
            companies like you grow.
          </p>
        </Column>
        <Column>
          <Grid childWidth="auto" className="uk-grid-small uk-flex-center">
            <Column>
              <button className="uk-button uk-button-primary white-button">
                Request for a demo
              </button>
            </Column>
            <Column>
              <button className="uk-button white-outline">
                Contact us
              </button>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default CTA;
