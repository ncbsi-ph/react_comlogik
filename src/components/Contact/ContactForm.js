import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class ContactForm extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="1-1 1-2@m">
          <Column>
            <img src="static/contact-hero.gif"></img>
          </Column>
          <Column>
            <Grid childWidth="1-1">
              <Column className="uk-flex uk-flex-column">
                <h5>CONTACT US</h5>
                <h1 className="uk-margin-remove-top">
                  For more questions about our products and pricing, send us a
                  message
                </h1>
              </Column>
              <Column>
                <Grid childWidth="1-1">
                  <Column>
                    <Column
                      className="uk-padding"
                      style={{ backgroundColor: '#F1F5F9' }}
                    >
                      <Grid childWidth="1-1">
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="fullName"
                              >
                                Full name
                              </label>
                            </Column>
                            <Column>
                              <input
                                type="text"
                                id="fullName"
                                className="uk-input"
                                autoComplete="off"
                              ></input>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label className="uk-form-label" htmlFor="email">
                                Email address
                              </label>
                            </Column>
                            <Column>
                              <input
                                type="email"
                                id="email"
                                className="uk-input"
                                autoComplete="off"
                                required
                              ></input>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="contactNumber"
                              >
                                Contact number
                              </label>
                            </Column>
                            <Column>
                              <input
                                className="uk-input"
                                type="text"
                                id="contactNumber"
                                autoComplete="off"
                                required
                              ></input>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="company"
                              >
                                Company
                              </label>
                            </Column>
                            <Column>
                              <input
                                className="uk-input"
                                type="text"
                                id="company"
                                autoComplete="off"
                                required
                              ></input>
                            </Column>
                          </Grid>
                        </Column>
                        <Column>
                          <Grid childWidth="expand" className="uk-flex-middle">
                            <Column width="1-4">
                              <label
                                className="uk-form-label"
                                htmlFor="message"
                              >
                                Message
                              </label>
                            </Column>
                            <Column>
                              <textarea
                                className="uk-textarea"
                                id="message"
                                rows="4"
                                required
                              ></textarea>
                            </Column>
                          </Grid>
                        </Column>
                        <Column className="uk-text-right">
                          <button className="uk-button uk-button-primary">
                            Send message
                          </button>
                        </Column>
                      </Grid>
                    </Column>
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
