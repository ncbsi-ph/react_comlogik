import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import phoneAlt from '@iconify/icons-fa-solid/phone-alt';
import facebook from '@iconify/icons-entypo-social/facebook-with-circle';
import youtube from '@iconify/icons-entypo-social/youtube-with-circle';
import skype from '@iconify/icons-entypo-social/skype-with-circle';
import linkedIn from '@iconify/icons-entypo-social/linkedin-with-circle';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-bg">
        <div className="uk-container uk-section">
          <div className="uk-child-width-expand" data-uk-grid>
            <div className="uk-width-1-1">
              <Link to="/" className="uk-logo">
                <img className="logo" src="static/logo.png" />
              </Link>
            </div>
            <div>
              <ul className="uk-grid-row-small uk-child-width-1-1" data-uk-grid>
                <li>
                  <h5>ADDRESS</h5>
                </li>
                <li>
                  <p>2/F F & L Centre 2211 Commonwealth Avenue</p>
                </li>
                <li>
                  <p>Brgy. Holy Spirit, Quezon City</p>
                </li>
                <li>
                  <p>Philippines 1127</p>
                </li>
                <li>
                  <Icon
                    icon={phoneAlt}
                    className="uk-margin-small-right"
                  ></Icon>
                  8952-2589
                </li>
                <li>
                  <Icon
                    icon={phoneAlt}
                    className="uk-margin-small-right"
                  ></Icon>
                  8932-9421
                </li>
                <li>
                  <div
                    className="uk-grid-small uk-child-width-auto"
                    data-uk-grid
                  >
                    <div>
                      <a>
                        <Icon icon={facebook} width={36} height={36}></Icon>
                      </a>
                    </div>
                    <div>
                      <a>
                        <Icon icon={youtube} width={36} height={36}></Icon>
                      </a>
                    </div>
                    <div>
                      <a>
                        <Icon icon={skype} width={36} height={36}></Icon>
                      </a>
                    </div>
                    <div>
                      <a>
                        <Icon icon={linkedIn} width={36} height={36}></Icon>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-grid-row-small uk-flex-column" data-uk-grid>
                <li>
                  <h5>QUICK LINKS</h5>
                </li>
                <li>
                  <a className="link">About us</a>
                </li>
                <li>
                  <a className="link">Clients</a>
                </li>
                <li>
                  <a className="link">Solutions</a>
                </li>
                <li>
                  <a className="link">News</a>
                </li>
                <li>
                  <a className="link">Support</a>
                </li>
                <li>
                  <a className="link">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-1-2">
              <ul
                className="uk-grid-row-small uk-flex-column uk-column-1-2"
                data-uk-grid
              >
                <li>
                  <h5>OUR SOLUTIONS</h5>
                </li>
                <li>
                  <ul className="uk-list uk-list-bullet uk-column-1-2">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ribbon-bg uk-padding-small">
          <h6 className="uk-text-center uk-margin-remove-bottom">
            COPYRIGHT © 2020, COMLOGIK BUSINESS SYSTEMS INC.
          </h6>
        </div>
      </footer>
    );
  }
}
