var convertKmToMiles = function (km) {
  return km * 0.62;
}

var main = function (input) {
  if (Number.isNaN(Number(input))) {
    return 'Please enter a number'
  }
  var distanceInMiles = convertKmToMiles(input);
  return `${input}km is equivalent to ${distanceInMiles} miles.`;
};