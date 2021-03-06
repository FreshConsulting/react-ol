import PropTypes from 'prop-types';
import React from 'react';
import OLZoom from 'ol/control/Zoom';
import OLControl from './ol-control';

export default class Zoom extends OLControl {
  createControl (props) {
    return new OLZoom({
      className: props.className,
      delta: props.delta,
      duration: props.duration,
      zoomInLabel: props.zoomInLabel,
      zoomInTipLabel: props.zoomInTipLabel,
      zoomOutLabel: props.zoomOutLabel,
      zoomOutTipLabel: props.zoomOutTipLabel
    })
  }
}

Zoom.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  delta: PropTypes.number,
  duration: PropTypes.number,
  zoomInLabel: PropTypes.node,
  zoomInTipLabel: PropTypes.string,
  zoomOutLabel: PropTypes.node,
  zoomOutTipLabel: PropTypes.string
})
