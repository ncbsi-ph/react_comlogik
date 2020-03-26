import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class ContactInfo extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="1-2" className="uk-flex-middle">
          <Column>
            <Grid childWidth="1-1">
              <Column>
                <Grid childWidth="expand">
                  <Column width="auto">
                    <img
                      src="static/contact-1.svg"
                      className="uk-preserve"
                      data-uk-svg=""
                    ></img>
                  </Column>
                  <Column className="uk-flex uk-flex-column">
                    <h2 className="uk-margin-remove">Find us at</h2>
                    <ul className="uk-list">
                      <li>
                        <b>Comlogik Business Systems, Inc.</b>
                      </li>
                      <li>2/F F & L Centre 2211 Commonwealth Avenue</li>
                      <li>Brgy. Holy Spirit, Quezon City</li>
                      <li>Philippines 1127</li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
              <Column>
                <Grid childWidth="expand">
                  <Column width="auto">
                    <img
                      src="static/contact-2.svg"
                      className="uk-preserve"
                      data-uk-svg=""
                    ></img>
                  </Column>
                  <Column className="uk-flex uk-flex-column">
                    <h2 className="uk-margin-remove">Email us through</h2>
                    <ul className="uk-list">
                      <li>
                        <b>General comments and questions:</b>
                        <br></br>info@comlogik.com
                      </li>
                      <li>
                        <b>Technical support questions:</b> support@comlogik.com
                      </li>
                      <li>
                        <b>Sales inquiries:</b> sales@comlogik.com
                      </li>
                      <li>
                        <b>Request Network Partner Program information:</b>
                        <br></br>
                        partners@comlogik.com
                      </li>
                      <li>
                        <b>Website recommendations:</b> marketing@comlogik.com
                      </li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
          <Column>
            <Grid childWidth="1-1">
              <Column>
                <Grid childWidth="expand">
                  <Column width="auto">
                    <img
                      src="static/contact-3.svg"
                      className="uk-preserve"
                      data-uk-svg=""
                    ></img>
                  </Column>
                  <Column className="uk-flex uk-flex-column">
                    <h2 className="uk-margin-remove">Telephone numbers</h2>
                    <ul className="uk-list">
                      <li>(632) 932 9421</li>
                      <li>(632) 952 2589</li>
                      <li>(632) 364 0509</li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
              <Column>
                <Grid childWidth="expand">
                  <Column width="auto">
                    <img
                      src="static/contact-4.svg"
                      className="uk-preserve"
                      data-uk-svg=""
                    ></img>
                  </Column>
                  <Column className="uk-flex uk-flex-column">
                    <h2 className="uk-margin-remove">Fax</h2>
                    <ul className="uk-list">
                      <li>(632) 431 5699</li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
              <Column>
                <Grid childWidth="expand">
                  <Column width="auto">
                    <img
                      src="static/contact-5.svg"
                      className="uk-preserve"
                      data-uk-svg=""
                    ></img>
                  </Column>
                  <Column className="uk-flex uk-flex-column">
                    <h2 className="uk-margin-remove">Mobile numbers</h2>
                    <ul className="uk-list">
                      <li>
                        <b>SMS System Support Hotline:</b> (0965) 489 6050
                      </li>
                      <li>
                        <b>SMS Implementation Support Hotline:</b> (0965) 489
                        6042
                      </li>
                      <li>
                        <b>SMS Technical Support Hotline:</b> (0965) 489 6049
                      </li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Section>
    );
  }
}
