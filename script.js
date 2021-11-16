// Minutes in Weeks
var minutesInWeeks = function (numWeeks) {
  var daysPerWeek = 7;
  var hoursPerDay = 24;
  var minutesPerHour = 60;
  var numMinutes = numWeeks * daysPerWeek * hoursPerDay * minutesPerHour;
  return 'In ' + numWeeks + ' weeks there are ' + numMinutes + ' minutes! Wow!';
};

// Fahrenheit to Celsius
var fahrenheitToCelsius = function (tempInFahrenheit) {
  var tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return `${tempInFahrenheit} degrees Fahrenheit is ${tempInCelsius} degrees Celsius.`;
};

// Road Trip Cost
var roadTripCost = function (tripLengthInKm) {
  var numKmPerLitreOfPetrol = 9;
  var numLitresOfPetrolNeeded = tripLengthInKm / numKmPerLitreOfPetrol;
  var costPerLitreOfPetrol = 2.2;
  var costEstimate = numLitresOfPetrolNeeded * costPerLitreOfPetrol;
  // .toFixed(2) limits the number of decimal places to 2.
  // You may find it easier to use template literals to create strings instead of the + operator.
  return `It would cost $${costEstimate.toFixed(2)} to drive your Ferrari ${tripLengthInKm} kilometres.`;
};

// Ice Cream Buffet
var iceCreamBuffet = function (numTrips) {
  var numCupsPerTrip = 1;
  var mlPerCup = 70;
  var mlPerContainer = 400;
  var numContainersPerCup = mlPerCup / mlPerContainer;
  var numContainersConsumed = numTrips * numCupsPerTrip * numContainersPerCup;
  return `If you make ${numTrips} trips to the ice cream station and pick up 1 70ml cup each trip, you would consume ${numContainersConsumed.toFixed(2)} 400ml containers of ice cream total.`;
};

// Time to Type Sonnets
var timeToTypeSonnets = function (wpmTypingSpeed) {
  var numWordsToType = 17677;
  var numMinutesToTypeAllWords = numWordsToType / wpmTypingSpeed;
  var hoursPerMinute = 1 / 60;
  var numHoursToTypeAllWords = numMinutesToTypeAllWords * hoursPerMinute;
  return `At a typing speed of ${wpmTypingSpeed} words per minute, it would take someone ${numHoursToTypeAllWords.toFixed(2)} hours to type all ${numWordsToType} words of Shakespeare's sonnets.`;
};