import React from 'react';

import { Section, Grid, Column } from '../Grid';

const Benefit = ({ icon, benefit, description }) => {
  return (
    <Column>
      <Grid childWidth="expand">
        {/* <Column width="auto">
          <img className="uk-preserve" src={icon} data-uk-svg="" />
        </Column> */}
        <Column className="uk-flex uk-flex-column">
          <h4 className="uk-margin-remove">{benefit}</h4>
          <p className="uk-margin-small-top">{description}</p>
        </Column>
      </Grid>
    </Column>
  );
};

const Benefits = () => {
  return (
    <Section className="gradient-bg-light uk-margin-large-top">
      <Grid childWidth="1-1" className="uk-margin-bottom">
        <Column className="uk-flex uk-flex-column">
          <h1 className="uk-text-center uk-margin-medium-top">
            Working with Comlogik
          </h1>
          <p className="uk-text-center uk-margin-remove-top uk-margin-bottom">
            Interested to work with us? Here are the perks of working with us!
          </p>
        </Column>
        <Column>
          <Grid childWidth="1-1 1-3@m">
            <Benefit
              benefit="Healthcare Benefits"
              description="We provide healthcare benefits to ensure that employees are well taken care of with regards to their well-being."
            />
            <Benefit
              benefit="Travel Incentives"
              description="Employees are rewarded holidays and vacations as an incentive for excellent performance."
            />
            <Benefit
              benefit="Free Snacks and Drinks"
              description="We provide free snacks to all employees so they won't need to spend anything."
            />
            <Benefit
              benefit="Royalties and Commissions"
              description="All employees gain from profits earned by Comlogik to spur exceptional work."
            />
            <Benefit
              benefit="Flexible Schedule (Work From Home)"
              description="Employees have the option to work from home and allow them a level of autonomy to create their own schedule that works for them."
            />
            <Benefit
              benefit="Parental Leave"
              description="We provide leave from employment to care for a child following its birth to settle into the family before returning to work and available to both father and mother."
            />
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Benefits;
