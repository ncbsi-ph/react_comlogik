import React, { Component } from 'react';

export default class Team extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-child-width-1-2 uk-flex-middle" data-uk-grid>
            <div>
              <img src="static/team.gif"></img>
            </div>
            <div className="uk-flex uk-flex-column">
              <h5>ABOUT</h5>
              <h1>Meet our awesome team</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum finibus nulla quis ligula auctor, at pretium orci
                eleifend. Maecenas non lacus eget massa pretium ornare in at
                ante. Cras id posuere eros. Ut tempus ex ut mi tristique mollis.
                Suspendisse ac elit non nunc consequat molestie quis in nisl.
              </p>
              <div>
                <a className="uk-button uk-button-primary">Join our team</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
