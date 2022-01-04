import React from 'react';

import { Section, Grid, Column } from '../Grid';
import { Link } from 'react-router-dom';

const CovidSystems = () => {
  return (
    <Section container={false} className="uk-padding-remove-bottom">
      <Section className="gradient-bg-light">
        <h2 className="uk-text-center">
          Comlogik has the solutions to help you respond to COVID 19 and operate
          your healthcare facility safely and smartly.
        </h2>
        <Column className="uk-flex uk-flex-center">
          <Link to="/covid" className="border-0 uk-button uk-button-primary">
            See How
          </Link>
        </Column>
      </Section>
    </Section>
  );
};

export default CovidSystems;
