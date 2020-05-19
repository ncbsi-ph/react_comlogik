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
          <p>{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Benefits = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-column">
          <h1 className="uk-text-center">Working with Comlogik</h1>
          <p className="uk-text-center">
            Quisque facilisis elit enim, pretium rhoncus lacus dictum ac. Duis
            vitae dui vitae turpis bibendum ultrices at at arcu. Duis vel velit
            dui. Nulla sodales, elit id laoreet commodo, turpis nisi finibus
            ipsum, sit amet sodales felis nunc non magna. Mauris auctor neque in
            dui ultrices, vitae ultricies justo dignissim. Morbi ex tortor,
            feugiat ac rhoncus sed, placerat eu neque.
          </p>
        </Column>
        <Column>
          <Grid childWidth="1-3">
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
            <Benefit
              icon="static/advantage-1.svg"
              benefit="Test"
              description="Lorem ipsum"
            />
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Benefits;
