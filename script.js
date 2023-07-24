// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, the player with the higher combined number wins.

// define game states
var DICE_ROLL = "DICE_ROLL";
var CHOOSE_DICE_ORDER = "CHOOSE_DICE_ORDER";
var DECLARE_WINNER = "DECLARE_WINNER";
// game starts with the DICE_ROLL game state
var gameMode = DICE_ROLL;

// create a variable to define which player is playing
var currentPlayer = 1;

// create an array that stores the values of each player
var playerRolls = [];

// create an array that stores the values of both players
var bothPlayerRolls = [];

var main = function (input) {
  // if input is anything other than blank, return this message
  if (gameMode == DICE_ROLL && input != "") {
    return `Please press Submit to roll the dice`;
  }
  if (gameMode == DICE_ROLL && input == "") {
    // return 2 dice output message
    var myOutputValue = playerDiceRolls();
    // change game state to Choose Dice Order
    gameMode = CHOOSE_DICE_ORDER;
    return myOutputValue;
  }
  if (gameMode == CHOOSE_DICE_ORDER) {
    myOutputValue = finalNumber(input);
    if (currentPlayer == 1) {
      // once player 1's turn is completed, switch to player 2
      currentPlayer = 2;
      // switch the game mode back to DICE_ROLL to start from the beginning
      gameMode = DICE_ROLL;
      return `${myOutputValue} It is now Player ${currentPlayer}'s turn! <br>
      Please press submit again to roll the dice.`;
    }
    if (currentPlayer == 2) {
      gameMode = DECLARE_WINNER;
      console.log(`GAME MODE = ${gameMode}`);
      return `${myOutputValue} Press submit again to see the winner!`;
    }
  }
  if (gameMode == DECLARE_WINNER) {
    myOutputValue = `Player 1's score is <b>${bothPlayerRolls[0]}</b> and Player 2's score is <b>${bothPlayerRolls[1]}</b>.`;
    if (bothPlayerRolls[0] > bothPlayerRolls[1]) {
      myOutputValue = `${myOutputValue} <br> <h2>Player 1 wins!</h2><br> Press submit to roll Player 1's dice again.`;
    }
    if (bothPlayerRolls[1] > bothPlayerRolls[0]) {
      myOutputValue = `${myOutputValue} <br> <h2>Player 2 wins!</h2><br> Press submit to roll Player 1's dice again.`;
    }
    if (bothPlayerRolls[1] == bothPlayerRolls[0]) {
      myOutputValue = `${myOutputValue} <br><h2> It's a tie! </h2><br> Press submit to roll Player 1's dice again.`;
    }
    resetGame();
    return myOutputValue;
  }
};

// create a function that lets the player get their final number
var finalNumber = function (input) {
  var playerFinalNumber = "";
  // if the player inputs any number but 1 or 2, return this message.
  // how to show this message again if they continue clicking submit?
  if (gameMode == CHOOSE_DICE_ORDER && input != 1 && input != 2) {
    return `Input not recognised. Please input either 1 or 2 to choose the number order.<br><br>
    You rolled: <br> Dice One - <b>${playerRolls[0]}</b> and <br> Dice Two - <b>${playerRolls[1]}</b>`;
  }
  if (input == 1) {
    // capture Player's number. Convert numbers to a string because the numbers will add together otherwise
    var playerFinalNumber = Number(
      String(playerRolls[0]) + String(playerRolls[1])
    );
  }
  if (input == 2) {
    // capture Player's number
    var playerFinalNumber = Number(
      String(playerRolls[1]) + String(playerRolls[0])
    );
  }

  // store players final numbers
  bothPlayerRolls.push(playerFinalNumber);
  console.log(`Both Player Rolls: ${bothPlayerRolls}`);
  // reset the array for the current player
  playerRolls = [];
  console.log(`Player Rolls: ${playerRolls}`);
  return `Your final number is <b>${playerFinalNumber}</b>. <br>`;
};

// create a loop that rolls 2 dice
var playerDiceRolls = function () {
  var counter = 0;
  while (counter < 2) {
    playerRolls.push(diceRoll());
    counter = counter + 1;
  }
  return `<h3>Greetings Player ${currentPlayer}!</h3>
  You rolled: <br> Dice One - <b>${playerRolls[0]}</b> and <br> Dice Two - <b>${playerRolls[1]}</b><br><br>
  Please input either 1 or 2 to decide the number order.`;
};

// create dice roll
var diceRoll = function () {
  // randomly output decimals from 0-5.9999
  var randomNumber = Math.random() * 6;
  // removes decimals (0-5)
  var integerNumber = Math.floor(randomNumber);
  // add 1 to raise the range to 1-6
  var randomNumber = integerNumber + 1;
  console.log(randomNumber);
  return randomNumber;
};

// reset the game
var resetGame = function () {
  // reset to player 1
  currentPlayer = 1;
  // reset to first mode
  gameMode = DICE_ROLL;
  // clear the bothPlayerRolls array
  bothPlayerRolls = [];
};
