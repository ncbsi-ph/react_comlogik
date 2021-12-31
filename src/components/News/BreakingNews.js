import React from 'react';
import { parse, format } from 'date-fns';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const News = ({ id, title, titleURL, image, date }) => {
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
            className="uk-height-1-1 uk-width-1-1 object-cover"
          />
        </div>
      </Column>
      <Column>
        <div>
          <div className="uk-card-body">
            <h5 className="meta uppercase">
              {format(
                parse(date, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
                'MMMM dd, yyyy'
              )}
            </h5>
            <h3 className="uk-margin-remove">{title}</h3>
            <Link
              to={`/news/${id}/${titleURL}`}
              className="uk-button uk-button-primary uk-margin-top"
            >
              Find out more
            </Link>
          </div>
        </div>
      </Column>
    </Grid>
  );
};

const BreakingNews = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1">
        <Column>
          <h1>Featured news</h1>
        </Column>
        <Column>
          <div className="uk-position-relative" tabIndex="-1" data-uk-slider="">
            <ul
              className="uk-slider-items uk-child-width-1-1 uk-visible-toggle uk-light"
              data-uk-grid=""
            >
              {data.map((news) => (
                <li key={parseInt(news.id)}>
                  <News
                    id={news.id}
                    title={news.title}
                    titleURL={news.title_id}
                    image={news.thumbnail}
                    date={news.date_added}
                  />
                </li>
              ))}
            </ul>
            <a
              className="uk-position-center-left uk-position-small uk-hidden-hover"
              data-uk-slidenav-previous=""
              data-uk-slider-item="previous"
            />
            <a
              className="uk-position-center-right uk-position-small uk-hidden-hover"
              data-uk-slidenav-next=""
              data-uk-slider-item="next"
            />
          </div>
        </Column>
      </Grid>
    </Section>
  );
};

export default BreakingNews;
