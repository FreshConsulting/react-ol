import PropTypes from "prop-types";
import React from "react";
import Feature from "ol/Feature";
import Map from "ol/Map";
import OLPoint from "ol/geom/Point";
import OLGeometry from "./ol-geometry";

export default class Point extends OLGeometry {
  constructor(props) {
    super(props);
    this.updateFromProps(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.children != nextProps.children;
  }

  updateFromProps(props) {
    if (props.animate) {
      this.animate(props.children, props.animationLength);
    } else {
      this.geometry = new OLPoint(this.props.children);
    }
  }

  animate(finishCoords, animationLength) {
    let frame = animationLength * 1000;
    if (this.geometry) {
      let startCoords = this.geometry.getCoordinates();
      let delta = [
        finishCoords[0] - startCoords[0],
        finishCoords[1] - startCoords[1]
      ];

      let finish = null;
      step = timestamp => {
        if (!finish) {
          finish = timestamp + frame;
        }
        if (timestamp < finish) {
          let progress = 1 - (finish - timestamp) / frame;
          this.geometry.setCoordinates([
            startCoords[0] + delta[0] * progress,
            startCoords[1] + delta[1] * progress
          ]);
          window.requestAnimationFrame(step);
        } else {
          this.geometry.setCoordinates(finishCoords);
        }
      };
      window.requestAnimationFrame(step);
    } else {
      this.geometry = new OLPoint(this.props.children);
    }
  }

  componentWillReceiveProps(newProps) {
    this.updateFromProps(newProps);
  }

  render() {
    return false;
  }
}

Point.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number).isRequired,
  animate: PropTypes.bool,
  animationLength: PropTypes.number
};

Point.contextTypes = {
  feature: PropTypes.instanceOf(Feature),
  map: PropTypes.instanceOf(Map)
};
