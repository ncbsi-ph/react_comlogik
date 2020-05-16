import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Product = (props) => {
  return (
    <li>
      <div className="active-product uk-flex uk-flex-middle">
        <a style={{ height: 70 }} className="uk-text-center uk-width-1-1">
          <img
            className="uk-height-1-1"
            data-src={props.image}
            data-uk-img=""
            style={{ objectFit: 'contain' }}
          />
        </a>
      </div>
    </li>
  );
};

const ProductDescription = ({
  image,
  productName,
  productDescription,
  link = null,
}) => {
  return (
    <li>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top uk-height-medium uk-flex uk-flex-middle uk-flex-center">
          <img
            data-src={image}
            data-uk-img=""
            className="uk-height-1-1"
            style={{ objectFit: 'scale-down' }}
          />
        </div>
        <div className="uk-card-body uk-flex uk-flex-column">
          <h4 className="uk-margin-remove-bottom">{productName}</h4>
          <p>{productDescription}</p>
          <div>
            <Link
              to={link !== null ? `/solutions${link}` : '/contact-us'}
              className="uk-button uk-button-primary"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

const Products = (props) => {
  const data = [
    {
      image: 'static/product-1.png',
      productName: 'Hospital Information & Management System',
      productDescription:
        'HIMS™ is a comprehensive, fully integrated, yet easy to use hospital information system for all hospital levels. HIMS™ is the first DOH Validated System and PhilHealth Certified that can be customized and can adapt to various hospital setup.',
      link: '/hims',
    },
    {
      image: 'static/product-2.png',
      productName: 'Clinic Information & Management System',
      productDescription:
        'CIMS™ is an all-in-one clinic information system that is both a turnkey and customizable solution for your clinic or diagnostic center. CIMS™ guarantees billing efficiency while storing real- time patient data resulting to a more improved patient and users experience.',
    },
    {
      image: 'static/product-3.png',
      productName: 'Claims Assure™',
      productDescription:
        'Claims Assure™ is a PhilHealth certified electronic claims transmittal software that enables any healthcare accredited institution to send paperless patient claims. It allows users to manage and track receivables while monitoring status of claims all in a single window.',
      link: '/claims-assure',
    },
    {
      image: 'static/product-4.png',
      productName: 'Comlogik EMR™',
      productDescription:
        'Comlogik EMR™ is the industry leading solution that meets the stringent requirements of the Department of Health and likewise holds the distinction of being the FIRST DOH VALIDATED SOFTWARE. Be compliant and get expert advice from our team of experts.',
      link: '/emr',
    },
    {
      image: 'static/product-5.png',
      productName: 'WorkBenchMD™',
      productDescription:
        'WorkBenchMD™ is a revolutionary way of managing your clinic and gets you ready before your patient enters your door. From reception, it allows you to view patients records, history, medical images and results, appointments, create billing, SOAP and more.',
    },
    {
      image: 'static/product-6.png',
      productName: 'Connect™',
      productDescription:
        'Comlogik Connect™ is designed to run on a mobile device which remotely access key information from HIMS™. If you are a patient, doctor or owner of the hospital, Connect™ allows each one to do specific task without the hassle.',
      link: '/connect',
    },
    {
      image: 'static/product-8.png',
      productName: 'Paymanager™',
      productDescription:
        'Paymanager™ is your go to application when you want an end to end payroll system. Paymanager™ lets you manage unlimited schedules with multi- scheduling function, accommodate leave requests or generate needed reports in compliance with all government requirements.',
    },
    {
      image: 'static/product-10.png',
      productName: 'HRIS WorkForce™',
      productDescription:
        'HRIS WorkForce™ provides you a modern way of managing your people, from the way you recruit, onboard and develop talent to the way you retain them. Be the employer you want to stay and grow with and foster a culture of high performance and career mobility through ongoing, consistent feedback, reviews, rewards and recognition.',
    },
    {
      image: 'static/product-9.jpg',
      productName: 'AnywhereMed Telemedicine',
      productDescription:
        'AnywhereMed is a fast and convenient way for patients to call and get in touch with a network of doctors affiliated to a hospital, explain your symptoms and get immediate medical advice before actually going to the hospital. This Telemedicine web- based application is developed to ensure that patient concerns are met especially in difficult situations such as inability to go to the hospital due to scheduling, distance, or critical conditions like the COVID-19 epidemic.',
    },
  ];
  const productIcons = [];
  const products = [];

  data.forEach((value) => {
    productIcons.push(
      <Product key={productIcons.length} image={value.image}></Product>
    );
    products.push(
      <ProductDescription
        key={products.length}
        image={value.image}
        productName={value.productName}
        productDescription={value.productDescription}
        link={value.link}
      ></ProductDescription>
    );
  });

  return (
    <Section className="gradient-bg-light">
      <Grid childWidth="1-1 1-2@m" className="uk-flex-middle">
        <Column>
          <Grid childWidth="1-1">
            <Column className="uk-flex uk-flex-column">
              <h5 className="meta uk-margin-remove-bottom">PRODUCTS</h5>
              <h1 className="margin-top-30">
                Software that really gets the job done
              </h1>
              <p className="uk-margin-bottom">
                Our well-thought-out software solutions give you the tools to
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
                <li className="uk-hidden">
                  <a>Hidden</a>
                </li>
                {productIcons}
              </ul>
            </Column>
          </Grid>
        </Column>
        <Column>
          <ul id={props.target} className="uk-switcher">
            <li>
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-height-medium">
                  <iframe
                    className="uk-height-1-1 uk-width-1-1"
                    src="https://www.youtube.com/embed/EmaCoql7iWg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="uk-card-body uk-flex uk-flex-column">
                  <p>
                    Our comprehensive suite of solutions and services provides
                    your organization with the integrated clinical, financial
                    and operational tools you need to provide better outcomes
                    across your entire system
                  </p>
                  <div>
                    <Link
                      to="/solutions"
                      className="uk-button uk-button-primary"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {products}
          </ul>
        </Column>
      </Grid>
    </Section>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
};

ProductDescription.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
};

Products.propTypes = {
  target: PropTypes.string.isRequired,
};

export default Products;
