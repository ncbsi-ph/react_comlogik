import React from 'react';

import { Section, Grid, Column } from './Grid';

const CTA = () => {
  return (
    <Section className="gradient-bg-dark">
      <Grid childWidth="1-1" className="uk-grid-medium uk-text-center">
        <Column>
          <h1 className="uk-margin-remove text-white">Let's grab a coffee together</h1>
        </Column>
        <Column>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            congue nunc ac odio pulvinar, at varius nisl blandit.
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
                Send an inquiry
              </button>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default CTA;
