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
                <img data-src="static/clients/image6.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image9.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image7.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image15.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image13.png" data-uk-img="" />
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
                <img data-src="static/clients/image14.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image17.jpg" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image12.png" data-uk-img="" />
              </Column>
              <Column>
                <img data-src="static/clients/image10.png" data-uk-img="" />
              </Column>
            </div>
          </Column>
          <Column>
            <div
              className="uk-child-width-1-2 uk-flex-middle uk-flex-center uk-text-center"
              data-uk-grid=""
              data-uk-scrollspy="cls: uk-animation-fade; target: div; delay: 300; repeat: true"
            >
              <Column>
                <img data-src="static/clients/image16.png" data-uk-img="" />
              </Column>
            </div>
          </Column>
          <Column className="uk-flex uk-flex-center">
            <Link to="/contact-us" className="uk-button uk-button-primary">
              Request for clients list
            </Link>
          </Column>
        </Grid>
      </Section>
    </>
  );
};

export default Clients;
