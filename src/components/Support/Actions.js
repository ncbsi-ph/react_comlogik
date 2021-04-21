import React from 'react';
import { Icon } from '@iconify/react';
import link from '@iconify/icons-feather/link';

import { Section, Grid, Column } from '../Grid';

const Actions = () => {
  return (
    <Section className="gradient-bg-dark">
      <Grid childWidth="1-1" className="uk-flex-center">
        <Column className="uk-text-center">
          <h2 className="text-white">
            You can communicate with us in different ways
          </h2>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-2@m">
            <Column className="uk-flex uk-flex-column">
              <h4 className="uk-margin-small-bottom">
                <a
                  className="flex items-center text-white"
                  href="tel:+639457814948"
                >
                  <Icon className="mr-2" icon={link} />
                  <div>Call support: +639457814948</div>
                </a>
              </h4>
              <span className="text-white">
                Phone or face to face assistance for the support you may need.
              </span>
            </Column>
            <Column className="uk-flex uk-flex-column">
              <h4 className="uk-margin-small-bottom">
                <a className="flex items-center text-white">
                  <Icon className="mr-2" icon={link} />
                  <div>Visit our Support Ticketing System</div>
                </a>
              </h4>
              <span className="text-white">
                If support is not available via phone, you may log a ticket
                through our Support Ticketing System. The STS portal is
                available 24 hours a day, 7 days a week and 365 days a year.
              </span>
            </Column>
            <Column>
              <h4 className="uk-margin-small-bottom">
                <a
                  className="flex items-center text-white"
                  href="viber://add?number=%2B639457814948"
                >
                  <Icon className="mr-2" icon={link} />
                  <div>Chat with us</div>
                </a>
              </h4>
              <span className="text-white">
                If you have a quick question that needs immediate reply.
              </span>
            </Column>
            <Column>
              <h4 className="uk-margin-small-bottom">
                <a
                  className="flex items-center text-white"
                  href="mailto:support@comlogik.com"
                >
                  <Icon className="mr-2" icon={link} />
                  <div>Email us</div>
                </a>
              </h4>
              <a className="text-white" href="mailto:support@comlogik.com">
                support@comlogik.com
              </a>
            </Column>
            <Column>
              <h4 className="uk-margin-small-bottom">
                <a
                  className="flex items-center text-white"
                  target="_blank"
                  href="https://www.facebook.com/groups/comlogikcommunity"
                >
                  <Icon className="mr-2" icon={link} />
                  <div>Join our Facebook community</div>
                </a>
              </h4>
              <div className="text-white">
                An exclusive user community for everyone who is using our
                software
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Actions;
