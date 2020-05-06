import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const NewsArticle = ({ keyword, image, month, day, title, summary }) => {
  return (
    <Column>
      <Link
        to={`/news/${keyword}`}
        className="uk-card uk-card-default"
        style={{ textDecoration: 'none' }}
      >
        <div className="uk-card-media-top uk-height-small">
          <div
            className="uk-inline uk-height-1-1 uk-width-1-1"
            style={{ objectFit: 'cover' }}
          >
            <img
              data-src={image}
              data-uk-img=""
              className="uk-height-1-1 uk-width-1-1"
            />
            <div className="uk-overlay date-overlay uk-position-top-left uk-padding-small">
              <p className="uk-margin-remove uk-text-center">{month}</p>
              <p className="uk-margin-remove uk-text-center">{day}</p>
            </div>
          </div>
        </div>
        <div className="uk-card-body uk-flex uk-flex-column gray-bg uk-padding">
          <h4 className="uk-margin-remove">{title}</h4>
          <p>{summary}</p>
        </div>
      </Link>
    </Column>
  );
};

const LatestNews = () => {
  return (
    <Section>
      <Grid childWidth="1-1">
        <Column>
          <h1>Latest news</h1>
        </Column>
        <Column>
          <Grid childWidth="1-1 expand@m">
            <Column>
              <Grid childWidth="1-1 1-2@m 1-3@l">
                <NewsArticle
                  keyword="3"
                  image="static/product-9.jpg"
                  title="Comlogik announces the release of AnywhereMed – A simple but powerful Telemedicine App"
                  summary="New Telemedicine App Lets Patients Connect with Their Doctor via Secure System.
                  Comlogik, a healthcare software company building physician-first solutions, announced today
                  the launch of its web app, available for all browsers."
                  month="May"
                  day="4"
                ></NewsArticle>
                <NewsArticle
                  keyword="2"
                  image="static/news/news-2.jpg"
                  title="Comlogik wins bid for Tarlac Provincial Hospital HIS Project"
                  summary="Comlogik recently won the bid for the installation of HIMS in Tarlac Provincial Hospital. This
                  milestone comes after having implemented the 3 District Hospitals located in Concepcion,
                  Camiling and La Paz in record time. The Provincial Government…"
                  month="Apr"
                  day="6"
                ></NewsArticle>
                <NewsArticle
                  keyword="1"
                  image="static/news/news-1.jpg"
                  title="Cancellation of all PHA Regional Conferences due to COVID-19"
                  summary="PHA Board headed by Dr. Jaime A. Almora, MD, current president of this prestigious healthcare
                  organization recently announced the cancellation of all regional conferences due to the current
                  pandemic."
                  month="Mar"
                  day="10"
                ></NewsArticle>
              </Grid>
            </Column>
            {/* <Column width="1-5@m" className="uk-flex-first uk-flex-last@m">
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
                  <label className="uk-form-label uk-text-bold">
                    Filter Tags
                  </label>
                  <Grid
                    childWidth="1-1"
                    className="uk-grid-small uk-margin-small-top"
                  >
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
            </Column> */}
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default LatestNews;
