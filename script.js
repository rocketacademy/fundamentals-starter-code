/*
Title: Train Speed
Prompt: Two trains are leaving to Tokyo. Train 1 is traveling 200kph. It will reach Tokyo in 2 hours. Train 2 is newer and can travel faster. A bird lands on the track and delays Train 2. Build an app for Train 2's conductor to enter a number of minutes Train 2 is delayed and output how fast Train 2 needs to travel to arrive at Tokyo at the same time as Train 1. Output the speed in kph.

Relevant mathematical formula to note: dist= speed x time
*/
// ================Helper fns===========
var converMinsToHrs = function (mins) {
  return mins / 60;
};

var calcTrainTwoSpeed = function (delayInMins) {
  var trainSpeed = 200;
  var timeToTokyo = 2;
  // calculate the distance to tokyo
  var distanceToTokyo = trainSpeed * timeToTokyo;

  // calculate new time available for travel after subtracting the delay
  var remainingTimeForTravel = timeToTokyo - converMinsToHrs(delayInMins);

  // calculate the speed that train 2 needs to travel at, in order to cover the same distance at a reduced travel time
  trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

  // return the new speed; 'toFixed' limits the ans to a specified decimal place
  return trainTwoNewSpeed.toFixed(2);
};
//=========================================
var main = function (input) {
  var trainTwoNewSpeed = calcTrainTwoSpeed(input);
  var myOutputValue = `Given a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
  return myOutputValue;
};
