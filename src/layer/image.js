import PropTypes from 'prop-types';
import React from 'react'
import Map from 'ol/Map';
import ImageLayer from 'ol/layer/Image';
import OLLayer from './ol-layer';

export default class Image extends OLLayer {
  constructor(props) {
    super(props)

    let layerProps = this.buildLayerProps(props)

    this.layer = new ImageLayer({
      ...layerProps,
    })
  }

  getChildContext() {
    return {
      layer: this.layer
    }
  }

  componentDidMount() {
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps(newProps) {
    this.layer.setVisible(newProps.visible)
    this.layer.setZIndex(newProps.zIndex)
  }

  componentWillUnmount() {
    this.context.map.removeLayer(this.layer)
  }
}

Image.propTypes = {

}

Image.defaultProps = {
  visible: true
}

Image.contextTypes = {
  map: PropTypes.instanceOf(Map)
}

Image.childContextTypes = {
  layer: PropTypes.instanceOf(ImageLayer)
}
