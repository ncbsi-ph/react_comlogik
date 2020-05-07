import React from 'react';

import { Section, Grid, Column } from '../Grid';

const ProductHeader = ({ image, name, description }) => {
  return (
    <Section>
      <Grid childWidth="expand" className="uk-flex-middle">
        <Column width="1-2">
          <img src={image} />
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h5>SOLUTION</h5>
          <h1 className="uk-margin-remove">{name}</h1>
          <p>{description}</p>
        </Column>
      </Grid>
    </Section>
  );
};

export default ProductHeader;
