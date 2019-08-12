import PropTypes from 'prop-types';
import React from 'react';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import OLLineString from 'ol/geom/LineString';
import OLGeometry from './ol-geometry';

export default class LineString extends OLGeometry {
  constructor(props) {
    super(props);
    this.geometry = new OLLineString();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates(props.children);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  render() {
    return false;
  }
}

LineString.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

LineString.contextTypes = {
  feature: PropTypes.instanceOf(Feature),
  map: PropTypes.instanceOf(Map),
}
