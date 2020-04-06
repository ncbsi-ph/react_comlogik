import React, { Component } from 'react';

class Stat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className="uk-grid-small uk-child-width-1-1 uk-flex-column uk-flex-center"
          data-uk-grid
        >
          <div className="uk-text-center">
            <img
              className="uk-preserve"
              src={this.props.image}
              data-uk-svg=""
            ></img>
          </div>
          <div>
            <h2 className="uk-text-center text-bold text-primary">{this.props.count}</h2>
          </div>
          <div>
            <h5 className="uk-text-center text-primary">{this.props.caption}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default class Statistics extends Component {
  render() {
    return (
      <div className="uk-section gray-bg">
        <div className="uk-container">
          <div className="uk-child-width-expand" data-uk-grid>
            <Stat
              image="static/stat-1.svg"
              count="200+"
              caption="PARTNER HOSPITALS & CLINICS"
            ></Stat>
            <Stat
              image="static/stat-2.svg"
              count="20"
              caption="SUCCESSFUL YEARS IN THE INDUSTRY"
            ></Stat>
            <Stat
              image="static/stat-3.svg"
              count="300+"
              caption="DOCTORS TRUST OUR SERVICES"
            ></Stat>
            <Stat
              image="static/stat-4.svg"
              count="20+"
              caption="AWARDS & RECOGNITIONS RECEIVED"
            ></Stat>
          </div>
        </div>
      </div>
    );
  }
}
