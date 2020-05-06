import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const BreakingNews = () => {
  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1">
        <Column>
          <h1>Breaking news</h1>
        </Column>
        <Column>
          <Grid
            childWidth="1-1 1-2@m"
            className="uk-flex-middle uk-card uk-card-default uk-grid-collapse uk-margin"
          >
            <Column>
              <div className="uk-card-media-left">
                <img src="static/news/covid19.jpg" />
              </div>
            </Column>
            <Column>
              <div>
                <div className="uk-card-body">
                  <h5 className="meta">MARCH 16, 2020</h5>
                  <h3 className="uk-margin-remove">
                    Amidst COVID-19 pandemic, Comlogik offers support to clients
                    and partners nationwide
                  </h3>
                  <Link
                    to="/news/covid19"
                    className="uk-button uk-button-primary uk-margin-top"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default BreakingNews;
