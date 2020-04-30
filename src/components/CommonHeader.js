import React from 'react';
import PropTypes from 'prop-types';

import { Section, Grid, Column } from './Grid';

const CommonHeader = props => {
  let image = <img src={props.image}></img>;
  if (props.svg) {
    image = (
      <img src={props.image} className="uk-preserve" data-uk-svg=""></img>
    );
  }

  return (
    <Section>
      <img className="logo-bg" src="static/logo-bg.svg" />
      <Grid childWidth="1-1 1-2@m" className="uk-grid-large uk-flex-middle">
        <Column>{image}</Column>
        <Column className="uk-flex uk-flex-column">
          <h5 className="meta uk-margin-remove-bottom">{props.label}</h5>
          <h2 className="margin-top-30">{props.heading}</h2>
          <p className="uk-margin-medium-top">{props.sentence}</p>
        </Column>
      </Grid>
    </Section>
  );
};

CommonHeader.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  heading: PropTypes.string,
  sentence: PropTypes.string,
  svg: PropTypes.bool
};

CommonHeader.defaultProps = {
  svg: false
};

export default CommonHeader;
