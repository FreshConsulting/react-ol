import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import RegularShape from 'ol/style/RegularShape';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';

const STYLE_KEY_FACTORIES = {
  fill: (value) => new Fill(value),
  image: (value) => buildImage(value),
  stroke: (value) => new Stroke(value),
  text: (value) => buildText(value),
  zIndex: (value) => value
};

export function buildStyle(style) {
  if (!style) {
    return null;
  }

  if (Array.isArray(style)) {
    return style.map(buildStyle);
  }

  if (typeof style === "function") {
    return style;
  }

  if (Style.prototype.isPrototypeOf(style)) {
    return style;
  }

  const result = {};

  evaluateKeys(style, result);

  return new Style(result);
}

function evaluateKeys(style, result) {
  Object.keys(STYLE_KEY_FACTORIES)
    .filter((key) => !!style[key])
    .forEach((key) => {
      result[key] = STYLE_KEY_FACTORIES[key](style[key]);
    });

  return result;
}

function buildText(style) {
  if (!style) {
    return null;
  }

  if (typeof style === "function") {
    return style;
  }

  // Prevent an infinite loop..
  let textContent = style.text;
  delete style.text;

  let textStyle = style;

  evaluateKeys(style, textStyle);

  textStyle.text = textContent;

  return new Text(textStyle);
}

function buildImage(style) {
  if (!style) {
    return null;
  }

  if (typeof style === "function") {
    return style;
  }

  var imageStyle = style;

  evaluateKeys(style, imageStyle);

  switch (style.type) {
    case 'circle':
      return new CircleStyle(imageStyle);
    case 'icon':
      return new Icon(imageStyle);
    case 'regular-shape':
      return new RegularShape(imageStyle);
  }
}

