import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';
import { buildStyle } from '../style';

export default class Modify extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Modify({
      condition: props.condition,
      features: props.features,
      insertVertexCondition: props.insertVertexCondition,
      style: buildStyle(props.style),
    })
  }
}

Modify.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  modifyend: PropTypes.func,
  modifystart: PropTypes.func,
  features: PropTypes.instanceOf(ol.Collection).isRequired,
  insertVertexCondition: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  style: PropTypes.oneOfType([
    PropTypes.instanceOf(ol.style.Style),
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(ol.style.Style),
      PropTypes.object,
      PropTypes.func
    ]))
  ])
})

Modify.olEvents = ["modifyend", "modifystart"]
