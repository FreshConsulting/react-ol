import PropTypes from 'prop-types';
import React from 'react';
import Collection from 'ol/Collection';
import Style from 'ol/style/Style'
import OLModify from 'ol/interaction/Modify';
import OLInteraction from './ol-interaction';
import { buildStyle } from '../style';

export default class Modify extends OLInteraction {
  createInteraction (props) {
    return new OLModify({
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
  features: PropTypes.instanceOf(Collection).isRequired,
  insertVertexCondition: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  style: PropTypes.oneOfType([
    PropTypes.instanceOf(Style),
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(Style),
      PropTypes.object,
      PropTypes.func
    ]))
  ])
})

Modify.olEvents = ["modifyend", "modifystart"]
