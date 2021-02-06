/**
 * Simple Loop with Variations
 */
var simpleLoopWithVariations = function () {
  var counter = 0;
  var myOutputValue = '';
  while (counter < 6) {
    myOutputValue += 'hello';
    counter += 1;
  }
  return myOutputValue;
};

/**
 * Loop within Loop
 */
var loopWithinLoop = function (numIterations) {
  var outerCounter = 0;
  var myOutputValue = '';
  while (outerCounter < numIterations) {
    var innerCounter = 0;
    while (innerCounter < 2 * numIterations) {
      myOutputValue += 'hello';
      innerCounter += 1;
    }
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/**
 * Infinite Loop
 */
var infiniteLoop = function () {
  while (true) {
    console.log('hello');
  }
};

/**
 * Multi Dice Game
 */
// Declare game mode constant variables
// Constants variables are typically in SCREAM_CASE
var GAME_MODE_ENTER_NUM_DICE = 'ENTER_NUM_DICE';
var GAME_MODE_ENTER_GUESS = 'ENTER_GUESS';
var gameMode = GAME_MODE_ENTER_NUM_DICE;
var hasUserWon = false;
var numDice;
var userGuess;

var multiDiceGame = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter your guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);
  var counter = 0;
  while (counter < numDice) {
    var diceRoll = rollDice();
    if (diceRoll == userGuess) {
      hasUserWon = true;
    }
    counter += 1;
  }
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  // return simpleLoopWithVariations();
  // return loopWithinLoop(input);
  // infiniteLoop();
  return multiDiceGame();
};
