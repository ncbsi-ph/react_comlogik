import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Actions = () => {
  return (
    <Section className="gradient-bg-dark">
      <Grid childWidth="1-1" className="uk-flex-center">
        <Column className="uk-text-center">
          <h2 style={{ color: 'white' }}>
            You can communicate with us in different ways
          </h2>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-2@m">
            <Column className="uk-flex uk-flex-column">
              <h4 className="uk-margin-small-bottom">
                <a href="tel:+639457814948" style={{ color: 'white' }}>
                  Call support: +639457814948
                </a>
              </h4>
              <span style={{ color: 'white' }}>
                Phone or face to face assistance for the support you may need.
              </span>
            </Column>
            <Column className="uk-flex uk-flex-column">
              <h4 className="uk-margin-small-bottom">
                <a style={{ color: 'white' }}>
                  Visit our Support Ticketing System
                </a>
              </h4>
              <span style={{ color: 'white' }}>
                If support is not available via phone, you may log a ticket
                through our Support Ticketing System. The STS portal is
                available 24 hours a day, 7 days a week and 365 days a year.
              </span>
            </Column>
            <Column>
              <h4 className="uk-margin-small-bottom">
                <a style={{ color: 'white' }} href="viber://add?number=%2B639457814948">Chat with us</a>
              </h4>
              <span style={{ color: 'white' }}>
                If you have a quick question that needs immediate reply.
              </span>
            </Column>
            <Column>
              <h4 className="uk-margin-small-bottom">
                <a
                  href="mailto:support@comlogik.com"
                  style={{ color: 'white' }}
                >
                  Email us
                </a>
              </h4>
              <a href="mailto:support@comlogik.com" style={{ color: 'white' }}>
                support@comlogik.com
              </a>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Actions;
