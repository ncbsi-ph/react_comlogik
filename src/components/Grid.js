import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  let classes = props.className;
  if (props.removePadding !== '') {
    classes = classes
      .concat(' ')
      .concat(`uk-padding-remove-${props.removePadding}`);
  }
  classes = classes.trim();

  if (!props.container) {
    return (
      <div className={`uk-section ${classes}`} style={props.style}>
        {props.children}
      </div>
    );
  }

  return (
    <div className={`uk-section ${classes}`} style={props.style}>
      <div className="uk-container">{props.children}</div>
    </div>
  );
};

const Grid = (props) => {
  let classes = props.className;
  if (props.childWidth !== '') {
    const childWidth = props.childWidth.split(' ');
    if (childWidth.length) {
      childWidth.forEach((width) => {
        classes = classes.concat(' ').concat(`uk-child-width-${width}`);
      });
    }
  }
  classes = classes.trim();

  return (
    <div
      className={classes}
      data-uk-grid={`masonry: ${props.masonry}; parallax: ${props.parallax}`}
    >
      {props.children}
    </div>
  );
};

const Column = (props) => {
  let classes = props.className;
  if (props.width !== '') {
    const width = props.width.split(' ');
    if (width.length) {
      width.forEach((_width) => {
        classes = classes.concat(' ').concat(`uk-width-${_width}`);
      });
    }
  }
  classes = classes.trim();

  return (
    <div className={classes} style={props.style}>
      {props.children}
    </div>
  );
};

// Property types

Section.propTypes = {
  className: PropTypes.string,
  removePadding: PropTypes.string,
  style: PropTypes.object,
  container: PropTypes.bool,
};

Grid.propTypes = {
  className: PropTypes.string,
  childWidth: PropTypes.string,
  masonry: PropTypes.bool,
  parallax: PropTypes.number,
};

Column.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
};

// Default values for properties

Section.defaultProps = {
  className: '',
  removePadding: '',
  style: {},
  container: true,
};

Grid.defaultProps = {
  className: '',
  childWidth: '',
  masonry: false,
  parallax: 0,
};

Column.defaultProps = {
  className: '',
  style: {},
  width: '',
};

export { Section, Grid, Column };
