import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
export default class Products extends Component {
  render() {
    return (
      <div className="uk-section products-bg">
        <div className="uk-container">
          <div className="uk-grid-large uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2">
              <div className="uk-child-width-1-1" data-uk-grid>
                <div className="uk-flex uk-flex-column uk-margin-medium-bottom">
                  <h5 className="uk-margin-remove-bottom meta">PRODUCTS</h5>
                  <h1 className="margin-top-30">Software that really gets the job done</h1>
                  <p>
                    Out well-thought-out software solutions give you the tools
                    to get higher patient satisfaction and greater employee
                    productivity, in a way that will keep drive profitability.
                  </p>
                </div>
                <div className="uk-margin-small-top">
                  <div className="uk-child-width-1-3" data-uk-grid>
                    <div>
                      <div className="active-product">
                        <a>
                          <img src="static/product-1.png"></img>
                        </a>
                      </div>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-2.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-3.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-4.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-5.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-6.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-7.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-8.png"></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-expand">
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-height-medium">
                  <img src="https://picsum.photos/500" data-uk-cover></img>
                </div>
                <div className="uk-card-body uk-flex uk-flex-column">
                  <h4 className="uk-margin-remove-bottom">Hospital Information & Management System</h4>
                  <p>
                    HIMS™ is a comprehensive, fully integrated, yet easy to use
                    hospital information system for all hospital levels. HIMS™
                    is the first DOH Validated System and PhilHealth Certified
                    that can be customized and can adapt to various hospital
                    setup
                  </p>
                  <div className="uk-margin-small-top">
                    <a className="uk-button uk-button-primary">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
=======
import { Section, Grid, Column } from '../Grid';

const Product = props => {
  return (
    <li>
      <a>
        <img data-src={props.image} data-uk-img=""></img>
      </a>
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
          <h4>{props.productName}</h4>
          <p>{props.productDescription}</p>
          <div>
            <a className="uk-button uk-button-primary">Learn more</a>
>>>>>>> 2d3cb4f0a52a4b724dabfb923f7d02fb4723bdf5
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
    <Section>
      <Grid childWidth="expand">
        <Column width="1-2">
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5>PRODUCTS</h5>
              <h1 className="uk-margin-remove">
                Software that really gets the job done
              </h1>
              <p>
                Out well-thought-out software solutions give you the tools to
                get higher patient satisfaction and greater employee
                productivity, in a way that will keep drive profitability.
              </p>
            </Column>
            <Column>
              <ul
                className="uk-child-width-1-3"
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
