import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class Landing extends Component {
  render() {
    return (
      <Section>
        <Grid className="uk-flex-middle uk-grid-large" childWidth="1-1 1-2@m">
          <Column>
            <img data-src="static/support-hero-small.gif" data-uk-img="" />
          </Column>
          <Column className="uk-flex uk-flex-column">
            <h5>SUPPORT</h5>
            <h1 className="uk-margin-remove">We're here to help</h1>
          </Column>
        </Grid>
      </Section>
    );
  }
}
