import PropTypes from 'prop-types';
import React from 'react';
import OLPinchRotate from 'ol/interaction/PinchRotate';
import OLInteraction from './ol-interaction';

export default class PinchRotate extends OLInteraction {
  createInteraction (props) {
    return new OLPinchRotate({
      threshold: props.threshold,
      duration: props.duration
    })
  }
}

PinchRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  threshold: PropTypes.number,
  duration: PropTypes.number
})
