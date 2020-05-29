import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { parse, compareAsc, compareDesc } from 'date-fns';

import { Section, Grid, Column } from '../Grid';

const NewsArticle = ({ link, image, title }) => {
  return (
    <Column>
      <div className="uk-card-media-top uk-height-small">
        <img
          data-src={image}
          data-uk-img=""
          className="uk-height-1-1 uk-width-1-1"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="uk-card-body uk-flex uk-flex-column gray-bg uk-padding">
        <h4>{title}</h4>
        <div>
          <Link to={`/news/${link}`} className="uk-button uk-button-primary">
            Read more
          </Link>
        </div>
      </div>
    </Column>
  );
};

const LatestNews = React.memo(({ data }) => {
  const [sort, setSort] = useState('desc');
  let latestNews = null;

  if (data.length > 0) {
    latestNews = data
      .sort((a, b) => {
        if (sort === 'asc') {
          return compareAsc(
            parse(a.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
            parse(b.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date())
          );
        } else if (sort === 'desc') {
          return compareDesc(
            parse(a.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
            parse(b.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date())
          );
        }
      })
      .map((news) => {
        return (
          <li key={parseInt(news.id)}>
            <NewsArticle image={news.image} title={news.title} link={news.id} />
          </li>
        );
      });
  }

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <h1>Latest news</h1>
        </Column>
        <Column>
          <Grid childWidth="auto">
            <Column>
              <label className="uk-form-label uk-text-bold">Order By</label>
              <select
                value={sort}
                onChange={handleSortChange}
                className="uk-select uk-margin-small-top"
              >
                <option value="desc">Newest first</option>
                <option value="asc">Oldest first</option>
              </select>
            </Column>
          </Grid>
        </Column>
        <Column>
          <Grid childWidth="1-1 expand@m">
            <Column>
              <Grid childWidth="1-1 1-2@m 1-3@l">{latestNews}</Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
});

export default LatestNews;
