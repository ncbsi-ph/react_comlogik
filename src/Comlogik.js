import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Grid, Column } from './components/Grid';
import Loading from './components/Loading';
import Scroll from './components/Scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { isDev, apiUrl } from './helpers/helpers';

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

const CaseStudyContent = Loadable({
  loader: () => import('./pages/CaseStudyContent'),
  loading: Loading,
});

const Clients = Loadable({
  loader: () => import('./pages/Clients'),
  loading: Loading,
});

const CovidSystems = Loadable({
  loader: () => import('./pages/CovidSystems'),
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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl()}news`)
      .then((response) => {
        const data = response.data.data;
        setData(data.news);
      })
      .catch((error) => {});
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Router basename={isDev() ? process.env.DEV_ROUTER_BASENAME : ''}>
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
            width: '1000px',
            maxWidth: 'calc(100% - 0.01px)',
          },
        }}
      >
        <Grid childWidth="1-1">
          <Column className="uk-flex uk-flex-right">
            <button type="button" data-uk-close="" onClick={handleClose} />
          </Column>
          <Column>
            <div
              className="uk-position-relative"
              tabIndex="-1"
              data-uk-slider=""
            >
              <ul
                className="uk-slider-items uk-child-width-1-1 uk-visible-toggle uk-light"
                data-uk-grid=""
              >
                <li>
                  <Grid childWidth="1-1">
                    <Column>
                      <div
                        className="flex p-10"
                        style={{
                          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(174, 223, 241, 0.73)), url('static/ad.jpg')`,
                          backgroundPosition: 'left',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          height: '600px',
                        }}
                      >
                        <Grid
                          className="content-center w-full lg:w-3/4"
                          childWidth="1-1"
                        >
                          <Column>
                            <h3>
                              Comlogik has the solutions to help you react
                              quickly, pull through and be ahead during times of
                              crisis.
                            </h3>
                          </Column>
                          <Column>
                            <Link
                              onClick={handleClose}
                              to={`/solutions`}
                              className="border-0 uk-button uk-button-primary"
                            >
                              Learn more
                            </Link>
                          </Column>
                          <Column>
                            <h4>
                              There’s nothing wrong with being overprepared
                              especially when it comes to healthcare.
                            </h4>
                          </Column>
                          <Column>
                            <p className="text-gray-800">
                              You are accountable for keeping in place the needs
                              of a business without compromising the care of
                              human life. Our goal is to help make it all
                              possible. Comlogik is your “custom-fit” healthcare
                              IT partner. We adjust to your needs, promoting
                              interoperability, improving quality at the point
                              of care resulting to a better quality, safety and
                              efficient treatment.
                            </p>
                          </Column>
                        </Grid>
                      </div>
                    </Column>
                  </Grid>
                </li>
                {data.length > 1 ? (
                  data.map((news) => {
                    if (news.isBreakingNews)
                      return (
                        <li key={news.id}>
                          <Grid childWidth="1-1">
                            <Column>
                              <img src={news.image} />
                            </Column>
                            <Column>
                              <h3 className="uk-margin-remove">{news.title}</h3>
                            </Column>
                            <Column className="uk-margin-top">
                              <Link
                                onClick={handleClose}
                                to={`/news/${news.id}`}
                                className="uk-button uk-button-primary"
                              >
                                Read more
                              </Link>
                            </Column>
                          </Grid>
                        </li>
                      );
                  })
                ) : (
                  <li>
                    <div className="uk-flex uk-flex-center">
                      <div data-uk-spinner="ratio: 3"></div>
                    </div>
                  </li>
                )}
              </ul>
              <a
                className="uk-position-center-left uk-hidden-hover"
                data-uk-slidenav-previous=""
                data-uk-slider-item="previous"
              ></a>
              <a
                className="uk-position-center-right uk-hidden-hover"
                data-uk-slidenav-next=""
                data-uk-slider-item="next"
              ></a>
            </div>
          </Column>
        </Grid>
      </ReactModal>
      <MessengerCustomerChat
        pageId="138923622799419"
        appId="2542856289298560"
        themeColor="#4983d0"
        loggedInGreeting="Hi! How can we help you today?"
        loggedOutGreeting="Hi! How can we help you today?"
        shouldShowDialog={true}
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
        debug={isDev() ? true : false}
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
        <Route exact path="/covid">
          <CovidSystems />
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
