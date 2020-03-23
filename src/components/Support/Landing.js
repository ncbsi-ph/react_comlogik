import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';

export default class Landing extends Component {
  render() {
    return (
      <Section>
        <Grid className="uk-flex-middle" childWidth="expand">
          <Column width="1-2">
            <img src="static/support-hero.gif"></img>
          </Column>
          <Column className="uk-flex uk-flex-column">
            <h5>SUPPORT</h5>
            <h1>Support placeholder heading</h1>
            <p>
              Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi,
              euismod et eleifend eu, scelerisque ac velit. Sed placerat
              imperdiet elementum.
            </p>
            <div>
              <a className="uk-button uk-button-primary">Redirect to OS Ticket</a>
            </div>
          </Column>
        </Grid>
      </Section>
    );
  }
}
