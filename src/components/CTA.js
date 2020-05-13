import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from './Grid';

const CTA = () => {
  return (
    <Section className="gradient-bg-dark">
      <Grid childWidth="1-1" className="uk-grid-medium uk-text-center">
        <Column>
          <h1 className="uk-margin-remove" style={{ color: 'white' }}>
            Let's grab a coffee together
          </h1>
        </Column>
        <Column>
          <p style={{ color: 'white' }}>
            Whether you’re tired of looking for the right experts for the job or
            simply wanting to know more about our company and how we are helping
            companies like you grow.
          </p>
        </Column>
        <Column>
          <Grid childWidth="auto" className="uk-grid-small uk-flex-center">
            <Column>
              <Link to="/contact-us" className="uk-button uk-button-default">
                Request for a demo
              </Link>
            </Column>
            <Column>
              <Link
                to="/contact-us"
                className="uk-button uk-button-default uk-button-default-outline"
              >
                Contact us
              </Link>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default CTA;
