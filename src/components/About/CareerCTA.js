import React, { Component } from 'react';

export default class CareerCTA extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-width-1-1 uk-flex uk-flex-column">
            <h5 className="meta uk-margin-remove-bottom">CAREERS</h5>
            <h1 className="margin-top-30">Looking for a rewarding career with us?</h1>
            <p>
              Bonded by our mission and propelled by our innovative spirit, our
              work at Comlogik is collaborative, transformative, and above all,
              it’s meaningful. Our employees take pride in using technology and
              data-driven insights to inspire changes that will make the
              Philippine healthcare system better for everyone that may have an
              effect with your friends, family or even you.
            </p>
            <div className="uk-margin-medium-top">
              <a className="uk-button uk-button-primary">View careers</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
