import React from 'react';

const Map = () => {
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
};

export default Map;