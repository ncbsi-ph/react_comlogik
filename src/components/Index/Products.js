import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a>
          <img data-src={this.props.image} data-uk-img=""></img>
        </a>
      </li>
    );
  }
}

class ProductDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top uk-height-medium">
            <img
              data-src={this.props.image}
              data-uk-cover=""
              data-uk-img=""
            ></img>
          </div>
          <div className="uk-card-body uk-flex uk-flex-column">
            <h4>{this.props.productName}</h4>
            <p>{this.props.productDescription}</p>
            <div>
              <a className="uk-button uk-button-primary">Learn more</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

class Products extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Add componentDidMount() to retrieve data dynamically
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
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-large uk-flex-middle" data-uk-grid="">
            <div className="uk-width-1-2">
              <div className="uk-child-width-1-1" data-uk-grid="">
                <div className="uk-flex uk-flex-column">
                  <h5>PRODUCTS</h5>
                  <h1>Software that really gets the job done</h1>
                  <p>
                    Out well-thought-out software solutions give you the tools
                    to get higher patient satisfaction and greater employee
                    productivity, in a way that will keep drive profitability.
                  </p>
                </div>
                <div>
                  <ul
                    className="uk-child-width-1-3"
                    data-uk-switcher={`connect: #${this.props.target}; animation: uk-animation-fade`}
                    data-uk-grid=""
                  >
                    {productIcons}
                  </ul>
                </div>
              </div>
            </div>
            <div className="uk-width-expand">
              <ul id={this.props.target} className="uk-switcher">
                {products}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
