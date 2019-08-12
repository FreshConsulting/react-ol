import React from 'react';
import OLDragPan from 'ol/interaction/DragPan';
import OLInteraction from './ol-interaction';

export default class DragPan extends OLInteraction {
  createInteraction (props) {
    return new OLDragPan()
  }
}
