import React, { useState, useRef, useEffect } from 'react';
import AutoSuggest from 'react-autosuggest';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import search from '@iconify/icons-feather/search';
import mail from '@iconify/icons-feather/mail';
import menu from '@iconify/icons-feather/menu';
import dropDownArrow from '@iconify/icons-fa-solid/angle-down';
import UIkit from 'uikit';

const Navbar = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const _suggestions = [
    {
      text: 'Index',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Solutions',
      link: '/solutions',
    },
    {
      text: 'Clients',
      link: '/clients',
    },
    {
      text: 'News',
      link: '/news',
    },
    {
      text: 'Support',
      link: '/support',
    },
    {
      text: 'Contact Us',
      link: '/contact-us',
    },
    {
      text: 'HIMS',
      link: '/solutions/hims',
    },
    {
      text: 'Hospital Information Management System',
      link: '/solutions/hims',
    },
    {
      text: 'EMR',
      link: '/solutions/emr',
    },
    {
      text: 'Electronics Charting',
      link: '/solutions/e-charting',
    },
    {
      text: 'AnywhereMed Telemedicine',
      link: '/solutions/anywheremed-telemedicine',
    },
    {
      text: 'eClaims',
      link: '/solutions/claims-assure',
    },
    {
      text: 'ClaimsAssure',
      link: '/solutions/claims-assure',
    },
    {
      text: 'Connect',
      link: '/solutions/connect',
    },
    {
      text: 'Mobile App',
      link: '/solutions/connect',
    },
  ];

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : _suggestions.filter(
          (suggestion) =>
            suggestion.text.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.text;

  const renderSuggestion = (suggestion) => <div>{suggestion.text}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (e, { suggestion }) => {
    const link = suggestion.link;
    history.push(link);
  };

  const inputProps = {
    type: 'search',
    className: 'uk-search-input',
    placeholder: 'Search',
    value: value,
    onChange: onChange,
  };

  const offcanvasClick = () => {
    UIkit.offcanvas(document.getElementById('navigation')).hide();
  };

  const [toggleDropDown, setToggleDropDown] = useState(false);

  const dropDownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!dropDownRef.current.contains(e.target)) {
      setToggleDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

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
                  <a className="uk-navbar-toggle">
                    <Icon icon={search} width={24} height={24}></Icon>
                  </a>
                  <div
                    className="uk-drop"
                    data-uk-drop="mode: click; pos: left-center; offset: 0"
                  >
                    <div className="uk-search uk-search-navbar uk-width-1-1">
                      <AutoSuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={
                          onSuggestionsFetchRequested
                        }
                        onSuggestionsClearRequested={
                          onSuggestionsClearRequested
                        }
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        onSuggestionSelected={onSuggestionSelected}
                        inputProps={inputProps}
                      />
                    </div>
                  </div>
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
      <div
        id="navigation"
        data-uk-offcanvas="flip: true; overlay: true"
        ref={dropDownRef}
      >
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
                    About Us
                  </NavLink>
                </li>
                <li
                  className={`uk-parent ${
                    toggleDropDown
                      ? 'transition-[height] duration-250 ease-in h-[301px] '
                      : 'transition-[height] duration-450 ease-out h-8'
                  }`}
                >
                  {/* <NavLink
                    onClick={offcanvasClick}
                    to="/solutions"
                    activeClassName="offcanvas-active"
                  >
                    Solutions
                  </NavLink> */}
                  <a
                    onClick={() => setToggleDropDown(!toggleDropDown)}
                    className={toggleDropDown ? 'text-[#666]' : ''}
                  >
                    Solution{' '}
                    <Icon icon={dropDownArrow} width={16} height={16}></Icon>
                  </a>

                  <ul
                    className={`grid gap-2 pl-4 text-sm ${
                      toggleDropDown
                        ? 'transition-[height] duration-300 ease-in h-[228px] transition-opacity opacity-100'
                        : 'transition-[height] duration-300 ease-out truncate h-0 transition-opacity opacity-0'
                    }`}
                  >
                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/solutions/hims"
                        activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        Hospital Information & Management System
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/contact-us/"
                        // activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        Clinic Information & Management System
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/solutions/claims-assure"
                        activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        Claims Assure
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/solutions/emr"
                        activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        Comlogik EMR
                      </NavLink>
                    </li>
                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/solutions/e-charting"
                        activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        Electronic Charting
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/contact-us/"
                        // activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        WorkbenchMD
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/contact-us/"
                        // activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        PayManager
                      </NavLink>
                    </li>

                    <li onClick={() => setToggleDropDown(false)}>
                      <NavLink
                        onClick={offcanvasClick}
                        to="/contact-us/"
                        // activeClassName="offcanvas-active"
                        className="uk-text-muted hover:text-[#666]"
                      >
                        WorkForce
                      </NavLink>
                    </li>

                  </ul>
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
                    to="/careers"
                    activeClassName="offcanvas-active"
                  >
                    Careers
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <NavLink
                    onClick={offcanvasClick}
                    to="/contact-us"
                    activeClassName="offcanvas-active"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="uk-parent">
                  <a
                    href="https://webmail.comlogik.com/?_task=mail&_mbox=INBOX"
                    target="_blank"
                  >
                    Webmail
                  </a>
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
