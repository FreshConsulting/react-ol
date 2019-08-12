import PropTypes from 'prop-types'
import React from 'react'
import BaseLayer from 'ol/layer/Base';
import Source from 'ol/source/Source';
import Map from 'ol/Map';
import OLComponent from '../ol-component'
import OLVectorTile from 'ol/source/VectorTile';
import * as interaction from '../interaction'

export default class VectorTile extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new OLVectorTile(
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
  layer: PropTypes.instanceOf(BaseLayer),
  map: PropTypes.instanceOf(Map)
}

VectorTile.childContextTypes = {
  source: PropTypes.instanceOf(Source)
}
