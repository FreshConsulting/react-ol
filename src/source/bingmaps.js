import PropTypes from 'prop-types';
import React from 'react'
import BaseLayer from 'ol/layer/Base';
import OLBingMaps from 'ol/source/BingMaps';
import OLComponent from '../ol-component'

export default class BingMaps extends OLComponent {
  constructor(props) {
    let spreadedProps = Object.assign({}, props)
    spreadedProps.key = spreadedProps.apiKey
    delete spreadedProps.apiKey

    super(props);

    this.source = new OLBingMaps(spreadedProps)
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }
}

BingMaps.propTypes = {
  apiKey: PropTypes.string.isRequired,
  imagerySet: PropTypes.string.isRequired
}

BingMaps.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer)
}
