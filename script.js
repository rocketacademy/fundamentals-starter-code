/*=========================================
==========Helper Functions=================
===========================================*/
/**
 * Roll a dice to obtain a random value from 1 to 6
 * @returns {number}
 */
var rollDice = function () {
  const highestNumOnDice = 6;
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * highestNumOnDice;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
/*=========================================
==========Main Function====================
===========================================*/

var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = 'you lose';

  // User wins if dice roll is 2 times the user's guess. Update the output if so.
  if (input == randomDiceNumber / 2) {
    myOutputValue = 'you win';
  }

  // Return output.
  return myOutputValue;
};
