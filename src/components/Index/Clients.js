import React from 'react';

import { Section, Grid, Column } from '../Grid';
import { Link } from 'react-router-dom';

const Clients = () => {
  return (
    <>
      <Section
        container={false}
        className="uk-padding-remove-bottom uk-margin-large-top"
      >
        <Section className="gradient-bg-light">
          <h2 className="uk-text-center">
            We’ve helped hundreds of healthcare institutions, thousands of
            physicians and medical workers accelerate their growth by providing
            them with the right tools and knowledge.
          </h2>
        </Section>
      </Section>
      <Section>
        <Grid childWidth="1-1" className="uk-grid-row-large">
          <Column>
            <div
              className="uk-child-width-1-5 uk-flex-middle uk-flex-center uk-text-center"
              data-uk-grid=""
              data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: false"
            >
              <Column>
                <img src="static/clients/image6.png" />
              </Column>
              <Column>
                <img src="static/clients/image9.png" />
              </Column>
              <Column>
                <img src="static/clients/image7.png" />
              </Column>
              <Column>
                <img src="static/clients/image12.png" />
              </Column>
              <Column>
                <img src="static/clients/image10.png" />
              </Column>
            </div>
          </Column>
          <Column>
            <div
              className="uk-child-width-1-5 uk-flex-middle uk-flex-center uk-text-center"
              data-uk-grid=""
              data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: true"
            >
              <Column>
                <img src="static/clients/image15.png" />
              </Column>
              <Column>
                <img src="static/clients/image13.png" />
              </Column>
              <Column>
                <img src="static/clients/image14.png" />
              </Column>
            </div>
          </Column>
          <Column>
            <div
              className="uk-child-width-1-1 uk-flex-middle uk-flex-center uk-text-center"
              data-uk-grid=""
              data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: true"
            >
              <Column>
                <img src="static/clients/image16.png" />
              </Column>
            </div>
          </Column>
          <Column className="uk-flex uk-flex-center">
            <Link to="/clients" className="uk-button uk-button-primary">
              See our clients
            </Link>
          </Column>
        </Grid>
      </Section>
    </>
  );
};

export default Clients;
