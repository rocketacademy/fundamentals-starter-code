// Track the previous dice roll value
var prevDiceRoll = 0;
// Track the user's running score
var score = 0;

/**
 * Set a function that returns the value of a dice roll
 */
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

/**
 * Set a function that displays info about the previous dice roll
 */
var getPrevDiceRollInfo = function () {
  // Handle the scenario where this is the first roll and hence there isn't a previous roll value.
  if (prevDiceRoll == 0) {
    return 'This was your first roll. ';
  }
  // Since this is not the first roll, display the previous roll's value to the user
  return 'Your previous roll was ' + prevDiceRoll + '.';
};

/**
 * @param {number} diceNum
 * @param {number} userGuess
 * Determine the score increment depending on how far off the guess was from the dice roll
 */
var determineScoreincrement = function (diceNum, userGuess) {
  // If the roll and the guess are the same value, set the increment at 5
  if (diceNum == userGuess) {
    return 5;
  }
  // Else set the respective increments depending on how far the guess deviates from the roll
  else if (diceNum == userGuess + 4 || diceNum == userGuess - 4) {
    return 1;
  } else if (diceNum == userGuess + 3 || diceNum == userGuess - 3) {
    return 2;
  } else if (diceNum == userGuess + 2 || diceNum == userGuess - 2) {
    return 3;
  } else if (diceNum == userGuess + 1 || diceNum == userGuess - 1) {
    return 4;
  }
};

/**
 * @param {string} input
 * Determine the score increment depending on how far off the guess was from the dice roll
 */
var main = function (input) {
  var randomDiceNumber = rollDice();

  // assign input to userGuess so the name is more intuititive; change it from string to integer
  var userGuess = Number(input);

  // Set a fn that returns a string containing information about the previous dice roll
  var prevDiceRollInfo = getPrevDiceRollInfo();

  // update prevDiceRoll with the current dice roll
  prevDiceRoll = randomDiceNumber;

  // Set the display for the scenario where the user doesnt't win
  var myOutputValue =
    prevDiceRollInfo +
    ' You just rolled a ' +
    randomDiceNumber +
    '. You guessed ' +
    input +
    ". You didn't win any points. <br><br> Your score: " +
    score;

  // Check if the user won; consider it a win if the difference btw userGuess and the rolled num is at most 4
  if (
    (userGuess >= randomDiceNumber && userGuess <= randomDiceNumber + 4) ||
    (userGuess <= randomDiceNumber && userGuess >= randomDiceNumber - 4)
  ) {
    // determine the increment amt and update the score accordingly
    var increment = determineScoreincrement(randomDiceNumber, userGuess);
    score += increment;

    myOutputValue =
      prevDiceRollInfo +
      ' You just rolled a ' +
      randomDiceNumber +
      '. You guessed ' +
      input +
      '. You win ' +
      increment +
      ' points! <br><br> Your score: ' +
      score;
  }

  return myOutputValue;
};
