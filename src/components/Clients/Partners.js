import React, { Component } from 'react';

import { Section, Grid, Column } from '../Grid';
import LogoCarousel from './LogoCarousel';

export default class Partners extends Component {
  render() {
    return (
      <>
        <Section>
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5>PARTNERS</h5>
              <h1>Our company's good partners</h1>
              <p>
                Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi,
                euismod et eleifend eu, scelerisque ac velit. Sed placerat
                imperdiet elementum.
              </p>
            </Column>
            <Column>
              <LogoCarousel></LogoCarousel>
            </Column>
          </Grid>
        </Section>
      </>
    );
  }
}
