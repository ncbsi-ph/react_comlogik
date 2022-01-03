import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { parse, format, compareAsc, compareDesc } from 'date-fns';

import { Section, Grid, Column } from '../Grid';

const NewsArticle = ({ id, title, titleURL, date, image }) => {
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
        <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          {format(
            parse(date, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
            'MMM dd, yyyy'
          )}
        </div>
        <Link
          to={`/news/${id}/${titleURL}`}
          title={title}
          className="mt-4 mb-6 text-xl font-semibold text-gray-700 no-underline hover:text-primary-500"
        >
          {title}
        </Link>
        <div>
          <Link
            to={`/news/${id}/${titleURL}`}
            className="uk-button uk-button-primary"
          >
            Read more
          </Link>
        </div>
      </div>
    </Column>
  );
};

const LatestNews = ({ data = [] }) => {
  const [sort, setSort] = useState('desc');
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    if (data.length) {
      const sorted = data.sort((a, b) => {
        const dateFormat = 'yyyy-MM-dd HH:mm:ss.SSS';
        const firstDate = parse(a.date_added, dateFormat, new Date());
        const secondDate = parse(b.date_added, dateFormat, new Date());
        if (sort === 'asc') return compareAsc(firstDate, secondDate);
        else return compareDesc(firstDate, secondDate);
      });
      setSorted([...sorted]);
    }
  }, [data, sort]);

  if (!data.length)
    return (
      <Section>
        <div className="text-3xl">No news at the moment</div>
      </Section>
    );

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <h1>All news</h1>
        </Column>
        <Column>
          <Grid childWidth="auto">
            <Column>
              <label className="uk-form-label uk-text-bold">Sort by</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
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
              <Grid childWidth="1-1 1-2@m 1-3@l">
                {sorted.map((news) => (
                  <li key={news.id}>
                    <NewsArticle
                      id={news.id}
                      title={news.title}
                      titleURL={news.title_id}
                      image={news.thumbnail}
                      date={news.date_added}
                    />
                  </li>
                ))}
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default LatestNews;
