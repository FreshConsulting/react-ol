import PropTypes from 'prop-types';
import React from 'react';
import OLDragBox from 'ol/interaction/DragBox';
import OLInteraction from './ol-interaction';

export default class DragBox extends OLInteraction {
  createInteraction (props) {
    return new OLDragBox({
      condition: props.condition
    })
  }
}

DragBox.propTypes = Object.assign({}, OLInteraction.propTypes, {
  boxdrag: PropTypes.func,
  boxend: PropTypes.func,
  boxstart: PropTypes.func,
  condition: PropTypes.func
})

DragBox.olEvents = ["boxdrag", "boxend", "boxstart"]
