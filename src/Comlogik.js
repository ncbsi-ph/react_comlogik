import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import { Section, Grid, Column } from './components/Grid';
import Scroll from './components/Scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const Index = Loadable({
  loader: () => import('./pages/Index'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});

const Careers = Loadable({
  loader: () => import('./pages/Careers'),
  loading: Loading,
});

const Clients = Loadable({
  loader: () => import('./pages/Clients'),
  loading: Loading,
});

const CaseStudyContent = Loadable({
  loader: () => import('./pages/CaseStudyContent'),
  loading: Loading,
});

const Support = Loadable({
  loader: () => import('./pages/Support'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./pages/Contact'),
  loading: Loading,
});

const Solutions = Loadable({
  loader: () => import('./pages/Solutions'),
  loading: Loading,
});

const News = Loadable({
  loader: () => import('./pages/News'),
  loading: Loading,
});

const NewsContent = Loadable({
  loader: () => import('./pages/NewsContent'),
  loading: Loading,
});

const ProductContent = Loadable({
  loader: () => import('./pages/ProductContent'),
  loading: Loading,
});

const Comlogik = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Router
      basename={
        process.env.NODE_ENV === 'development'
          ? process.env.ROUTER_BASENAME
          : ''
      }
    >
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
          <Column className="uk-flex uk-flex-right">
            <button
              type="button"
              data-uk-close=""
              onClick={handleClose}
            ></button>
          </Column>
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
      <MessengerCustomerChat
        pageId="138923622799419"
        appId="2542856289298560"
        themeColor="#4983d0"
        loggedInGreeting="Hello there! We're here to help. What can we do for you?"
        loggedOutGreeting="Hello there! We're here to help. What can we do for you?"
      />
      <Scroll />
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="ComlogikConsent"
        style={{ backgroundColor: '#394049' }}
        buttonClasses="uk-button uk-button-small uk-button-primary"
        buttonStyle={{
          color: 'white',
          backgroundColor: '#cc3396',
          fontSize: '13px',
          borderRadius: '4px',
        }}
        debug={process.env.NODE_ENV === 'development' ? true : false}
        expires={150}
      >
        Our website uses cookies to enhance your browsing experience.
      </CookieConsent>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/clients">
          <Clients />
        </Route>
        <Route exact path="/clients/:client">
          <CaseStudyContent />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/contact-us">
          <Contact />
        </Route>
        <Route exact path="/solutions">
          <Solutions />
        </Route>
        <Route exact path="/solutions/:product">
          <ProductContent />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/news/:id">
          <NewsContent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Comlogik;
