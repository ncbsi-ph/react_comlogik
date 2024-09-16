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
          Our Vision is to build a legacy of technological innovation in our
          industry, while setting the standard for professionalism, integrity,
          and the steadfast pursuit of excellence, all for the glory of God.
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
          Since 1999, Comlogik has had the Mission of empowering businesses in
          healthcare and beyond by creating innovative technological solutions
          that maximize productivity, efficiency, and service quality. Comlogik
          is committed to meeting every clients&apos; needs through safe and
          secure IT services alongside above-and-beyond customer support,
          forming lasting partnerships in a continuously evolving digital age.
        </p>
      </Column>
    </Grid>
  );
};

const CoreValue = (props) => {
  return (
    <Column>
      <Grid childWidth="expand" className="uk-grid-small">
        <Column width="auto">
          <Icon icon={check} width={24} height={24} color="#9A2672"></Icon>
        </Column>
        <Column className="uk-flex uk-flex-column">
          <h5 className="uk-margin-remove">{props.label}</h5>
          <p className="uk-margin-small-top">{props.description}</p>
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
      <div
        className="uk-child-width-1-1"
        data-uk-grid=""
        data-uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 300"
      >
        <Column>
          <Vision />
        </Column>
        <Column>
          <Mission />
        </Column>
        <Column>
          <CoreValues />
        </Column>
      </div>
    </Section>
  );
};

export default Values;
