import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Benefit = ({ icon, benefit, description }) => {
  return (
    <Column>
      <Grid childWidth="expand">
        <Column width="auto">
          <img className="uk-preserve" src={icon} data-uk-svg="" />
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h4 className="uk-margin-remove">{benefit}</h4>
          <p className="uk-margin-small-top">{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Benefits = () => {
  return (
    <Section className="gradient-bg-light uk-margin-large-top">
      <Grid childWidth="1-1" className="uk-margin-bottom">
        <Column className="uk-flex uk-flex-column">
          <h1 className="uk-text-center uk-margin-medium-top">
            Working with Comlogik
          </h1>
          <p className="uk-text-center uk-margin-remove-top uk-margin-bottom">
            Interested to work with us? Here are the perks of working with us!
          </p>
        </Column>
        <Column>
          <Grid childWidth="1-1">
            <Benefit
              icon="static/benefit-1.svg"
              benefit="Healthcare Benefits"
              description="Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis vitae dui vitae turpis bibendum ultrices at at arcu."
            />
            <Benefit
              icon="static/benefit-2.svg"
              benefit="Snacks and Overflowing Coffee"
              description="Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis vitae dui vitae turpis bibendum ultrices at at arcu."
            />
            <Benefit
              icon="static/benefit-3.svg"
              benefit="Vacation and Sick Leave"
              description="Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis vitae dui vitae turpis bibendum ultrices at at arcu."
            />
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Benefits;
