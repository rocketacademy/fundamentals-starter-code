/*
Title: SG Hugs
Prompt: Everyone has a different gauge for how long they like to hug. The user can enter a number of seconds they like to hug on average, and the app will calculate how many years it will take to hug everyone in Singapore. You are allowed 9 hours a day to sleep and eat.
*/
var convertSecsToHrs = function (timeInSeconds) {
  var secondsPerMin = 60;
  var minsPerHr = 60;
  var timeInMins = timeInSeconds / secondsPerMin;
  var timeInHrs = timeInMins / minsPerHr;
  return timeInHrs;
};

var calcYearsToHugAllSgpeans = function (hugDurationPreference) {
  // set vars for the fixed values you will be referring to
  var hrsInAday = 24;
  var nonHuggingHrs = 9;
  // popn size is not provided in the prompt; Here it is approximated at 5.7 mil.
  var populationSize = 5700000;
  var daysInAYear = 365;

  // calculate the num of hours each day that are availabe for hugging
  var hrsPerDayForHugging = hrsInAday - nonHuggingHrs;

  // convert the user's hugDurationPreference from seconds to  hours
  var hugDurationPreferenceInHrs = convertSecsToHrs(hugDurationPreference);

  // calculate how many hugs you can give during the hugging hours
  var maxHugsGivenPerDay = hrsPerDayForHugging / hugDurationPreferenceInHrs;

  // calculate how long it would take to hug the popn
  var daysTakenToHugPopn = populationSize / maxHugsGivenPerDay;

  // convert ans to years
  var yearsToHugPopn = daysTakenToHugPopn / daysInAYear;

  return yearsToHugPopn;
};

var main = function (input) {
  var yearsToHugAllSgpeans = calcYearsToHugAllSgpeans(input);
  var myOutputValue = `It will take ${yearsToHugAllSgpeans} yrs to hug all Sgpeans if your preferred hug duration is ${input} secs`;
  return myOutputValue;
};
// Well done! Don't foreget to give yourself a hug too!
