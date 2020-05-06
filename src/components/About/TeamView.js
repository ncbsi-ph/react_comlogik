import React from 'react';
import PropTypes from 'prop-types';

import { Section, Grid, Column } from '../Grid';

const TeamView = () => {
  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column uk-text-center">
          <h5 className="meta uk-margin-remove-bottom">WHO WE ARE</h5>
          <h1 className="margin-top-30">Meet our awesome team</h1>
          <p>
            Our team consists of the most dynamic, talented people in the
            industry. We have passion on what we do, and are highly competitive
            individual bonded by our goal to innovate. But, we also know how to
            have fun, and it has been a part of culture from day one.
          </p>
        </Column>
        <Column>
          <Grid childWidth="1-4" className="uk-margin-small-top">
            <Column>
              <div style={{ height: 200 }}>
                <div
                  className="uk-inline-clip uk-transition-toggle uk-height-1-1 uk-width-1-1"
                  tabIndex="0"
                  style={{ objectFit: 'cover' }}
                >
                  <img
                    src="static/activities/travel.jpg"
                    className="uk-height-1-1 uk-width-1-1"
                  />
                  <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                    <h5 className="uk-margin-remove text-white">Travel</h5>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div style={{ height: 200 }}>
                <div
                  className="uk-inline-clip uk-transition-toggle uk-height-1-1 uk-width-1-1"
                  tabIndex="0"
                  style={{ objectFit: 'cover' }}
                >
                  <img
                    src="static/activities/teambuilding.jpg"
                    className="uk-height-1-1 uk-width-1-1"
                  />
                  <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                    <h5 className="uk-margin-remove text-white">
                      Teambuilding
                    </h5>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div style={{ height: 200 }}>
                <div
                  className="uk-inline-clip uk-transition-toggle uk-height-1-1 uk-width-1-1"
                  tabIndex="0"
                  style={{ objectFit: 'cover' }}
                >
                  <img
                    src="static/activities/celebration.jpg"
                    className="uk-height-1-1 uk-width-1-1"
                  />
                  <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                    <h5 className="uk-margin-remove text-white">Celebration</h5>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div style={{ height: 200 }}>
                <div
                  className="uk-inline-clip uk-transition-toggle uk-height-1-1 uk-width-1-1"
                  tabIndex="0"
                  style={{ objectFit: 'cover' }}
                >
                  <img
                    src="static/activities/play.jpg"
                    className="uk-height-1-1 uk-width-1-1"
                  />
                  <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                    <h5 className="uk-margin-remove text-white">Play</h5>
                  </div>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default TeamView;
