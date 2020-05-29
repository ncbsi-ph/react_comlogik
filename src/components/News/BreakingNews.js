import React from 'react';
import { parse, format } from 'date-fns';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const News = ({ title, image, date, link }) => {
  return (
    <Grid
      childWidth="1-1 1-2@m"
      className="uk-flex-middle uk-card uk-card-default uk-grid-collapse uk-margin"
    >
      <Column>
        <div className="uk-card-media-left uk-height-large">
          <img
            data-src={image}
            data-uk-img=""
            className="uk-height-1-1 uk-width-1-1"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Column>
      <Column>
        <div>
          <div className="uk-card-body">
            <h5 className="meta">
              {format(
                parse(date, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
                'MMMM dd, yyyy'
              ).toUpperCase()}
            </h5>
            <h3 className="uk-margin-remove">{title}</h3>
            <Link
              to={`/news/${link}`}
              className="uk-button uk-button-primary uk-margin-top"
            >
              Read more
            </Link>
          </div>
        </div>
      </Column>
    </Grid>
  );
};

const BreakingNews = React.memo(({ data }) => {
  let breakingNews = null;

  if (data.length > 0) {
    breakingNews = data.map((news) => {
      return (
        <li key={parseInt(news.id)}>
          <News
            title={news.title}
            image={news.image}
            date={news.dateAdded}
            link={news.id}
          />
        </li>
      );
    });
  }

  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1">
        <Column>
          <h1>Breaking news</h1>
        </Column>
        <Column>
          {breakingNews !== null ? (
            <div
              className="uk-position-relative"
              tabIndex="-1"
              data-uk-slider=""
            >
              <ul
                className="uk-slider-items uk-child-width-1-1 uk-visible-toggle uk-light"
                data-uk-grid=""
              >
                {breakingNews}
              </ul>
              <a
                className="uk-position-center-left uk-position-small uk-hidden-hover"
                data-uk-slidenav-previous=""
                data-uk-slider-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-position-small uk-hidden-hover"
                data-uk-slidenav-next=""
                data-uk-slider-item="next"
              ></a>
            </div>
          ) : null}
        </Column>
      </Grid>
    </Section>
  );
});

export default BreakingNews;
