import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Ecosystem = () => {
  return (
    <Section className="ecosystem-container uk-margin-large-bottom gradient-bg-light">
      <Grid>
        <div className="uk-width-1-3 ecosystem-desc-container">
          <div className="ecosystem-desc">
            <h2>Comlogik Ecosystem</h2>
            <p>
              Comlogik’s ecosystem goes beyond just interoperability. It
              involves the connection between users, applications and the
              company, and how Comlogik treats its customers.
            </p>
          </div>
        </div>
        <div className="uk-width-expand">
          <div className="ecosystem">
            <div className="hims uk-box-shadow-large">
              <img src="static/hims.png" style={{ marginTop: '20px' }} />
            </div>

            <div className="rotate claimsassure">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-3.png" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate emr">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-4.png" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate paymanager">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-8.png" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate workforce">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-10.png" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate connect">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-6.png" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate anywheremed">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-9.jpg" width="150" />
                </div>
              </div>
            </div>

            <div className="rotate workbench">
              <div className="counter-rotate">
                <div className="logo-container uk-box-shadow-large">
                  <img src="static/product-5.png" width="150" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Section>
  );
};

export default Ecosystem;
