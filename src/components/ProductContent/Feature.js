import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Feature = ({ image, feature, description }) => {
  return (
    <Section className="uk-section-small">
      <Grid childWidth="1-1 expand@s" className="uk-flex-middle">
        <Column width="1-3@s">
          <img src={image} className="uk-width-1-1" />
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h3 className="uk-margin-remove uk-text-center uk-text-left@s">{feature}</h3>
          <p>{description}</p>
        </Column>
      </Grid>
    </Section>
  );
};

export default Feature;
