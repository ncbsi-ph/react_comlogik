import React from 'react';

import { Section, Grid, Column } from '../Grid';

const CAFeature = ({ number, feature, description }) => {
  return (
    <Section className="uk-section-small">
      <Grid childWidth="1-1 expand@s" className="uk-flex-middle">
        <Column width="auto@s" className="uk-flex uk-flex-center uk-flex-left@s">
          <div
            className="uk-background-primary uk-padding-small uk-text-center uk-flex uk-flex-middle uk-flex-center"
            style={{ width: 50, height: 50 }}
          >
            <span
              style={{
                color: 'white',
                fontSize: '2rem',
              }}
            >
              {number}
            </span>
          </div>
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h3 className="uk-margin-remove uk-text-center uk-text-left@s">{feature}</h3>
          <p>{description}</p>
        </Column>
      </Grid>
    </Section>
  );
};

export default CAFeature;
