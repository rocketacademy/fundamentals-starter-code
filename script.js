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
var numRoundsPlayed = 0;
var numWins = 0;

// Return a number from 1-6
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var multiDiceGame = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
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
  numRoundsPlayed += 1;
  // Roll numDice number of dice
  var counter = 0;
  while (counter < numDice) {
    var diceRoll = rollDice();
    // Store the current dice roll in diceRolls to show the user later
    diceRolls.push(diceRoll);
    // If dice roll matches user guess, store that user has won
    if (diceRoll == userGuess) {
      hasUserWon = true;
    }
    counter += 1;
  }

  // Increment win counter if user has won
  if (hasUserWon) {
    numWins += 1;
  }

  // After the round is over, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Save generic output for both win and loss conditions to avoid repeating code.
  var numLosses = numRoundsPlayed - numWins;
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
 * Multi-Round Multi-Dice Game
 */
var multiRoundMultiDiceGame = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  var numRounds = 4;
  while (roundCounter < numRounds) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    numRoundsPlayed += 1;

    // Roll numDice number of dice
    var diceCounter = 0;
    while (diceCounter < numDice) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
      diceCounter += 1;
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      numWins += 1;
    }
    roundCounter += 1;
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var numLosses = numRoundsPlayed - numWins;
  // .join converts an array to a string where each element is separated by the param to .join.
  return `
    You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(' | ')}. <br/><br/>
    Your win-loss record is ${numWins}-${numLosses}. <br/><br/>
    Please enter a number of dice to roll to start again.
  `;
};

/**
 * 2 Player Multi-Round Multi-Dice Game
 */
// Start with Player 1
var currPlayer = 1;
var player1NumRoundsPlayed = 0;
var player1NumWins = 0;
var player2NumRoundsPlayed = 0;
var player2NumWins = 0;

var incrementNumRoundsPlayed = function () {
  if (currPlayer == 1) {
    player1NumRoundsPlayed += 1;
  } else {
    player2NumRoundsPlayed += 1;
  }
};

var incrementNumWins = function () {
  if (currPlayer == 1) {
    player1NumWins += 1;
  } else {
    player2NumWins += 1;
  }
};

var twoPlayerMultiRoundMultiDiceGame = function (input) {
  if (gameMode == GAME_MODE_ENTER_NUM_DICE) {
    numDice = Number(input);
    gameMode = GAME_MODE_ENTER_GUESS;
    return `Player ${currPlayer}: You have chosen to roll ${numDice} dice. Please enter a single guess for all of these dice.`;
  }
  // The following code assumes ENTER_GUESS game mode
  // because we return at the end of the previous if statement
  var userGuess = Number(input);

  // Store all dice rolls for each round so user can see how they won or lost.
  var diceRollsForEachRound = [];

  // Play numRounds rounds with a fixed number of dice and a fixed user guess
  var roundCounter = 0;
  var numRounds = 4;
  while (roundCounter < numRounds) {
    // Initialise diceRolls array to store dice rolls for this round
    diceRolls = [];
    // Initialise hasUserWon to false for this round
    hasUserWon = false;
    // Increment number of rounds the user has played for win loss record
    incrementNumRoundsPlayed();

    // Roll numDice number of dice
    var diceCounter = 0;
    while (diceCounter < numDice) {
      var diceRoll = rollDice();
      // Store the current dice roll in diceRolls to show the user later
      diceRolls.push(diceRoll);
      // If dice roll matches user guess, store that user has won.
      if (diceRoll == userGuess) {
        hasUserWon = true;
      }
      diceCounter += 1;
    }

    // Push the populated dice rolls array into the dice rolls for each round array
    diceRollsForEachRound.push(diceRolls);
    // Increment win counter if user has won
    if (hasUserWon) {
      incrementNumWins();
    }
    roundCounter += 1;
  }

  // After numRounds, reset mode to enter num dice so user can play again.
  gameMode = GAME_MODE_ENTER_NUM_DICE;

  // Output result and win-loss record.
  var player1NumLosses = player1NumRoundsPlayed - player1NumWins;
  var player2NumLosses = player2NumRoundsPlayed - player2NumWins;
  // If currPlayer is 1, nextPlayer is 2. If currPlayer is 2, nextPlayer is 1.
  var nextPlayer = (currPlayer % 2) + 1;
  // .join converts an array to a string where each element is separated by the param to .join.
  var outputValue = `
    Player ${currPlayer}: <br/><br/>
    You guessed ${userGuess} and the computer rolled ${diceRollsForEachRound.join(' | ')}. <br/><br/>
    Player 1 win-loss record is ${player1NumWins}-${player1NumLosses}. <br/><br/>
    Player 2 win-loss record is ${player2NumWins}-${player2NumLosses}. <br/><br/>
    Player ${nextPlayer}: Please enter a number of dice to roll for your turn.
  `;

  // Update currPlayer to nextPlayer before next turn
  currPlayer = nextPlayer;

  return outputValue;
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
  // return multiRoundMultiDiceGame(input);
  // return twoPlayerMultiRoundMultiDiceGame(input);
};
