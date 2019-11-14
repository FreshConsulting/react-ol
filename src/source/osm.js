import PropTypes from 'prop-types';
import React from 'react';
import BaseLayer from 'ol/layer/Base';
import OLOSM from 'ol/source/OSM';
import OLComponent from '../ol-component';

export default class OSM extends OLComponent {
  constructor(props) {
    super(props);
    this.source = new OLOSM(this.props);
  }

  componentDidMount() {
    this.context.layer.setSource(this.source);
  }
}

OSM.propTypes = {
}

OSM.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer)
}
