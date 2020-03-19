import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-1" data-uk-grid>
            <div>
              <div
                className="uk-grid-medium uk-child-width-expand uk-flex-middle"
                data-uk-grid
              >
                <div className="uk-width-1-2 uk-flex uk-flex-column">
                  <h5>TESTIMONIALS</h5>
                  <h1>Your success is our success too</h1>
                </div>
                <div>
                  <p>
                    Our clients are some of the most innovative in health care.
                    They range from industry-leading accountable care
                    organizations, to top academic medical institutions, to
                    critical access hospitals providing quality rural care. When
                    they move the meter in health care – increasing quality of
                    care, reducing waste, and lowering costs – we celebrate
                    their efforts and share the wisdom gained by their success.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
