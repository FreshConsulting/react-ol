import PropTypes from 'prop-types';
import React from 'react';
import OLMouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import OLInteraction from './ol-interaction';

export default class MouseWheelZoom extends OLInteraction {
  createInteraction (props) {
    return new OLMouseWheelZoom({
      duration: props.duration,
      useAnchor: props.useAnchor
    })
  }
}

MouseWheelZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  duration: PropTypes.number,
  useAnchor: PropTypes.bool
})
