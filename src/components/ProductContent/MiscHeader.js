import React from 'react';

import { Section, Grid, Column } from '../Grid';

const MiscHeader = ({ image, title = null, description }) => {
  return (
    <Section>
      <Grid className="uk-text-center" childWidth="1-1">
        <Column>
          <img src={image} />
        </Column>
        {title !== null ? (
          <Column>
            <h3 className="uk-text-primary">{title}</h3>
          </Column>
        ) : null}
        <Column>
          <p className="uk-text-center">{description}</p>
        </Column>
      </Grid>
    </Section>
  );
};

export default MiscHeader;
