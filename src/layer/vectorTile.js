import PropTypes from 'prop-types'
import React from 'react'
import ol from 'openlayers'
import OLLayer from './ol-layer'
import { buildStyle } from '../style'

export default class VectorTile extends OLLayer {
  constructor(props) {
    super(props)

    let layerProps = this.buildLayerProps(props)

    this.layer = new ol.layer.VectorTile({
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
    PropTypes.instanceOf(ol.style.Style),
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(ol.style.Style),
      PropTypes.object
    ]))
  ])
}

VectorTile.contextTypes = {
  map: PropTypes.instanceOf(ol.Map)
}

VectorTile.childContextTypes = {
  layer: PropTypes.instanceOf(ol.layer.VectorTile),
  map: PropTypes.instanceOf(ol.Map)
}
