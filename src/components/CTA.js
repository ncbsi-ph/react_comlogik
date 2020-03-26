import React, { Component } from 'react';

import { Section } from './Grid';

const CTA = () => {
  return (
    <Section>
      <div className="uk-flex uk-flex-column uk-text-center">
        <h1>Let's grab a coffee together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          congue nunc ac odio pulvinar, at varius nisl blandit.
        </p>
        <div>
          <button className="uk-button uk-button-primary uk-margin-right">
            Request for a demo
          </button>
          <button className="uk-button primary-outline">
            Send an inquiry
          </button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
