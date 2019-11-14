import PropTypes from 'prop-types';
import React from 'react';
import { defaults as controlDefaults } from 'ol/control';
import { defaults as interactionDefaults } from 'ol/interaction';
import OLMap from 'ol/Map';
import { toLonLat } from 'ol/proj';
import OLComponent from './ol-component';

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.map = new OLMap({
      loadTilesWhileAnimating: props.loadTilesWhileAnimating,
      loadTilesWhileInteracting: props.loadTilesWhileInteracting,
      interactions: props.useDefaultInteractions ? interactionDefaults() : [],
      controls: props.useDefaultControls ? controlDefaults() : [],
      overlays: []
    })

    this.onFeatureHover = this.onFeatureHover.bind(this);
    this.onFeatureClick = this.onFeatureClick.bind(this);

    if (props.onChangeSize) {
      this.map.on('change:size', this.props.onChangeSize);
    }
    if (this.props.onSingleClick) {
      this.map.on('singleclick', this.props.onSingleClick);
    }
    if (this.props.onFeatureHover) {
      this.map.on('pointermove', this.onFeatureHover)
    }
    if (this.props.onFeatureClick) {
      this.map.on('singleclick', this.onFeatureClick)
    }
  }

  componentDidMount() {
    this.map.setTarget(this.refs.target)

    if (this.props.focusOnMount) {
      this.focus()
    }
  }

  componentWillUnmount() {
    this.map.setTarget(undefined)
  }

  getChildContext() {
    return {
      map: this.map
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        <div ref="target" style={{ width: '100%', height: '100%' }}>
        </div>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    )
  }

  onFeatureHover(evt) {
    if (evt.dragging) {
      return;
    }
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature
    }, { hitTolerance: this.props.featureClickHitTolerance })
    this.props.onFeatureHover(feature)
  }

  onFeatureClick(evt) {
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, function (feature) {
      return feature
    }, { hitTolerance: this.props.featureClickHitTolerance })
    let lonLat = toLonLat(evt.coordinate)
    this.props.onFeatureClick(evt, feature, lonLat)
  }

  focus() {
    const viewport = this.map.getViewport()
    viewport.tabIndex = 0
    viewport.focus()
  }

  getSize() {
    return this.map.getSize()
  }
}

Map.propTypes = {
  loadTilesWhileAnimating: PropTypes.bool,
  loadTilesWhileInteracting: PropTypes.bool,
  onSingleClick: PropTypes.func,
  onChangeSize: PropTypes.func,
  onFeatureHover: PropTypes.func,
  onFeatureClick: PropTypes.func,
  featureClickHitTolerance: PropTypes.number,
  view: PropTypes.element.isRequired,
  useDefaultInteractions: PropTypes.bool.isRequired,
  useDefaultControls: PropTypes.bool.isRequired,
  focusOnMount: PropTypes.bool.isRequired,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ])
}

Map.defaultProps = {
  useDefaultInteractions: true,
  useDefaultControls: true,
  focusOnMount: false
}

Map.childContextTypes = {
  map: PropTypes.instanceOf(OLMap)
}
