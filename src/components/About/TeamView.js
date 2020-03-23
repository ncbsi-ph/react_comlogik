import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class TeamView extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="1-1">
          <Column className="uk-flex uk-flex-column uk-flex-center">
            <h5 className="uk-text-center">WHO WE ARE</h5>
            <h1 className="uk-text-center">Meet our awesome team</h1>
            <p className="uk-text-center">
              Our team consists of the most dynamic, talented people in the
              industry. We have passion on what we do, and are highly
              competitive individual bonded by our goal to innovate.
            </p>
          </Column>
          <Column>
            <div className="uk-flex uk-flex-center" data-uk-switcher="animation: uk-animation-fade; toggle: > *">
              <button className="uk-button uk-button-primary" type="button">
                Management
              </button>
              <button className="uk-button uk-button-primary" type="button">
                Development
              </button>
              <button className="uk-button uk-button-primary" type="button">
                Implementation
              </button>
              <button className="uk-button uk-button-primary" type="button">
                Technical
              </button>
              <button className="uk-button uk-button-primary" type="button">
                Administration
              </button>
            </div>
            <ul className="uk-switcher uk-margin">
              <li>
                <Grid childWidth="1-4">
                  <Column>
                    <div
                      className="uk-inline-clip uk-transition-toggle"
                      tabIndex="0"
                    >
                      <img src="https://picsum.photos/300/250"></img>
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <h5 className="uk-margin-remove">Juan Dela Cruz</h5>
                        <p>Chief Executive Officer</p>
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <div
                      className="uk-inline-clip uk-transition-toggle"
                      tabIndex="0"
                    >
                      <img src="https://picsum.photos/300/250"></img>
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <h5 className="uk-margin-remove">Juan Dela Cruz</h5>
                        <p>Chief Executive Officer</p>
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <div
                      className="uk-inline-clip uk-transition-toggle"
                      tabIndex="0"
                    >
                      <img src="https://picsum.photos/300/250"></img>
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <h5 className="uk-margin-remove">Juan Dela Cruz</h5>
                        <p>Chief Executive Officer</p>
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <div
                      className="uk-inline-clip uk-transition-toggle"
                      tabIndex="0"
                    >
                      <img src="https://picsum.photos/300/250"></img>
                      <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                        <h5 className="uk-margin-remove">Juan Dela Cruz</h5>
                        <p>Chief Executive Officer</p>
                      </div>
                    </div>
                  </Column>
                </Grid>
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
              </li>
            </ul>
          </Column>
        </Grid>
      </Section>
    );
  }
}
