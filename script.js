/* 
JUICE WEDDING
  It takes 4 oranges to make a 90ml glass of orange juice. When planning your wedding, you need to know how many oranges to buy so all your guests have 1 glass of juice. The user will enter a number of guests and the app will say how many oranges are needed and how many litres of orange juice you would get.
 */

// =========Helper function(s)===========
// Set a  fn that converts ml to to litres
var convertMlToL = function (ml) {
  return ml / 1000;
};

var calcOrangesNeeded = function (numOfGuests) {
  // assign the values to variables. Why?: Assigning values to variables helps prevent errors when we have to re-use these numbers (e.g. when our apps become larger/more complex in future)
  var orangesPerGlass = 4;
  // calculate the organges we'll need given  the number of guests
  var orangesNeeded = numOfGuests * orangesPerGlass;
  return orangesNeeded;
};
var calcVolJuiceNeeded = function (numOfGuests) {
  // asssign values to variables
  var mlPerGlass = 90;
  // convert mlPerGlass to Litres per glass. Notice tt we are executing an external fn within this fn in order to achieve this.
  var litresPerGlass = convertMlToL(mlPerGlass);
  // calculate the vol (in litres) of  juice we'll need, given the number of guests.
  var litresNeeded = numOfGuests * litresPerGlass;
  // return the litresNeeded. toFixed allows you to set the ans to # decimal places
  return litresNeeded.toFixed(2);
};
// ========================================

var main = function (input) {
  // Invoke your helper fns to do the calculations you want. Remember that you'll need to assign these to variables; if not, the fn gets executed but the output (i.e. whatever is in the fn's return statement) is not captured and won't be available for use.
  var orangesNeeded = calcOrangesNeeded(input);
  var volJuiceNeeded = calcVolJuiceNeeded(input);

  // concatenate the above variables into a string so that we can output an answer in prose.
  var myOutputValue = `We need ${orangesNeeded} oranges to make ${volJuiceNeeded}Ls of juice for ${input} guests`;
  return myOutputValue;
};
