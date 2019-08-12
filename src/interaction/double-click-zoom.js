import PropTypes from 'prop-types';
import React from 'react';
import OLDoubleClickZoom from 'ol/interaction/DoubleClickZoom';
import OLInteraction from './ol-interaction';

export default class DoubleClickZoom extends OLInteraction {
  createInteraction (props) {
    return new OLDoubleClickZoom({
      delta: props.delta,
      duration: props.duration
    })
  }
}

DoubleClickZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  delta: PropTypes.number,
  duration: PropTypes.number
})
