// initiliase an array to store dice rolls, we will use this for both player one and player two's dice rolls. player one's rolls will be index 0 and 1, player two's rolls will be indexed 2 and 3.
var playerRolls = []
// variable to track game state, initialised to ROLL, will change to CHOOSE, then to COMPARE
var gameState = 'ROLL';
// variable to track player's turn, initialised to 0
var turnCounter = 0;
// array to store and compare player numbers
var playersChosenNumbers = [];

// Simulates a dice roll and returns a number between 1 to 6
var rollDice = function() {
  console.log("Control Flow Checking: Currently in rollDice function")
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log(`rollDice returning ${randomInteger}`);
  return randomInteger;
}

var playerTurn = function() {
  console.log("Control Flow Checking: Currently in playerTurn function")
  // roll two dice and store in an array
  playerRolls.push(rollDice());
  playerRolls.push(rollDice());
  console.log(`playerRolls array is ${playerRolls} at the end of playerTurn()`);
  outputValue = `Welcome Player ${turnCounter+1}. You rolled ${playerRolls[turnCounter]} and ${playerRolls[turnCounter+1]}. Please input '1' or '2' to choose which die to be the first number.`;
  return outputValue;
}


var playerChoice = function(diceNumber) {
  // if user choose 1, we will print out the rolls in the current order
  // if user chooses 2, we will swap the dice rolls and print that out instead
  var playersNumber = `${playerRolls[turnCounter]}${playerRolls[turnCounter+1]}`;
  if (diceNumber == 2) {
    console.log("Control flow checking: user input 2");
    playersNumber = `${playerRolls[turnCounter+1]}${playerRolls[turnCounter]}`;
    console.log(`playerRolls is now ${playerRolls}`);
  }
  var message = `Player ${turnCounter+1} chose ${diceNumber}. Your number is ${playersNumber}`;
  // add to chosen numbers array
  playersChosenNumbers.push(playersNumber);
  // change game mode depending on curren turn.
  if (turnCounter == 0) {
    // reset gameState to roll
    gameState = 'ROLL';
  }
  if (turnCounter == 1) {
    gameState = 'COMPARE';
  }
  // increment turn counter.
  turnCounter += 1;
  return message;
}

var compareNumbers = function() {
  var message = '';
  if (Number(playersChosenNumbers[0]) > Number(playersChosenNumbers[1])) {
    message = 'Player 1 wins';
  }
  if (Number(playersChosenNumbers[1]) > Number(playersChosenNumbers[0])) {
    message = 'Player 2 wins';
  }
  if (Number(playersChosenNumbers[1]) == Number(playersChosenNumbers[2])) {
    message = 'Tie!';
  }
  return message;
}

var main = function(input) {
  // initialise output to an empty string
  var outputValue = '';
  
  if (gameState == 'ROLL') {
    console.log("Control flow checking: we are in roll mode.")
    // if the second player just rolled, reset the array and counter 
    if (turnCounter == 2) { 
      // reset global variables
      playerRolls = [];
      playersChosenNumbers = [];
      turnCounter = 0;
    }
    // get result of rolled dices
    outputValue = playerTurn();
    gameState = 'CHOOSE';
    return outputValue;
  }
  if (gameState == 'CHOOSE') {
    console.log("Control flow checking: we are in choose mode.")
    // input validation
    if (input != 1 && input != 2) {
      return 'Please input either 1 or 2';
    }
    outputValue = playerChoice(input);
    return outputValue;
  }
  if (gameState == 'COMPARE') {
    console.log("Control flow checking: we are in compare mode");
    outputValue = compareNumbers();
    gameState = 'ROLL';
    return outputValue;
  }
}