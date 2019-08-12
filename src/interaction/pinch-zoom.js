import PropTypes from 'prop-types';
import React from 'react';
import OLPinchZoom from 'ol/interaction/PinchZoom';
import OLInteraction from './ol-interaction';

export default class PinchZoom extends OLInteraction {
  createInteraction (props) {
    return new OLPinchZoom({
      duration: props.duration
    })
  }
}

PinchZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: PropTypes.number
})
