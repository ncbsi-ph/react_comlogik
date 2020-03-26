import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class Testimonials extends Component {
  render() {
    return (
      <Section className="testimonials-bg">
        <Grid childWidth="1-1">
          <Column>
            <Grid childWidth="expand" className="uk-grid-medium uk-flex-middle">
              <Column width="1-2" className="uk-flex uk-flex-column">
                <h5 className="meta uk-margin-remove-bottom">TESTIMONIALS</h5>
                <h1 className="margin-top-30">
                  Your success is our success too
                </h1>
              </Column>
              <Column>
                <p>
                  Our clients are some of the most innovative in health care.
                  They range from industry-leading accountable care
                  organizations, to top academic medical institutions, to
                  critical access hospitals providing quality rural care. When
                  they move the meter in health care – increasing quality of
                  care, reducing waste, and lowering costs – we celebrate their
                  efforts and share the wisdom gained by their success.
                </p>
              </Column>
            </Grid>
          </Column>
          <Column>
            <Grid childWidth="1-3">
              <Column>
                <div className="uk-card uk-card-body uk-card-default">
                  <Grid
                    childWidth="1-1"
                    className="uk-grid-small uk-text-center"
                  >
                    <Column>
                      <img
                        data-src="static/testimonial-1.png"
                        data-uk-img=""
                      ></img>
                    </Column>
                    <Column>
                      <h4>Lopez Saint Jude General Hospital</h4>
                    </Column>
                    <Column>
                      <em>Partner for 8 years</em>
                    </Column>
                    <Column>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum finibus nulla quis ligula auctor, at
                        pretium orci eleifend. Maecenas non lacus eget massa
                        pretium ornare in at ante. Cras id posuere eros. Ut
                        tempus ex ut mi tristique mollis. Suspendisse ac elit
                        non nunc consequat molestie quis in nisl.“
                      </p>
                    </Column>
                    <Column>
                      <a>View Full Story</a>
                    </Column>
                  </Grid>
                </div>
              </Column>
              <Column>
                <div className="uk-card uk-card-body uk-card-default">
                  <Grid
                    childWidth="1-1"
                    className="uk-grid-small uk-text-center"
                  >
                    <Column>
                      <img
                        data-src="static/testimonial-2.png"
                        data-uk-img=""
                      ></img>
                    </Column>
                    <Column>
                      <h4>Meycauayan Doctors Hospital</h4>
                    </Column>
                    <Column>
                      <em>Partner for 3 years</em>
                    </Column>
                    <Column>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum finibus nulla quis ligula auctor, at
                        pretium orci eleifend. Maecenas non lacus eget massa
                        pretium ornare in at ante. Cras id posuere eros. Ut
                        tempus ex ut mi tristique mollis. Suspendisse ac elit
                        non nunc consequat molestie quis in nisl.“
                      </p>
                    </Column>
                    <Column>
                      <a>View Full Story</a>
                    </Column>
                  </Grid>
                </div>
              </Column>
              <Column>
                <div className="uk-card uk-card-body uk-card-default">
                  <Grid
                    childWidth="1-1"
                    className="uk-grid-small uk-text-center"
                  >
                    <Column>
                      <img
                        data-src="static/testimonial-3.png"
                        data-uk-img=""
                      ></img>
                    </Column>
                    <Column>
                      <h4>Alaminos Doctors’ Hospital</h4>
                    </Column>
                    <Column>
                      <em>Partner for 5 years</em>
                    </Column>
                    <Column>
                      <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum finibus nulla quis ligula auctor, at
                        pretium orci eleifend. Maecenas non lacus eget massa
                        pretium ornare in at ante. Cras id posuere eros. Ut
                        tempus ex ut mi tristique mollis. Suspendisse ac elit
                        non nunc consequat molestie quis in nisl.“
                      </p>
                    </Column>
                    <Column>
                      <a>View Full Story</a>
                    </Column>
                  </Grid>
                </div>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Section>
    );
  }
}
