import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <h1 className="uk-margin-remove">Beyond Just Information</h1>
            </Column>
            <Column>
              <p>
                Comlogik is the single source solution provider to all your
                healthcare information technology needs.
              </p>
            </Column>
            <Column>
              <Grid childWidth="auto" className="uk-grid-small">
                <Column>
                  <button className="uk-button uk-button-primary">
                    Request a demo
                  </button>
                </Column>
                <Column>
                  <button className="uk-button uk-button-default">
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
