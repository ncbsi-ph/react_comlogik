import React from 'react';

import { Section, Grid, Column } from '../Grid';
import { Icon } from '@iconify/react';

import people from '@iconify/icons-feather/user';
import calendar from '@iconify/icons-feather/calendar';
import work from '@iconify/icons-feather/briefcase';

const Job = ({
  title,
  openPositions,
  openUntil,
  workExperience,
  description,
}) => {
  return (
    <Column>
      <Grid childWidth="1-1">
        <Column>
          <h3 className="text-black">{title}</h3>
        </Column>
        <Column className="uk-margin-top">
          <Grid childWidth="auto">
            <Column className="uk-text-bold uk-flex uk-flex-middle uk-flex-center">
              <div className="uk-margin-small-right">
                <Icon icon={people} width={24} height={24}></Icon>
              </div>
              <div>
                {`${openPositions} positions`}
              </div>
            </Column>
            <Column className="uk-text-bold uk-flex uk-flex-middle">
              <div className="uk-margin-small-right">
                <Icon icon={calendar} width={24} height={24}></Icon>
              </div>
              <div>
                {`Open until ${openUntil}`}
              </div>
            </Column>
            <Column className="uk-text-bold uk-flex uk-flex-middle">
              <div className="uk-margin-small-right">
                <Icon icon={work} width={24} height={24}></Icon>
              </div>
              <div>
                {`Minimum of ${workExperience} years work related experience`}
              </div>
            </Column>
          </Grid>
        </Column>
        <Column>
          <p>{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Jobs = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-flex uk-flex-between uk-flex-middle">
          <h2 className="uk-margin-remove uk-display-inline-block">
            Open Positions
          </h2>
          <span>Two positions available</span>
        </Column>
        <Column>
          <Grid childWidth="1-1">
            <Column>
              <div className="gray-bg uk-padding">
                <Job
                  title="HR Officer"
                  openPositions="1"
                  openUntil="May 30"
                  workExperience="2-3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus id sapien condimentum rhoncus vel sit amet diam. Etiam dui augue, malesuada at lectus quis, scelerisque faucibus leo. In hac habitasse platea dictumst."
                />
              </div>
            </Column>
            <Column>
              <div className="gray-bg uk-padding">
                <Job
                  title="HR Officer"
                  openPositions="1 "
                  openUntil="Undefined"
                  workExperience="2-3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus id sapien condimentum rhoncus vel sit amet diam. Etiam dui augue, malesuada at lectus quis, scelerisque faucibus leo. In hac habitasse platea dictumst."
                />
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Jobs;
