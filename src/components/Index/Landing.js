import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Landing = () => {
  return (
    <Section>
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <img className="logo-bg" src="static/logo-bg.svg" />
              <img className="landing-bg" src="static/landing-bg.svg" />
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
                  <Link
                    to="/contact-us"
                    className="uk-button uk-button-danger uk-margin-remove-right"
                  >
                    Request a demo
                  </Link>
                </Column>
                <Column>
                  <Link to="/solutions" className="uk-button uk-button-default">
                    Comlogik Ecosystem
                  </Link>
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
