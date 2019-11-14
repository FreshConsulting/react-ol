import PropTypes from 'prop-types';
import React from 'react';
import OLKeyboardZoom from 'ol/interaction/KeyboardZoom';
import OLInteraction from './ol-interaction';

export default class KeyboardZoom extends OLInteraction {
  createInteraction (props) {
    return new OLKeyboardZoom({
      condition: props.condition,
      delta: props.delta,
      duration: props.duration
    })
  }
}

KeyboardZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  delta: PropTypes.number,
  duration: PropTypes.number
})
