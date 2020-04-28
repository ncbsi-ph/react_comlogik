import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Grid, Column } from '../Grid';

const Showcase = () => {
  const idPrefix = 'product';
  const data = [
    {
      id: '1',
      productName: 'Hospital Information & Management System',
      image: 'static/product-1.png',
      description:
        'HIMS™ is a comprehensive, fully integrated, yet easy to use hospital information system for all hospital levels. HIMS™ is the first DOH Validated System and PhilHealth Certified that can be customized and can adapt to various hospital setup.',
    },
    {
      id: '2',
      productName: 'Clinic Information & Management System',
      image: 'static/product-2.png',
      description:
        'CIMS™ is an all-in-one clinic information system that is both a turnkey and customizable solution for your clinic or diagnostic center. CIMS™ guarantees billing efficiency while storing real- time patient data resulting to a more improved patient and users experience.',
    },
    {
      id: '3',
      productName: 'Claims Assure™',
      image: 'static/product-3.png',
      description:
        'Claims Assure™ is a PhilHealth certified electronic claims transmittal software that enables any healthcare accredited institution to send paperless patient claims. It allows users to manage and track receivables while monitoring status of claims all in a single window.',
    },
    {
      id: '4',
      productName: 'Comlogik EMR™',
      image: 'static/product-4.png',
      description:
        'Comlogik EMR™ is the industry leading solution that meets the stringent requirements of the Department of Health and likewise holds the distinction of being the FIRST DOH VALIDATED EMR SOFTWARE.',
    },
    {
      id: '5',
      productName: 'WorkBenchMD™',
      image: 'static/product-5.png',
      description:
        'WorkBenchMD™ is a revolutionary way of managing your clinic and gets you ready before your patient enters your door. From reception, it allows you to view patients records, history, medical images and results, appointments, create billing, SOAP and more.',
    },
    {
      id: '6',
      productName: 'Connect™',
      image: 'static/product-6.png',
      description:
        'Comlogik Connect™ is designed to run on a mobile device which remotely access key information from HIMS™. If you are a patient, doctor or owner of the hospital, Connect™ allows each one to do specific task without the hassle.',
    },
    {
      id: '7',
      productName: 'Financeforte™',
      image: 'static/product-7.png',
      description:
        'Financeforte™ is a full suite accounting and process- driven workflow software solutions for hospitals or healthcare companies, industries like School and other services. The system consists of a cohesive set of modules that can run on its own or seamlessly integrate with HIMS™.',
    },
    {
      id: '8',
      productName: 'Paymanager™',
      image: 'static/product-8.png',
      description:
        'Paymanager™ is your go to application when you want an end to end payroll system. Paymanager™ lets you manage unlimited schedules with multi- scheduling function, accommodate leave requests or generate needed reports in compliance with all government requirements.',
    },
  ];
  const links = [];
  const parallaxShowcase = [];
  const sliderItems = [];

  data.forEach((product) => {
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
          <div data-uk-slider="center: true">
            <div
              className="uk-position-relative uk-visible-toggle uk-light"
              tabIndex="-1"
            >
              <ul
                className="uk-slider-items uk-child-width-1-1"
                data-uk-grid=""
              >
                {sliderItems}
              </ul>
            </div>
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
