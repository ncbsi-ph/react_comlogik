import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const NewsArticle = props => {
  return (
    <Column>
      <Link to="/news-content" className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-height-small">
          <div class="uk-inline">
            <img data-src={props.image} data-uk-img=""></img>
            <div class="uk-overlay date-overlay uk-position-top-left uk-padding-small">
              <p className="uk-margin-remove uk-text-center">{props.month}</p>
              <p className="uk-margin-remove uk-text-center">{props.day}</p>
            </div>
          </div>
        </div>
        <div className="uk-card-body uk-flex uk-flex-column gray-bg uk-padding">
          <h4 className="uk-margin-remove">{props.title}</h4>
          <p>{props.summary}</p>
        </div>
        <div className="uk-card-footer gray-bg">
          <Grid childWidth="auto" className="uk-grid-small">
            {props.tags.map((tag, index) => (
              <Column key={index.toString()}>
                <span className="uk-badge news-tag">{tag}</span>
              </Column>
            ))}
          </Grid>
        </div>
      </Link>
    </Column>
  );
};

const AllNews = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <h1>All news</h1>
        </Column>
        <Column>
          <Grid childWidth="1-1 expand@m">
            <Column>
              <Grid childWidth="1-1 1-2@m 1-3@l">
                <NewsArticle
                  image="https://picsum.photos/290"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                  month="Dec"
                  day="10"
                ></NewsArticle>
                <NewsArticle
                  image="https://picsum.photos/290"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                  month="Dec"
                  day="12"
                ></NewsArticle>
                <NewsArticle
                  image="https://picsum.photos/290"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                  month="Dec"
                  day="13"
                ></NewsArticle>
              </Grid>
            </Column>
            <Column width="1-5@m" className="uk-flex-first uk-flex-last@m">
              <Grid childWidth="1-1">
                <Column>
                  <label className="uk-form-label uk-text-bold">Sort By</label>
                  <select className="uk-select uk-margin-small-top">
                    <option>All news</option>
                  </select>
                </Column>
                <Column>
                  <label className="uk-form-label uk-text-bold">Order By</label>
                  <select className="uk-select uk-margin-small-top">
                    <option>Ascending</option>
                  </select>
                </Column>
                <Column>
                  <label className="uk-form-label uk-text-bold">Filter Tags</label>
                  <Grid childWidth="1-1" className="uk-grid-small uk-margin-small-top">
                    <label>
                      <input
                        className="uk-checkbox uk-margin-right"
                        type="checkbox"
                      ></input>
                      PhilHealth
                    </label>
                    <label>
                      <input
                        className="uk-checkbox uk-margin-right"
                        type="checkbox"
                      ></input>
                      Products
                    </label>
                    <label>
                      <input
                        className="uk-checkbox uk-margin-right"
                        type="checkbox"
                      ></input>
                      DOH
                    </label>
                    <label>
                      <input
                        className="uk-checkbox uk-margin-right"
                        type="checkbox"
                      ></input>
                      Promotions
                    </label>
                  </Grid>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default AllNews;
