import PropTypes from 'prop-types';
import React from 'react';
import OLDragZoom from 'ol/interaction/DragZoom';
import OLInteraction from './ol-interaction';

export default class DragZoom extends OLInteraction {
  createInteraction (props) {
    return new OLDragZoom({
      condition: props.condition,
      duration: props.duration,
      out: props.out
    })
  }
}

DragZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  boxdrag: PropTypes.func,
  boxend: PropTypes.func,
  boxstart: PropTypes.func,
  condition: PropTypes.func,
  duration: PropTypes.number,
  out: PropTypes.bool
})

DragZoom.olEvents = ["boxdrag", "boxend", "boxstart"]
