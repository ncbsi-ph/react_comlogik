import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const NewsArticle = props => {
  return (
    <Column>
      <Link to="/news-content" className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-height-small">
          <img data-src={props.image} data-uk-cover="" data-uk-img=""></img>
        </div>
        <div className="uk-card-body uk-flex uk-flex-column">
          <h4 className="uk-margin-remove">{props.title}</h4>
          <p>{props.summary}</p>
        </div>
        <div className="uk-card-footer">
          <Grid childWidth="auto" className="uk-grid-small">
            {props.tags.map((tag, index) => (
              <Column key={index.toString()}>
                <span className="uk-badge">{tag}</span>
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
                  image="https://picsum.photos/300"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                ></NewsArticle>
                <NewsArticle
                  image="https://picsum.photos/300"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                ></NewsArticle>
                <NewsArticle
                  image="https://picsum.photos/300"
                  title="Lorem Ipsum Dolor"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac dapibus nunc, sed convallis mi. Sed quis purus ac elit lobortis vulputate a in urna. Mauris et dictum dolor..."
                  tags={['lorem', 'ipsum']}
                ></NewsArticle>
              </Grid>
            </Column>
            <Column width="1-4@m" className="uk-flex-first uk-flex-last@m">
              <Grid childWidth="1-1">
                <Column>
                  <label className="uk-form-label">Sort by</label>
                  <select className="uk-select">
                    <option>All news</option>
                  </select>
                </Column>
                <Column>
                  <label className="uk-form-label">Order by</label>
                  <select className="uk-select">
                    <option>Ascending</option>
                  </select>
                </Column>
                <Column>
                  <label className="uk-form-label">Filter tags</label>
                  <Grid childWidth="1-1" className="uk-grid-small">
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
