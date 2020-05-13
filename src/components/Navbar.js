import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import search from '@iconify/icons-feather/search';
import mail from '@iconify/icons-feather/mail';
import menu from '@iconify/icons-feather/menu';
import UIkit from 'uikit';

const Navbar = () => {
  const offcanvasClick = () => {
    UIkit.offcanvas(document.getElementById('navigation')).hide();
  };

  return (
    <>
      <div
        data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-box-shadow-small; cls-inactive: uk-position-sticky uk-navbar-transparent"
        style={{ zIndex: 1000 }}
      >
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
                  <Link to="/contact-us">
                    <Icon icon={mail} width={24} height={24}></Icon>
                  </Link>
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
        <div className="uk-offcanvas-bar uk-box-shadow-medium">
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close=""
          ></button>
          <div className="uk-child-width-1-1" data-uk-grid="">
            <div>
              <ul className="uk-nav uk-nav-default">
                <li className="uk-parent">
                  <NavLink
                    exact
                    onClick={offcanvasClick}
                    to="/"
                    activeClassName="offcanvas-active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/about"
                    activeClassName="offcanvas-active"
                  >
                    About us
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/solutions"
                    activeClassName="offcanvas-active"
                  >
                    Solutions
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/clients"
                    activeClassName="offcanvas-active"
                  >
                    Clients
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/news"
                    activeClassName="offcanvas-active"
                  >
                    News
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/support"
                    activeClassName="offcanvas-active"
                  >
                    Support
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/contact-us"
                    activeClassName="offcanvas-active"
                  >
                    Contact us
                  </NavLink>
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
