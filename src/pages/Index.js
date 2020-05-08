import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

import { Grid, Column } from '../components/Grid';

import Landing from '../components/Index/Landing';
import Clients from '../components/Index/Clients';
import Advantages from '../components/Index/Advantages';
import Products from '../components/Index/Products';
import Team from '../components/Index/Team';
import Testimonials from '../components/Index/Testimonials';
import CTA from '../components/CTA';
import Map from '../components/Map';

const Index = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={handleClose}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        className="uk-margin-auto-vertical uk-padding uk-box-shadow-medium"
        style={{
          overlay: {
            padding: '50px 30px',
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            overflowY: 'auto',
          },
          content: {
            borderRadius: '4px',
            backgroundColor: 'white',
            outline: 0,
            overflowY: 'auto',
            transform: 'translateY(0)',
            boxSizing: 'border-box',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            marginTop: 'auto',
            marginBottom: 'auto',
            margin: '0 auto',
            position: 'relative',
            width: '500px',
            maxWidth: 'calc(100% - 0.01px)',
          },
        }}
      >
        <Grid childWidth="1-1">
          <Column>
            <img src="static/news/covid19.jpg" />
          </Column>
          <Column>
            <h3 className="uk-margin-remove">
              Amidst COVID-19 pandemic, Comlogik offers support to clients and
              partners nationwide
            </h3>
          </Column>
          <Column className="uk-margin-top">
            <Link to="/news/covid19" className="uk-button uk-button-primary">
              Read more
            </Link>
          </Column>
        </Grid>
      </ReactModal>
      <Landing />
      <Clients />
      <Advantages />
      <Products target="products" />
      <Team />
      {/* <Testimonials /> */}
      <CTA />
      <Map />
    </>
  );
};

export default Index;
