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

// Initialise game mode to enter num dice mode
var gameMode = GAME_MODE_ENTER_NUM_DICE;

// Keep track of variables needed for a single round
var diceRolls = [];
var hasUserWon = false;
var numDice;

// Keep track of variables needed across multiple rounds
var numGamesPlayed = 0;
var numWins = 0;

// Return a number from 1-6
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var multiDiceGame = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    console.log(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);
  // Initialise diceRolls array to store dice rolls for this round
  diceRolls = [];
  // Initialise hasUserWon to false for this round
  hasUserWon = false;
  // Increment number of games the user has played for win loss record
  numGamesPlayed += 1;
  // Roll numDice number of dice
  var counter = 0;
  while (counter < numDice) {
    var diceRoll = rollDice();
    // Store the current dice roll in diceRolls to show the user later
    diceRolls.push(diceRoll);
    // If dice roll matches user guess, store that user has won and increment win counter.
    if (diceRoll == userGuess) {
      hasUserWon = true;
      numWins += 1;
    }
    counter += 1;
  }

  // After the round is over, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Save generic output for both win and loss conditions to avoid repeating code.
  var numLosses = numGamesPlayed - numWins;
  var genericOutputPrefix = `You guessed ${userGuess} and the computer rolled ${diceRolls}.`;
  var genericOutputSuffix = `
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
  // If user has won, output win message.
  if (hasUserWon) {
    return `${genericOutputPrefix} You win! ${genericOutputSuffix}`;
  }
  // If user has not won, output lose message.
  return `${genericOutputPrefix} You lose. ${genericOutputSuffix}`;
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  return simpleLoopWithVariations();
  // return loopWithinLoop(input);
  // infiniteLoop();
  // return multiDiceGame(input);
};
