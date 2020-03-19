import React, { Component } from 'react';

export default class CTA extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex uk-flex-column">
            <h1 className="uk-text-center">Let's grab a coffee together</h1>
            <p className="uk-text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              congue nunc ac odio pulvinar, at varius nisl blandit.
            </p>
            <div className="uk-text-center">
              <button className="uk-button uk-button-primary uk-margin-right">
                Request for a demo
              </button>
              <button className="uk-button uk-button-default">
                Send an inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
