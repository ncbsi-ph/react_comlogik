import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import check from '@iconify/icons-fe/check-circle';

export default class Values extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-1" data-uk-grid>
            <div>
              <div
                className="uk-grid-small uk-child-width-expand uk-flex-middle"
                data-uk-grid
              >
                <div className="uk-width-1-3">
                  <h2>Our Vision</h2>
                </div>
                <div>
                  <p>
                    To create an exceptional product that is affordable and easy
                    to use.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="uk-grid-small uk-child-width-expand uk-flex-middle"
                data-uk-grid
              >
                <div className="uk-width-1-3">
                  <h2>Our Mission</h2>
                </div>
                <div>
                  <p>
                    To offer effective solutions, provide top quality services
                    and giving our one hundred and ten percent (110%) for
                    customer satisfaction. To do this we must earn continuing
                    loyalty of customers by providing superior value in a way
                    that is profitable to us.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-grid-small uk-child-width-expand" data-uk-grid>
                <div className="uk-width-1-3">
                  <h2>Our Core Values</h2>
                </div>
                <div>
                  <div className="uk-child-width-1-1" data-uk-grid>
                    <div>
                      <div
                        className="uk-grid-small uk-child-width-expand"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <Icon
                            icon={check}
                            width={24}
                            height={24}
                            color="#9A2672"
                          ></Icon>
                        </div>
                        <div className="uk-flex uk-flex-column">
                          <h5 className="uk-margin-remove">Change the game</h5>
                          <p>
                            Deliver innovation that matters. Be what's next.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="uk-grid-small uk-child-width-expand"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <Icon
                            icon={check}
                            width={24}
                            height={24}
                            color="#9A2672"
                          ></Icon>
                        </div>
                        <div className="uk-flex uk-flex-column">
                          <h5 className="uk-margin-remove">
                            Elevate its purpose
                          </h5>
                          <p>
                            Build solutions to make people’s lives better while
                            making it beneficial to our customers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="uk-grid-small uk-child-width-expand"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <Icon
                            icon={check}
                            width={24}
                            height={24}
                            color="#9A2672"
                          ></Icon>
                        </div>
                        <div className="uk-flex uk-flex-column">
                          <h5 className="uk-margin-remove">
                            ‘Wow’ every customer
                          </h5>
                          <p>
                            Put the consumer at the center of everything we do.
                            Surpass expectations, every time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="uk-grid-small uk-child-width-expand"
                        data-uk-grid
                      >
                        <div className="uk-width-auto">
                          <Icon
                            icon={check}
                            width={24}
                            height={24}
                            color="#9A2672"
                          ></Icon>
                        </div>
                        <div className="uk-flex uk-flex-column">
                          <h5 className="uk-margin-remove">
                            Make a difference every day
                          </h5>
                          <p>
                            Constantly push ourselves to be our best, focus on
                            solutions, and arrive every day inspired to make an
                            impact through our talents, passion and hard work.
                          </p>
                        </div>
                      </div>
                    </div>
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
