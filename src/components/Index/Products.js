import React from 'react';
import PropTypes from 'prop-types';

import { Section, Grid, Column } from '../Grid';

const Product = props => {
  return (
    <li>
      <div className="active-product uk-flex uk-flex-middle">
        <a>
          <img data-src={props.image} data-uk-img=""></img>
        </a>
      </div>
    </li>
  );
};

const ProductDescription = props => {
  return (
    <li>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-height-medium">
          <img data-src={props.image} data-uk-cover="" data-uk-img=""></img>
        </div>
        <div className="uk-card-body uk-flex uk-flex-column">
          <h4 className="uk-margin-remove-bottom">{props.productName}</h4>
          <p>{props.productDescription}</p>
          <div>
            <a className="uk-button uk-button-primary">Learn more</a>
          </div>
        </div>
      </div>
    </li>
  );
};

const Products = props => {
  const data = [
    {
      image: 'static/product-1.png',
      productName: 'Product 1',
      productDescription: 'Description 1'
    },
    {
      image: 'static/product-2.png',
      productName: 'Product 2',
      productDescription: 'Description 2'
    },
    {
      image: 'static/product-3.png',
      productName: 'Product 3',
      productDescription: 'Description 3'
    },
    {
      image: 'static/product-4.png',
      productName: 'Product 4',
      productDescription: 'Description 4'
    },
    {
      image: 'static/product-5.png',
      productName: 'Product 5',
      productDescription: 'Description 5'
    },
    {
      image: 'static/product-6.png',
      productName: 'Product 6',
      productDescription: 'Description 6'
    },
    {
      image: 'static/product-7.png',
      productName: 'Product 7',
      productDescription: 'Description 7'
    },
    {
      image: 'static/product-8.png',
      productName: 'Product 8',
      productDescription: 'Description 8'
    }
  ];
  const productIcons = [];
  const products = [];

  data.forEach(value => {
    productIcons.push(
      <Product key={productIcons.length} image={value.image}></Product>
    );
    products.push(
      <ProductDescription
        key={products.length}
        image="https://picsum.photos/500"
        productName={value.productName}
        productDescription={value.productDescription}
      ></ProductDescription>
    );
  });

  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1 1-2@m">
        <Column>
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5 className="meta uk-margin-remove-bottom">PRODUCTS</h5>
              <h1 className="margin-top-30">
                Software that really gets the job done
              </h1>
              <p className="uk-margin-bottom">
                Out well-thought-out software solutions give you the tools to
                get higher patient satisfaction and greater employee
                productivity, in a way that will keep drive profitability.
              </p>
            </Column>
            <Column>
              <ul
                className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small"
                data-uk-switcher={`connect: #${props.target}; animation: uk-animation-fade`}
                data-uk-grid=""
              >
                {productIcons}
              </ul>
            </Column>
          </Grid>
        </Column>
        <Column>
          <ul id={props.target} className="uk-switcher">
            {products}
          </ul>
        </Column>
      </Grid>
    </Section>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired
};

ProductDescription.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired
};

Products.propTypes = {
  target: PropTypes.string.isRequired
};

export default Products;
