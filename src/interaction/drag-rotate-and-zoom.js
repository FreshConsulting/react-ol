import PropTypes from 'prop-types';
import React from 'react';
import OLDragRotateAndZoom from 'ol/interaction/DragRotateAndZoom';
import OLInteraction from './ol-interaction';

export default class DragRotateAndZoom extends OLInteraction {
  createInteraction (props) {
    return new OLDragRotateAndZoom({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotateAndZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number
})
