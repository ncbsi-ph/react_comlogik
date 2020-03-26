import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Showcase = () => {
  return (
    <Section>
      <Grid childWidth="1-2">
        <div data-uk-height-viewport="">
          <div data-uk-sticky="offset: 20vh; bottom: true">
            <h3>Our Products</h3>
            <ul
              className="uk-nav uk-nav-primary products-nav"
              data-uk-scrollspy-nav="closest: li; scroll: true"
            >
              <li>
                <a href="#p1">Comlogik EMR</a>
              </li>
              <li>
                <a href="#p2">ClaimsAssure</a>
              </li>
              <li>
                <a href="#p3">Hospital Information Management System</a>
              </li>
              <li>
                <a href="#p4">Clinic Management System</a>
              </li>
              <li>
                <a href="#p5">Hotel Management System</a>
              </li>
              <li>
                <a href="#p6">Booking Web System</a>
              </li>
            </ul>
          </div>
        </div>
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p1"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p2"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p3"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p4"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p5"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </Column>
            <Column>
              <div
                className="uk-flex uk-flex-middle uk-flex-center"
                id="p6"
                data-uk-height-viewport=""
              >
                <div
                  className="uk-child-width-auto uk-flex-right uk-grid-row-small"
                  data-uk-grid=""
                  data-uk-parallax="opacity: 0, 1; viewport: 0.5"
                >
                  <div>
                    <img src="https://via.placeholder.com/175"></img>
                  </div>
                  <div>
                    <p className="uk-margin-large-left uk-text-right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div>
                    <a className="uk-button uk-button-primary uk-margin-top">
                      Learn more
                    </a>
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

export default Showcase;
