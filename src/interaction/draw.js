import PropTypes from 'prop-types';
import React from 'react';
import OLDraw from 'ol/interaction/Draw';
import OLInteraction from './ol-interaction';

export default class Draw extends OLInteraction {
  createInteraction(props) {
    return new OLDraw({
      type: props.type,
      maxPoints: props.maxPoints,
      minPoints: props.minPoints,
      stopClick: props.stopClick,
    })
  }
}

Draw.propTypes = Object.assign({}, OLInteraction.propTypes, {
  drawend: PropTypes.func,
  drawstart: PropTypes.func,
  type: PropTypes.string.isRequired,
  maxPoints: PropTypes.number,
  minPoints: PropTypes.number,
  stopClick: PropTypes.bool,
})

Draw.olEvents = ["drawend", "drawstart"]
