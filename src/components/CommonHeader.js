import React, { Component } from 'react';

export default class CommonHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let image = <img src={this.props.image}></img>;
    if (this.props.svg) {
      image = (
        <img
          className="uk-preserve"
          src={this.props.image}
          data-uk-svg=""
        ></img>
      );
    }
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid-large uk-flex-middle" data-uk-grid>
            <div className="uk-width-1-2">{image}</div>
            <div className="uk-width-expand uk-flex uk-flex-column">
              <h5>{this.props.label}</h5>
              <h1>{this.props.heading}</h1>
              <p>{this.props.sentence}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommonHeader.defaultProps = {
  svg: false
};
