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
  var randomDiceNumber = 5;
  // var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = 'You lose';

  // Updated Dice Game: User wins if his guess is +1 or -1 of the dice roll's value.
  // if (
  //   input == randomDiceNumber ||
  //   input == randomDiceNumber + 1 ||
  //   input == randomDiceNumber - 1
  // ) {
  //   myOutputValue = 'you win';
  // }

  // Easier Dice Game: User wins if his guess is + 2 or -2 of the dice roll's value
  // if (
  //   input == randomDiceNumber ||
  //   input == randomDiceNumber + 1 ||
  //   input == randomDiceNumber + 2 ||
  //   input == randomDiceNumber - 1 ||
  //   input == randomDiceNumber - 2
  // ) {
  //   myOutputValue = 'you win';
  // }

  // Even Easier Dice Game: User inputs 'odd' or 'even' and they win/lose depending on the whether the dice roll is odd or even
  if (input == 'odd') {
    if (
      randomDiceNumber == 1 ||
      randomDiceNumber == 3 ||
      randomDiceNumber == 5
    ) {
      myOutputValue = 'You win';
    }
  }
  if (input == 'even') {
    if (
      randomDiceNumber == 2 ||
      randomDiceNumber == 4 ||
      randomDiceNumber == 6
    ) {
      myOutputValue = 'You win';
    }
  }

  // Return output.
  return myOutputValue;
};
