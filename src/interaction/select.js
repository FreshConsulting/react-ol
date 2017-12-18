import PropTypes from 'prop-types';
import React from 'react';
import ol from 'openlayers';
import OLInteraction from './ol-interaction';
import { buildStyle } from '../style';

export default class Select extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Select({
      condition: props.condition,
      toggleCondition: props.toggleCondition,
      filter: props.filter,
      style: props.style ? buildStyle(props.style) : undefined
    })
  }
}

Select.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  toggleCondition: PropTypes.func,
  filter: PropTypes.func,
  select: PropTypes.func
})

Select.olEvents = ["select"]
