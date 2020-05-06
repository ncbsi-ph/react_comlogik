import React from 'react';
import { Link } from 'react-router-dom';

import { Section } from '../Grid';

const Breadcrumb = () => {
  return (
    <Section className="gradient-bg-light">
      <h1 className="uk-text-center">News</h1>
      <div className="uk-flex uk-flex-center uk-margin-top">
        <ul className="uk-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Breadcrumb;
