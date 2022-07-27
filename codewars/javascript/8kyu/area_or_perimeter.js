const areaOrPerimeter = function (l, w) {
  // if it's a square, return area
  if (l === w) {
    return l * w;
  }
  // if rectangle, return perimeter
  else {
    return l + l + w + w;
  }
};
