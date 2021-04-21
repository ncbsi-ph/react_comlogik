import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import facebook from '@iconify/icons-entypo-social/facebook-with-circle';
import messenger from '@iconify/icons-fa-brands/facebook-messenger';
import { Section, Grid, Column } from './Grid';

const Address = () => {
  return (
    <Grid childWidth="1-1">
      <Column>
        <h5 className="meta">ADDRESS</h5>
      </Column>
      <Column>
        <ul className="uk-list">
          <li>
            <p className="uk-display-inline-block">
              2/F F & L Centre 2211 Commonwealth Avenue
              <br />
              Brgy. Holy Spirit, Quezon City
              <br />
              Philippines 1127
            </p>
          </li>
          <li>
            <Icon icon={phoneAlt} className="uk-margin-small-right"></Icon>
            8952-2589
          </li>
          <li>
            <Icon icon={phoneAlt} className="uk-margin-small-right"></Icon>
            8932-9421
          </li>
          <li>
            <Grid childWidth="auto" className="uk-grid-small">
              <Column>
                <a href="https://www.facebook.com/comlogikph/" target="_blank">
                  <Icon icon={facebook} width={36} height={36}></Icon>
                </a>
              </Column>
              <Column>
                <a href="https://www.m.me/comlogikph" target="_blank">
                  <Icon icon={messenger} width={36} height={36}></Icon>
                </a>
              </Column>
            </Grid>
          </li>
        </ul>
      </Column>
    </Grid>
  );
};

const QuickLinks = () => {
  return (
    <Grid childWidth="1-1">
      <Column>
        <h5 className="meta">QUICK LINKS</h5>
      </Column>
      <Column>
        <ul className="uk-list">
          <li>
            <Link to="/about" className="link">
              About us
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="link">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/clients" className="link">
              Clients
            </Link>
          </li>
          <li>
            <Link to="/news" className="link">
              News
            </Link>
          </li>
          <li>
            <Link to="/support" className="link">
              Support
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="link">
              Contact us
            </Link>
          </li>
        </ul>
      </Column>
    </Grid>
  );
};

const Solutions = () => {
  return (
    <Grid childWidth="1-1">
      <Column>
        <h5 className="meta">SOLUTIONS</h5>
      </Column>
      <Column>
        <ul className="uk-list">
          <li>
            <Link to="/solutions/hims" className="link">
              Hospital Information Management System
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="link">
              Clinic Information Management System
            </Link>
          </li>
          <li>
            <Link to="/solutions/claims-assure" className="link">
              ClaimsAssure
            </Link>
          </li>
          <li>
            <Link to="/solutions/emr" className="link">
              Comlogik EMR
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="link">
              WorkbenchMD
            </Link>
          </li>
          <li>
            <Link to="/solutions/connect" className="link">
              Comlogik Connect
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="link">
              PayManager
            </Link>
          </li>
          <li>
            <Link to="/solutions" className="link">
              WorkForce
            </Link>
          </li>
        </ul>
      </Column>
    </Grid>
  );
};

const Footer = () => {
  return (
    <footer>
      <Section removePadding="top" className="footer-bg">
        <Grid childWidth="1-1">
          <Column className="uk-margin-large-top uk-text-center">
            <Link to="/" className="uk-logo">
              <img src="static/logo.png" className="logo" />
            </Link>
          </Column>
          <Column>
            <Grid childWidth="1-1" className="uk-flex-center">
              <Column width="1-2@m 1-3@l">
                <Address />
              </Column>
              <Column width="1-2@m 1-5@l">
                <QuickLinks />
              </Column>
              <Column width="1-3@l">
                <Solutions />
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Section>
      <div>
        <h6 className="uk-text-center uk-margin-top">
          COPYRIGHT © 2021, COMLOGIK BUSINESS SYSTEMS INC.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
