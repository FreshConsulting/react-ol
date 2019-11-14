import PropTypes from 'prop-types';
import React from 'react';
import BaseLayer from 'ol/layer/Base';
import OLXYZ from 'ol/source/XYZ';
import OLComponent from '../ol-component';

export default class XYZ extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new OLXYZ(this.props);
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

XYZ.propTypes = {
  url: PropTypes.string,
  urls: PropTypes.arrayOf(PropTypes.string),
  tileSize: PropTypes.arrayOf(PropTypes.number)
}

XYZ.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer)
}
