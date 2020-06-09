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
          <Grid childWidth="1-1" className="uk-margin-small-top">
            <Column>
              <div data-uk-slider="autoplay: true; autoplay-interval: 2000; pause-on-hover: true">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light">
                  <li className="uk-transition-toggle" tabIndex="0">
                    <div className="uk-height-1-1 uk-width-1-1" tabIndex="0">
                      <img src="static/activities/travel.jpg" alt="travel" />
                      <div
                        className="uk-position-small uk-position-bottom-right uk-panel"
                        data-uk-scrollspy="cls: uk-animation-fade; repeat: true"
                      >
                        <div className="uk-transition-fade uk-overlay uk-overlay-primary">
                          <span className="text-white uk-text-bold">
                            Travel
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="uk-transition-toggle" tabIndex="1">
                    <div className="uk-height-1-1 uk-width-1-1" tabIndex="0">
                      <img
                        src="static/activities/teambuilding.jpg"
                        alt="teambuilding"
                      />
                      <div
                        className="uk-position-small uk-position-bottom-right uk-panel"
                        data-uk-scrollspy="cls: uk-animation-fade; repeat: true"
                      >
                        <div className="uk-transition-fade uk-overlay uk-overlay-primary">
                          <span className="text-white uk-text-bold">
                            Team Building
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="uk-transition-toggle" tabIndex="2">
                    <div className="uk-height-1-1 uk-width-1-1" tabIndex="0">
                      <img
                        src="static/activities/celebration.jpg"
                        alt="celebration"
                      />
                      <div
                        className="uk-position-small uk-position-bottom-right uk-panel"
                        data-uk-scrollspy="cls: uk-animation-fade; repeat: true"
                      >
                        <div className="uk-transition-fade uk-overlay uk-overlay-primary">
                          <span className="text-white uk-text-bold">
                            Celebration
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="uk-transition-toggle" tabIndex="3">
                    <div className="uk-height-1-1 uk-width-1-1" tabIndex="0">
                      <img src="static/activities/play.jpg" alt="play" />
                      <div
                        className="uk-position-small uk-position-bottom-right uk-panel"
                        data-uk-scrollspy="cls: uk-animation-fade; repeat: true"
                      >
                        <div className="uk-transition-fade uk-overlay uk-overlay-primary">
                          <span className="text-white uk-text-bold">Play</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="uk-transition-toggle" tabIndex="4">
                    <div className="uk-height-1-1 uk-width-1-1" tabIndex="0">
                      <img src="static/activities/work.jpg" alt="work" />
                      <div
                        className="uk-position-small uk-position-bottom-right uk-panel"
                        data-uk-scrollspy="cls: uk-animation-fade; repeat: true"
                      >
                        <div className="uk-transition-fade uk-overlay uk-overlay-primary">
                          <span className="text-white uk-text-bold">Work</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default TeamView;
