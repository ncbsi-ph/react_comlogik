import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, removePadding, container, style, children }) => {
  let classes = className;

  if (removePadding !== '') {
    classes = classes.concat(' ').concat(`uk-padding-remove-${removePadding}`);
  }

  classes = classes.trim();

  if (!container) {
    return (
      <div className={`uk-section ${classes}`} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div className={`uk-section ${classes}`} style={style}>
      <div className="uk-container">{children}</div>
    </div>
  );
};

const Grid = ({
  className,
  childWidth,
  masonry,
  parallax,
  style,
  children,
}) => {
  let classes = className;

  if (childWidth !== '') {
    const _childWidth = childWidth.split(' ');

    if (_childWidth.length) {
      _childWidth.forEach((width) => {
        classes = classes.concat(' ').concat(`uk-child-width-${width}`);
      });
    }
  }

  classes = classes.trim();

  return (
    <div
      className={classes}
      data-uk-grid={`masonry: ${masonry}; parallax: ${parallax}`}
      style={style}
    >
      {children}
    </div>
  );
};

const Column = ({ className, width, style, children }) => {
  let classes = className;

  if (width !== '') {
    const widths = width.split(' ');
    if (widths.length) {
      widths.forEach((_width) => {
        classes = classes.concat(' ').concat(`uk-width-${_width}`);
      });
    }
  }

  classes = classes.trim();

  return (
    <div className={classes} style={style}>
      {children}
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
  style: PropTypes.object,
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
  style: {},
};

Column.defaultProps = {
  className: '',
  style: {},
  width: '',
};

export { Section, Grid, Column };
