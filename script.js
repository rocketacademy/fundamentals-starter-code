// Minutes in a week
var main = function (numWeeks) {
  var daysPerWeek = 7;
  var hoursPerDay = 24;
  var minutesPerHour = 60;
  var numMinutes = numWeeks * daysPerWeek * hoursPerDay * minutesPerHour;
  return `In ${numWeeks} weeks there are ${numMinutes} minutes! Wow!`;
};
