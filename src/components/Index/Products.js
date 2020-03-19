import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-large uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2">
              <div className="uk-child-width-1-1" data-uk-grid>
                <div className="uk-flex uk-flex-column">
                  <h5>PRODUCTS</h5>
                  <h1>Software that really gets the job done</h1>
                  <p>
                    Out well-thought-out software solutions give you the tools
                    to get higher patient satisfaction and greater employee
                    productivity, in a way that will keep drive profitability.
                  </p>
                </div>
                <div>
                  <div className="uk-child-width-1-3" data-uk-grid>
                    <div>
                      <a>
                        <img src="static/product-1.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-2.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-3.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-4.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-5.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-6.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-7.png"></img>
                      </a>
                    </div>
                    <div>
                      <a>
                        <img src="static/product-8.png"></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-width-expand">
              <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-height-medium">
                  <img src="https://picsum.photos/500" data-uk-cover></img>
                </div>
                <div className="uk-card-body uk-flex uk-flex-column">
                  <h4>Hospital Information & Management System</h4>
                  <p>
                    HIMS™ is a comprehensive, fully integrated, yet easy to use
                    hospital information system for all hospital levels. HIMS™
                    is the first DOH Validated System and PhilHealth Certified
                    that can be customized and can adapt to various hospital
                    setup
                  </p>
                  <div>
                    <a className="uk-button uk-button-primary">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
