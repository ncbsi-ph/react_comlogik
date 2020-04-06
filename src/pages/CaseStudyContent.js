import React from 'react';

import { Section, Grid, Column } from '../components/Grid';
import CTA from '../components/CTA';

const CaseStudyContent = () => {
  return (
    <>
      <Section>
        <Grid childWidth="1-1">
          <Column>
            <Grid childWidth="1-1 expand@l">
              <Column width="2-3@l" className="uk-flex uk-flex-column">
                <h5>CLIENT</h5>
                <h1 className="uk-margin-remove">Nazareth General Hospital</h1>
                <span className="uk-text-lead uk-margin-top">
                  Nazareth General Hospital increases income with Comlogik’s
                  just-in-time inventory and quality reporting solution
                </span>
                <h6>The challenge</h6>
                <p className="uk-margin-remove">
                  Due to increasing medicines and supplies cost, managing and
                  securing the hospitals stock and central inventory is a major
                  concern of the hospital. Nazareth General Hospital (NGH) has
                  always relied on people who have been with them through the
                  years and considers almost everybody as trustworthy and can be
                  counted on when integrity is an issue. Though this may be hard
                  to appreciate sometimes, few hospital owners still believes in
                  this perception. Trust will be always a debate but in some
                  cases, but failure in inventory management also falls on the
                  software being used as well. What NGH needed is a system that
                  has a solid security along with the facility to manage and
                  produce an accurate inventory then generate the necessary
                  reports needed by the hospital.
                </p>
                <h6>The solution</h6>
                <p className="uk-margin-remove">
                  After deliberating and taking time to see all existing
                  providers who can meet the needs and expectations of the
                  hospital, NGH decided to purchase Comlogik’s Healthcare Suite
                  in order to address its unique requirements. The complete HIMS
                  package provided all the necessary modules essential in
                  running their hospital and more. The Inventory Management
                  System afforded everything the department needed with features
                  like Canvas Manager™, Reagents & Supplies Tracker,
                  Multi-warehousing capabilities, Barcode capability, Expiry &
                  Reorder Alerts and a lot more. Also, all transactions are
                  seamlessly integrated and linked in the Comlogik’s Financials™
                  (Accounting System) in real-time.
                </p>
              </Column>
              <Column>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-body uk-flex-column">
                    <div className="uk-text-center">
                      <img src="static/logos/Nazareth-General-Hospital.png"></img>
                    </div>
                    <h5>The client</h5>
                    <p>
                      Nazareth General Hospital has been providing quality
                      health care in Dagupan City and the region for more than
                      50 years. Since its inception in 1959 asa two-bedlying in
                      facility along Arellano street, the hospital is now based
                      at Perez boulevard and has dramatically transformed from a
                      facility with just two (2) physicians and three (3)
                      employees to a comprehensive health care leader in the
                      region with over 150 employees and 250 physicians.
                    </p>
                    <div>
                      <a className="uk-button uk-button-primary">
                        View website
                      </a>
                    </div>
                  </div>
                </div>
              </Column>
            </Grid>
          </Column>
          <Column>
            <div className="uk-card uk-card-body uk-card-primary uk-flex-column">
              <h4 style={{ color: 'white' }}>The result</h4>
              <p>
                Currently, NGH is undergoing a major upgrade in facilities and
                new buildings are being built to accommodate more patients and
                house additional services that will be offered soon. This turn
                of events has been brought about by the success of the hospital
                in terms of higher patients satisfaction, less waiting time,
                eliminated errors in billing resulting to increased revenue, and
                that would be theft are now deterred in committing crimes since
                everything is now automated.
              </p>
              <div data-uk-slider="">
                <ul
                  className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m"
                  data-uk-grid=""
                >
                  <li>
                    <img src="https://picsum.photos/400"></img>
                  </li>
                  <li>
                    <img src="https://picsum.photos/400"></img>
                  </li>
                  <li>
                    <img src="https://picsum.photos/400"></img>
                  </li>
                </ul>
              </div>
            </div>
          </Column>
        </Grid>
      </Section>
      <CTA></CTA>
    </>
  );
};

export default CaseStudyContent;
