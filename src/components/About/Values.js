import React from 'react';
import { Icon } from '@iconify/react';
import check from '@iconify/icons-fe/check-circle';

import { Section, Grid, Column } from '../Grid';

const Vision = () => {
  return (
    <Grid childWidth="1-1" className="uk-grid-small uk-flex-middle">
      <Column width="1-3@m">
        <h2 className="text-primary">Our Vision</h2>
      </Column>
      <Column width="expand@m">
        <p>
          To create an exceptional product that is affordable and easy to use.
        </p>
      </Column>
    </Grid>
  );
};

const Mission = () => {
  return (
    <Grid childWidth="1-1" className="uk-grid-small uk-flex-middle">
      <Column width="1-3@m">
        <h2 className="text-primary">Our Mission</h2>
      </Column>
      <Column width="expand@m">
        <p>
          To offer effective solutions, provide top quality services and giving
          our one hundred and ten percent (110%) for customer satisfaction. To
          do this we must earn continuing loyalty of customers by providing
          superior value in a way that is profitable to us.
        </p>
      </Column>
    </Grid>
  );
};

const CoreValue = props => {
  return (
    <Column>
      <Grid childWidth="expand" className="uk-grid-small">
        <Column width="auto">
          <Icon icon={check} width={24} height={24} color="#9A2672"></Icon>
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h5 className="uk-margin-remove">{props.label}</h5>
          <p>{props.description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const CoreValues = () => {
  return (
    <Grid childWidth="1-1">
      <Column width="1-3@m">
        <h2 className="text-primary">Our Core Values</h2>
      </Column>
      <Column width="expand@m">
        <Grid childWidth="1-1">
          <CoreValue
            label="Change the game"
            description="Deliver innovation that matters. Be what's next."
          />
          <CoreValue
            label="Elevate its purpose"
            description="Build solutions to make people’s lives better while making it beneficial to our customers."
          />
          <CoreValue
            label="‘Wow’ every customer"
            description="Put the consumer at the center of everything we do. Surpass expectations, every time."
          />
          <CoreValue
            label="Make a difference every day"
            description="Constantly push ourselves to be our best, focus on solutions, and arrive every day inspired to make an impact through our talents, passion and hard work."
          />
        </Grid>
      </Column>
    </Grid>
  );
};

const Values = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <Vision />
        </Column>
        <Column>
          <Mission />
        </Column>
        <Column>
          <CoreValues />
        </Column>
      </Grid>
    </Section>
  );
};

export default Values;
