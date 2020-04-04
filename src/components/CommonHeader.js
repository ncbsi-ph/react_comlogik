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
      <Grid childWidth="1-1 1-2@m" className="uk-grid-large uk-flex-middle">
        <Column>{image}</Column>
        <Column className="uk-flex uk-flex-column">
          <h5>{props.label}</h5>
          <h1 className="uk-margin-remove">{props.heading}</h1>
          <p>{props.sentence}</p>
        </Column>
      </Grid>
    </Section>
  );
};

CommonHeader.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
  svg: PropTypes.bool
};

CommonHeader.defaultProps = {
  svg: false
};

export default CommonHeader;
