import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div className="uk-section">
        <div className="uk-width-1-1">
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=comlogik%20business%20systems+(Comlogik%20Business%20Systems)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    );
  }
}
