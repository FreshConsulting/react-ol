import PropTypes from 'prop-types';
import React from 'react';
import OLDragRotate from 'ol/interaction/DragRotate';
import OLInteraction from './ol-interaction';

export default class DragRotate extends OLInteraction {
  createInteraction (props) {
    return new OLDragRotate({
      condition: props.condition,
      duration: props.duration
    })
  }
}

DragRotate.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  duration: PropTypes.number
})
