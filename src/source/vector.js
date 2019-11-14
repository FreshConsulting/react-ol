import PropTypes from 'prop-types';
import React from 'react'
import BaseLayer from 'ol/layer/Base';
import Collection from 'ol/Collection';
import Source from 'ol/source/Source';
import Map from 'ol/Map';
import OLVector from 'ol/source/Vector';
import OLComponent from '../ol-component'
import * as interaction from '../interaction'

export default class Vector extends OLComponent {
  constructor(props) {
    super(props)
    this.source = new OLVector(
      Object.assign({
        features: new Collection()
      }, this.props)
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

Vector.propTypes = {
}

Vector.defaultProps = {
}

Vector.contextTypes = {
  layer: PropTypes.instanceOf(BaseLayer),
  map: PropTypes.instanceOf(Map)
}

Vector.childContextTypes = {
  source: PropTypes.instanceOf(Source)
}
