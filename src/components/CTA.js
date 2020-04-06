import React, { Component } from 'react';

import { Section } from './Grid';

const CTA = () => {
  return (
  <div className="uk-section gradient-bg-dark">
    <div className="uk-container">
      <div className="uk-flex uk-flex-column uk-text-center">
        <h1 className="text-white">Let's grab a coffee together</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          congue nunc ac odio pulvinar, at varius nisl blandit.
        </p>
        <div>
          <button className="uk-button uk-button-primary uk-margin-right white-button">
            Request for a demo
          </button>
          <button className="uk-button white-outline">
            Send an inquiry
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CTA;
