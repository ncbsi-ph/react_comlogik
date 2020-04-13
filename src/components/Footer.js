import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import facebook from '@iconify/icons-entypo-social/facebook-with-circle';
import youtube from '@iconify/icons-entypo-social/youtube-with-circle';
import skype from '@iconify/icons-entypo-social/skype-with-circle';
import linkedIn from '@iconify/icons-entypo-social/linkedin-with-circle';

import { Section, Grid, Column } from './Grid';

const Address = () => {
  return (
    <Grid childWidth="1-1" className="uk-grid-row-small">
      <Column>
        <h5 className="meta">ADDRESS</h5>
      </Column>
      <Column>
        <p>2/F F & L Centre 2211 Commonwealth Avenue<br></br>Brgy. Holy Spirit, Quezon City<br></br>Philippines 1127</p>
      </Column>
      <Column>
        <Icon icon={phoneAlt} className="uk-margin-small-right"></Icon>
        8952-2589
      </Column>
      <Column>
        <Icon icon={phoneAlt} className="uk-margin-small-right"></Icon>
        8932-9421
      </Column>
      <Column>
        <Grid childWidth="auto" className="uk-grid-small">
          <Column>
            <a>
              <Icon icon={facebook} width={36} height={36}></Icon>
            </a>
          </Column>
          <Column>
            <a>
              <Icon icon={youtube} width={36} height={36}></Icon>
            </a>
          </Column>
          <Column>
            <a>
              <Icon icon={skype} width={36} height={36}></Icon>
            </a>
          </Column>
          <Column>
            <a>
              <Icon icon={linkedIn} width={36} height={36}></Icon>
            </a>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

const QuickLinks = () => {
  return (
    <Grid childWidth="1-1" className="uk-grid-small">
      <Column>
        <h5 className="meta">QUICK LINKS</h5>
      </Column>
      <Column>
        <a className="link">About us</a>
      </Column>
      <Column>
        <a className="link">Clients</a>
      </Column>
      <Column>
        <a className="link">Solutions</a>
      </Column>
      <Column>
        <a className="link">News</a>
      </Column>
      <Column>
        <a className="link">Support</a>
      </Column>
      <Column>
        <a className="link">Contact us</a>
      </Column>
    </Grid>
  );
};

const Solutions = () => {
  return (
    <Grid childWidth="1-1" className="uk-grid-row-small">
      <Column>
        <h5 className="meta">OUR SOLUTIONS</h5>
      </Column>
      <Column>
        <ul className="uk-list uk-list-bullet uk-column-1-2@m">
          <li>
            <a className="link">Hospital Information Management System</a>
          </li>
          <li>
            <a className="link">Clinic Information Management System</a>
          </li>
          <li>
            <a className="link">ClaimsAssure</a>
          </li>
          <li>
            <a className="link">Comlogik EMR</a>
          </li>
          <li>
            <a className="link">WorkbenchMD</a>
          </li>
          <li>
            <a className="link">Comlogik Connect</a>
          </li>
          <li>
            <a className="link">Financeforte</a>
          </li>
          <li>
            <a className="link">PayManager</a>
          </li>
          <li>
            <a className="link">WorkForce</a>
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
          <Column className="uk-margin-large-top">
            <Link to="/" className="uk-logo">
              <img src="static/logo.png" className="logo" />
            </Link>
          </Column>
          <Column>
            <Grid childWidth="1-1">
              <Column width="1-2@m 1-3@l">
                <Address />
              </Column>
              <Column width="1-2@m 1-5@l">
                <QuickLinks />
              </Column>
              <Column width="expand@l">
                <Solutions />
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Section>
      <div>
        <h6 className="uk-text-center uk-margin-top">
          COPYRIGHT © 2020, COMLOGIK BUSINESS SYSTEMS INC.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
