import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2">
              <div className="uk-flex uk-flex-column">
                <h1>Beyond Just Information</h1>
                <p>
                  Comlogik is the single source solution provider to all your
                  healthcare information technology needs.
                </p>
                <div>
                  <button className="uk-button uk-button-primary uk-margin-right">
                    Request a demo
                  </button>
                  <button className="uk-button uk-button-default">
                    Comlogik Ecosystem
                  </button>
                </div>
              </div>
            </div>
            <div className="uk-width-expand">
              <img src="static/landing-img.gif"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
