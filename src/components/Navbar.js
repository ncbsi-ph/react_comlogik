import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import search from '@iconify/icons-feather/search';
import mail from '@iconify/icons-feather/mail';
import menu from '@iconify/icons-feather/menu';
import UIkit from 'uikit';

const Navbar = () => {
  const offcanvasClick = () => {
    UIkit.offcanvas(document.getElementById('navigation')).hide();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-position-sticky uk-navbar-transparent">
        <div className="uk-navbar-container">
          <div className="uk-container" data-uk-navbar="">
            <div className="uk-navbar-left">
              <Link to="/" className="uk-navbar-item uk-logo">
                <img className="logo" src="static/logo.png" />
              </Link>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li className="uk-parent">
                  <a>
                    <Icon icon={search} width={24} height={24}></Icon>
                  </a>
                </li>
                <li className="uk-parent">
                  <a>
                    <Icon icon={mail} width={24} height={24}></Icon>
                  </a>
                </li>
                <li className="uk-parent">
                  <a data-uk-toggle="target: #navigation">
                    <Icon icon={menu} width={24} height={24}></Icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="navigation" data-uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close=""
          ></button>
          <div className="uk-child-width-1-1" data-uk-grid="">
            <div>
              <ul className="uk-nav uk-nav-default">
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/">
                    Home
                  </Link>
                </li>
                <li className="uk-parent link">
                  <Link onClick={offcanvasClick} to="/about">
                    About
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/solutions">
                    Solutions
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/clients">
                    Clients
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/news">
                    News
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/support">
                    Support
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link onClick={offcanvasClick} to="/contact-us">
                    Contact us
                  </Link>
                </li>
                <li className="uk-parent">
                  <a>Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
