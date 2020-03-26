import React from 'react';

<<<<<<< HEAD
export default class Map extends Component {
  render() {
    return (
      <div className="uk-section uk-padding-remove-bottom">
        <iframe
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    );
  }
}
=======
const Map = () => {
  return (
    <div className="uk-section">
      <iframe
        width="100%"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
>>>>>>> 2d3cb4f0a52a4b724dabfb923f7d02fb4723bdf5
