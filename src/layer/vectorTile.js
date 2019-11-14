import PropTypes from 'prop-types'
import React from 'react'
import Map from 'ol/Map';
import Style from 'ol/style/Style';
import VectorTileLayer from 'ol/layer/VectorTile';
import OLLayer from './ol-layer'
import { buildStyle } from '../style'

export default class VectorTile extends OLLayer {
  constructor(props) {
    super(props)

    let layerProps = this.buildLayerProps(props)

    this.layer = new VectorTileLayer({
      ...layerProps,
      style: buildStyle(props.style),
      updateWhileAnimating: props.updateWhileAnimating,
      updateWhileInteracting: props.updateWhileInteracting,
    })
  }

  getChildContext() {
    return {
      layer: this.layer,
      map: this.context.map
    }
  }

  componentDidMount() {
    super.componentDidMount()
    this.context.map.addLayer(this.layer)
  }

  componentWillReceiveProps(newProps) {
    super.componentWillReceiveProps(newProps)
    this.layer.setStyle(buildStyle(newProps.style));
  }

  componentWillUnmount() {
    super.componentWillUnmount()
    this.context.map.removeLayer(this.layer)
  }
}

VectorTile.propTypes = {
  updateWhileAnimating: PropTypes.bool,
  updateWhileInteracting: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.instanceOf(Style),
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(Style),
      PropTypes.object
    ]))
  ])
}

VectorTile.contextTypes = {
  map: PropTypes.instanceOf(Map)
}

VectorTile.childContextTypes = {
  layer: PropTypes.instanceOf(VectorTileLayer),
  map: PropTypes.instanceOf(Map)
}
