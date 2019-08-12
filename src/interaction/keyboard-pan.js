import PropTypes from 'prop-types';
import React from 'react';
import OLKeyboardPan from 'ol/interaction/KeyboardPan';
import OLInteraction from './ol-interaction';

export default class KeyboardPan extends OLInteraction {
  createInteraction (props) {
    return new OLKeyboardPan({
      condition: props.condition,
      duration: props.duration,
      pixelDelta: props.pixelDelta
    })
  }
}

KeyboardPan.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number,
  pixelDelta: PropTypes.number
})
