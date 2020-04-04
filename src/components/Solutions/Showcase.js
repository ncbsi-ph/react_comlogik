import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Showcase = () => {
  const idPrefix = 'product';
  const data = [
    {
      id: '1',
      productName: 'Comlogik EMR',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '2',
      productName: 'ClaimsAssure',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '3',
      productName: 'Hospital Information Management System',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '4',
      productName: 'Clinic Management System',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '5',
      productName: 'Hotel Management System',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '6',
      productName: 'Booking Web System',
      image: 'https://via.placeholder.com/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
  const links = [];
  const parallaxShowcase = [];
  const sliderItems = [];

  data.forEach(product => {
    const id = `${idPrefix}${product.id}`;
    links.push(
      <li key={links.length}>
        <a href={`#${id}`}>{product.productName}</a>
      </li>
    );
    parallaxShowcase.push(
      <Column key={parallaxShowcase.length}>
        <div
          className="uk-flex uk-flex-middle uk-flex-center"
          id={id}
          data-uk-height-viewport=""
        >
          <div
            className="uk-child-width-auto uk-flex-right uk-grid-row-small"
            data-uk-grid=""
            data-uk-parallax="opacity: 0, 1; viewport: 0.5"
          >
            <div>
              <img src={product.image}></img>
            </div>
            <div>
              <p className="uk-margin-large-left uk-text-right">
                {product.description}
              </p>
            </div>
            <div>
              <Link
                to="/product-content"
                className="uk-button uk-button-primary uk-margin-top"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </Column>
    );
    sliderItems.push(
      <li key={sliderItems.length}>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top uk-cover-container uk-height-small">
            <img src={product.image} data-uk-cover=""></img>
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{product.productName}</h3>
            <p>{product.description}</p>
            <Link to="/product-content" className="uk-button uk-button-primary">
              Learn more
            </Link>
          </div>
        </div>
      </li>
    );
  });

  return (
    <Section>
      <Grid childWidth="1-1">
        <Column className="uk-hidden@m">
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex="-1"
            data-uk-slider="center: true"
          >
            <ul className="uk-slider-items uk-child-width-3-4" data-uk-grid="">
              {sliderItems}
            </ul>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>
        </Column>
        <Column className="uk-visible@m">
          <Grid childWidth="1-2">
            <div data-uk-height-viewport="">
              <div data-uk-sticky="offset: 20vh; bottom: true">
                <h3>Our Products</h3>
                <ul
                  className="uk-nav uk-nav-primary products-nav"
                  data-uk-scrollspy-nav="closest: li; scroll: true"
                >
                  {links}
                </ul>
              </div>
            </div>
            <Column>
              <Grid childWidth="1-1">{parallaxShowcase}</Grid>
            </Column>
          </Grid>
        </Column>
      </Grid>
    </Section>
  );
};

export default Showcase;
