import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Section, Grid, Column } from '../Grid';

import arrowUp from '@iconify/icons-feather/arrow-up';
import arrowDown from '@iconify/icons-feather/arrow-down';

const CaseStudy = props => {
  return (
    <Column>
      <Grid
        childWidth="expand"
        className="uk-card uk-card-default rounded uk-grid-collapse"
      >
        <Column
          width="1-3"
          className="uk-card-media-left uk-cover-container uk-visible@s"
        >
          <img src={props.image} data-uk-cover="" className="rounded-testimonials"></img>
        </Column>
        <Column className="uk-card-body uk-flex-column">
          <h5>{props.hospitalName}</h5>
          <p>{props.description}</p>
          <div>
            <Link
              to="/case-study-content"
              className="uk-button uk-button-primary"
            >
              View story
            </Link>
          </div>
        </Column>
      </Grid>
    </Column>
  );
};

const CaseStudies = () => {
  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1 1-2@l" className="uk-flex-middle">
        <Column className="uk-flex uk-flex-column">
          <h1 className="uk-margin-remove">Client Successes</h1>
          <p>
            Congratulations to our clients for their recent successes. Our
            clients are some of the most innovative in health care. They range
            from industry-leading accountable care organizations, to top
            academic medical institutions, to critical access hospitals
            providing quality rural care. Some clients are multi-province health
            systems, and others one-doc practices.<br></br>
            <br></br> When they move the meter in health care – increasing
            quality of care, reducing waste, and lowering costs – we celebrate
            their efforts and share the wisdom gained by their success.<br></br>
            <br></br> Contact us about your achievements; you could be the next.
          </p>
        </Column>
        <Column>
          <Grid className="uk-grid-small" data-uk-height-match="target: > div">
            <Column className="uk-width-expand">
              <Grid childWidth="1-1" className="uk-grid-small">
                <CaseStudy
                  image="https://picsum.photos/200"
                  hospitalName="Nazareth General Hospital"
                  description="Nazareth General Hospital increases income with Comlogik’s just-in-time inventory and quality reporting solution"
                ></CaseStudy>
                <CaseStudy
                  image="https://picsum.photos/200"
                  hospitalName="Nazareth General Hospital"
                  description="Nazareth General Hospital increases income with Comlogik’s just-in-time inventory and quality reporting solution"
                ></CaseStudy>
              </Grid>
            </Column>
            <Column className="uk-width-auto">
              <div className="uk-flex uk-flex-bottom uk-height-1-1">
                <div className="uk-flex uk-flex-column">
                  <div>
                    <Icon icon={arrowUp} width={24} height={24} color={"#2e67b2"}></Icon>
                  </div>
                  <div>
                    <Icon icon={arrowDown} width={24} height={24} color={"#2e67b2"}></Icon>
                  </div>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default CaseStudies;
