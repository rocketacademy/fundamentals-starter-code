var convertKmToMiles = function (km) {
  return km * 0.62;
}

var main = function (input) {
  var distanceInKm = input;
  var distanceInMiles = convertKmToMiles(distanceInKm);
  return `${distanceInKm}km is equal to ${distanceInMiles} miles`;
};
