import PropTypes from 'prop-types';
import React from 'react';
import Map from 'ol/Map';
import Feature from 'ol/Feature';
import OLPolygon from 'ol/geom/Polygon';
import OLGeometry from './ol-geometry';

export default class Polygon extends OLGeometry {
  constructor(props) {
    super(props);
    this.geometry = new OLPolygon();
    this.updateFromProps(props);
  }

  updateFromProps(props) {
    this.geometry.setCoordinates([props.children]);
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  render() {
    return false;
  }
}

Polygon.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  ).isRequired,
}

Polygon.contextTypes = {
  feature: PropTypes.instanceOf(Feature),
  map: PropTypes.instanceOf(Map),
}
