import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Column } from '../Grid';

const LogoCarousel = props => {
  return (
    <Grid childWidth="1-1">
      <Column>
        <div data-uk-slider="center: true; autoplay: true; autoplay-interval: 3000">
          <div className="uk-slider-container">
            <ul className="uk-slider-items uk-flex-middle" data-uk-grid="">
              {props.logos.map((logo, index) => (
                <li key={index}>
                  <img data-src={logo} width="160" data-uk-img=""></img>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Column>
    </Grid>
  );
};

LogoCarousel.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string)
};

LogoCarousel.defaultProps = {
  logos: []
};

export default LogoCarousel;
