import PropTypes from 'prop-types';
import React from 'react'
import Map from 'ol/Map';
import OLTile from 'ol/layer/Tile';
import OLLayer from './ol-layer';

export default class Tile extends OLLayer {
  constructor(props) {
    super(props)

    let layerProps = this.buildLayerProps(props)

    this.layer = new OLTile({
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

Tile.propTypes = {

}

Tile.defaultProps = {
  visible: true
}

Tile.contextTypes = {
  map: PropTypes.instanceOf(Map)
}

Tile.childContextTypes = {
  layer: PropTypes.instanceOf(OLTile)
}
