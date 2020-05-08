import React from 'react';

import { Section, Grid, Column } from '../Grid';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <Section>
      <Grid childWidth="1-1" className="uk-grid-row-large">
        <Column>
          <h2 className="uk-text-center">
            Since 1999, we’ve helped hundreds of healthcare institutions,
            thousands of physicians and medical workers accelerate their growth
            by providing them with the right tools and knowledge.
          </h2>
        </Column>
        <Column>
          <Grid childWidth="expand" className="uk-flex-middle uk-flex-center uk-text-center">
            <Column>
              <img src="static/clients/image6.png"/>
            </Column>
            <Column>
              <img src="static/clients/image9.png"/>
            </Column>
            <Column>
              <img src="static/clients/image7.png"/>
            </Column>
            <Column>
              <img src="static/clients/image12.png"/>
            </Column>
            <Column>
              <img src="static/clients/image10.png"/>
            </Column>
          </Grid>
        </Column>
        <Column>
          <Grid childWidth="1-4" className="uk-flex-middle uk-flex-center uk-text-center">
            <Column>
              <img src="static/clients/image15.png"/>
            </Column>
            <Column>
              <img src="static/clients/image13.png"/>
            </Column>
            <Column>
              <img src="static/clients/image14.png"/>
            </Column>
          </Grid>
        </Column>
        <Column>
          <Grid childWidth="1-1" className="uk-flex-middle uk-flex-center">
            <Column className="uk-text-center">
              <img src="static/clients/image16.png"/>
            </Column>
          </Grid>
        </Column>
        <Column className="uk-flex uk-flex-center">
          <Link to="/clients" className="uk-button uk-button-primary">See our clients</Link>
        </Column>
      </Grid>
    </Section>
  );
};

export default Clients;
