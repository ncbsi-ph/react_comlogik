import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let removePadding = '';
    if (this.props.removePadding !== null && this.props.removePadding !== '') {
      removePadding = `uk-padding-remove-${this.props.removePadding}`;
    }
    if (!this.props.container) {
      return (
        <div className={`uk-section ${removePadding}`}>
          {this.props.children}
        </div>
      );
    }
    return (
      <div className={`uk-section ${removePadding}`}>
        <div className="uk-container">{this.props.children}</div>
      </div>
    );
  }
}

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childWidth = this.props.childWidth.toString();
    let classes = this.props.className.toString();
    if (childWidth !== null && childWidth !== '') {
      classes = classes
        .concat(' ')
        .concat(`uk-child-width-${childWidth}`)
        .trim();
    }

    return (
      <div className={classes} data-uk-grid="">
        {this.props.children}
      </div>
    );
  }
}

class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const width = this.props.width.toString();
    let classes = this.props.className.toString();
    if (width !== null && width !== '') {
      classes = classes
        .concat(' ')
        .concat(`uk-width-${width}`)
        .trim();
    }
    return <div className={classes}>{this.props.children}</div>;
  }
}

// Property types

Section.propTypes = {
  removePadding: PropTypes.string,
  container: PropTypes.bool
};

Grid.propTypes = {
  className: PropTypes.string,
  childWidth: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  masonry: PropTypes.bool,
  parallax: PropTypes.number
};

Column.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string
};

// Default values for properties

Section.defaultProps = {
  removePadding: '',
  container: true
};

Grid.defaultProps = {
  className: '',
  childWidth: '',
  gap: '',
  masonry: false,
  parallax: 0
};

Column.defaultProps = {
  className: '',
  width: ''
};

export { Section, Grid, Column };
