import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import facebook from '@iconify/icons-entypo-social/facebook-with-circle';
import messenger from '@iconify/icons-fa-brands/facebook-messenger';
import { Section, Grid, Column } from './Grid';

const Address = () => {
  return (
    <div className="md:col-span-8 lg:col-span-4">
      <h5 className="meta">ADDRESS</h5>
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
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="md:col-span-4 lg:col-span-2">
      <h5 className="meta">QUICK LINKS</h5>
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
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="md:col-span-6 lg:col-span-4">
      <h5 className="meta">SOLUTIONS</h5>

      <ul className="uk-list">
        <li>
          <Link to="/solutions/hims" className="link">
            Hospital Information Management System
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="link">
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
          <Link to="/contact-us" className="link">
            WorkbenchMD
          </Link>
        </li>
        <li>
          <Link to="/solutions/connect" className="link">
            Comlogik Connect
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="link">
            PayManager
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="link">
            WorkForce
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="link">
            InstaP Survey
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className="link">
            eHealth Tracker
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <Section removePadding="top" className="footer-bg">
        <div className="my-10 space-y-12">
          <div className="grid justify-center">
            <Link to="/">
              <img src="static/logo.png" className="logo" />
            </Link>
          </div>

          <div className="grid gap-y-5 gap-x-2 md:grid-cols-12">
            <Address />
            <QuickLinks />
            <Solutions />
            <div className="grid justify-center md:col-span-6 lg:col-span-2">
              <a href="/static/dpo_dps.png" target="_blank">
                <img src="static/dpo_dps.png" width={150} alt="NPC Seal" />
              </a>
            </div>
          </div>
        </div>
      </Section>
      <div>
        <h6 className="uk-text-center uk-margin-top">
          COPYRIGHT © 2020 - {year}, COMLOGIK BUSINESS SYSTEMS INC.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
