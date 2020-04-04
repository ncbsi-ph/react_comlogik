import React from 'react';

import { Section, Grid, Column } from './Grid';

const CTA = () => {
  return (
    <Section>
      <Grid childWidth="1-1" className="uk-grid-medium uk-text-center">
        <Column>
          <h1 className="uk-margin-remove">Let's grab a coffee together</h1>
        </Column>
        <Column>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            congue nunc ac odio pulvinar, at varius nisl blandit.
          </p>
        </Column>
        <Column>
          <Grid childWidth="auto" className="uk-grid-small uk-flex-center">
            <Column>
              <button className="uk-button uk-button-primary">
                Request for a demo
              </button>
            </Column>
            <Column>
              <button className="uk-button uk-button-default">
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
