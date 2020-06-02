import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class ContactInfo extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
          <Column>
            <Grid childWidth="1-1" className="uk-grid-large">
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
                    <span className="uk-margin-top">
                      <b>Comlogik Business Systems, Inc.</b>
                      <br></br>2/F F & L Centre 2211 Commonwealth Avenue
                      <br></br>Brgy. Holy Spirit, Quezon City<br></br>
                      Philippines 1127
                    </span>
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
                        <br></br>
                        <a
                          className="link-pink"
                          href="mailto:info@comlogik.com"
                        >
                          info@comlogik.com
                        </a>
                      </li>
                      <li>
                        <b>Technical support questions:</b>
                        <br></br>
                        <a
                          className="link-pink"
                          href="mailto:support@comlogik.com"
                        >
                          support@comlogik.com
                        </a>
                      </li>
                      <li>
                        <b>Sales inquiries:</b>
                        <br></br>
                        <a
                          className="link-pink"
                          href="mailto:sales@comlogik.com"
                        >
                          sales@comlogik.com
                        </a>
                      </li>
                      <li>
                        <b>Request Network Partner Program information:</b>
                        <br></br>
                        <a
                          className="link-pink"
                          href="mailto:partners@comlogik.com"
                        >
                          partners@comlogik.com
                        </a>
                      </li>
                      <li>
                        <b>Website recommendations:</b>
                        <br></br>
                        <a
                          className="link-pink"
                          href="mailto:marketing@comlogik.com"
                        >
                          marketing@comlogik.com
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Grid>
              </Column>
            </Grid>
          </Column>
          <Column>
            <Grid childWidth="1-1" className="uk-grid-large">
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
                      <li>
                        <a href="tel:89329421" className="link-pink">
                          (632) 8932-9421
                        </a>
                      </li>
                      <li>
                        <a href="tel:89522589" className="link-pink">
                          (632) 8952-2589
                        </a>
                      </li>
                      <li>
                        <a href="tel:83640509" className="link-pink">
                          (632) 8364-0509
                        </a>
                      </li>
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
                      <li>
                        <a href="fax:84315699" className="link-pink">
                          (632) 8431-5699
                        </a>
                      </li>
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
                        <b>SMS System Support Hotline:</b>{' '}
                        <a href="tel:+639654896050" className="link-pink">
                          (0965) 489 6050
                        </a>
                      </li>
                      <li>
                        <b>SMS Implementation Support Hotline:</b>{' '}
                        <a href="tel:+639654896042" className="link-pink">
                          (0965) 489 6042
                        </a>
                      </li>
                      <li>
                        <b>SMS Technical Support Hotline:</b>{' '}
                        <a href="tel:+639654896049" className="link-pink">
                          (0965) 489 6049
                        </a>
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
