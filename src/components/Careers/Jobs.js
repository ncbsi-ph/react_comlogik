import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Job = ({
  title,
  openPositions,
  openUntil,
  workExperience,
  description,
}) => {
  return (
    <Column>
      <Grid childWidth="1-1">
        <Column>
          <h3>{title}</h3>
        </Column>
        <Column>
          <Grid childWidth="auto">
            <Column>{`${openPositions} positions`}</Column>
            <Column>{`Open until ${openUntil}`}</Column>
            <Column>{`Minimum of ${workExperience} years work related experience`}</Column>
          </Grid>
        </Column>
        <Column>
          <p>{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Jobs = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-between uk-flex-middle">
          <h2 className="uk-margin-remove uk-display-inline-block">
            Open Positions
          </h2>
          <span>Two positions available</span>
        </Column>
        <Column>
          <Grid childWidth="1-1">
            <Job
              title="Test"
              openPositions="Test"
              openUntil="Test"
              workExperience="Test"
              description="Lorem ipsum"
            />
            <Job
              title="Test"
              openPositions="Test"
              openUntil="Test"
              workExperience="Test"
              description="Lorem ipsum"
            />
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Jobs;
