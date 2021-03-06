import PropTypes from 'prop-types';
import React from 'react';
import OLMousePosition from 'ol/control/MousePosition';
import Projection from 'ol/proj/Projection';
import OLControl from './ol-control';

export default class MousePosition extends OLControl {
  createControl (props) {
    return new OLMousePosition({
      className: props.className,
      coordinateFormat: props.coordinateFormat,
      projection: props.projection,
      undefinedHTML: props.undefinedHTML
    })
  }
}

MousePosition.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  coordinateFormat: PropTypes.func,
  projection: PropTypes.oneOfType([
    PropTypes.instanceOf(Projection),
    PropTypes.string
  ]),
  undefinedHTML: PropTypes.string
})
