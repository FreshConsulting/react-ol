import PropTypes from 'prop-types'
import React from 'react'
import ol from 'openlayers'
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class VectorTile extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new ol.source.VectorTile(
      Object.assign({}, this.props)
    )
  }

  getChildContext() {
    return {
      source: this.source
    }
  }

  componentDidMount() {
    this.context.layer.setSource(this.source)
  }

  componentWillUnmount () {}
}

VectorTile.propTypes = {
}

VectorTile.defaultProps = {
}

VectorTile.contextTypes = {
  layer: PropTypes.instanceOf(ol.layer.Base),
  map: PropTypes.instanceOf(ol.Map)
}

VectorTile.childContextTypes = {
  source: PropTypes.instanceOf(ol.source.Source)
}
