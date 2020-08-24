import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
import { Section, Grid, Column } from '../Grid';

const text = ['Request a demo', 'Request a brochure', 'Request a quote'];

const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => setIndex((index) => index + 1), 3000);
  }, []);

  return (
    <Section>
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <img
                src="static/logo-bg.svg"
                style={{
                  position: 'absolute',
                  zIndex: -2,
                  top: '-1rem',
                  left: 0,
                }}
              />
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
                    className="uk-button uk-button-secondary"
                    style={{ minWidth: '225px' }}
                  >
                    <TextTransition
                      text={text[index % text.length]}
                      springConfig={presets.gentle}
                    />
                  </Link>
                </Column>
                <Column>
                  <Link
                    to="/solutions"
                    className="uk-button uk-button-secondary uk-button-secondary-outline"
                  >
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
