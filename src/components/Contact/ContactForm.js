import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class ContactForm extends Component {
  render() {
    return (
      <Section>
        <Grid childWidth="expand">
          <Column width="1-2">
            <img src="static/contact-hero.gif"></img>
          </Column>
          <Column>
            <Grid childWidth="1-1">
              <div>
                <div
                  className="uk-child-width-expand"
                  data-uk-grid=""
                >
                  <div className="uk-width-1-4 uk-text-right">
                    <label className="uk-form-label" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="uk-flex-middle uk-child-width-expand"
                  data-uk-grid=""
                >
                  <div className="uk-width-1-4 uk-text-right">
                    <label className="uk-form-label" htmlFor="email">
                      Email address
                    </label>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="uk-flex-middle uk-child-width-expand"
                  data-uk-grid=""
                >
                  <div className="uk-width-1-4 uk-text-right">
                    <label className="uk-form-label" htmlFor="phone">
                      Contact no.
                    </label>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="uk-flex-middle uk-child-width-expand"
                  data-uk-grid=""
                >
                  <div className="uk-width-1-4 uk-text-right">
                    <label className="uk-form-label" htmlFor="subject">
                      Subject
                    </label>
                  </div>
                  <div>
                    <select
                      id="subject"
                      name="subject"
                      className="uk-select"
                      required
                    >
                      <option value="" selected disabled hidden>
                        Select a subject
                      </option>
                      <option value="inquiry">Inquiry</option>
                      <option value="request for a demo">
                        Request for a demo
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-child-width-expand" data-uk-grid="">
                  <div className="uk-width-1-4 uk-text-right">
                    <label className="uk-form-label" htmlFor="message">
                      Message
                    </label>
                  </div>
                  <div>
                    <textarea
                      className="uk-textarea"
                      name="message"
                      id="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="uk-text-right">
                <button name="submit" className="uk-button uk-button-primary">
                  Send message
                </button>
              </div>
            </Grid>
          </Column>
        </Grid>
      </Section>
    );
  }
}
