//tracker for player score
var player1Score = 0;
var player2Score = 0;
//total score for player
var totalPlayer1Score = [];
var totalPlayer2Score = [];
var totalSumPlayer1 = 0;
var totalSumPlayer2 = 0;
//dices for players
var player1Dice1 = 0;
var player1Dice2 = 0;
var player2Dice1 = 0;
var player2Dice2 = 0;

var gameMode = `player one roll`;

var main = function (input) {
  if (gameMode == `player one roll`) {
    return player1Roll();
  } else if (gameMode == `player one choose`) {
    return player1Choose(input);
  } else if (gameMode == `player two roll`) {
    return player2Roll();
  } else if (gameMode == `player two choose`) {
    return player2Choose(input);
  } else if (gameMode == `winner`) {
    return showWinner();
  } else if (gameMode == `leaderboard`) {
    return showTotalScore();
  }
};

var diceRoll = function () {
  var randomInteger = Math.ceil(Math.random() * 6);
  return randomInteger;
};

var inputNumber = function (input) {
  if (isNaN(input) || input == ``) {
    return `<div id="instructions">Oops, you did not enter a number. Please enter a valid number (1 or 2).</div>`;
  } else {
    //verifies if input is 1 or 2
    if (input != 1 || input != 2) {
      return `<div id="instructions">It looks like you didn't enter 1 or 2. Please select either dice 1 or 2.</div>`;
    }
  }
};

var player1Roll = function () {
  player1Dice1 = diceRoll();
  player1Dice2 = diceRoll();
  gameMode = `player one choose`;
  return `you have rolled <BR>dice one: ${player1Dice1}<BR>dice two: ${player1Dice2} <BR><BR>which dice would you like to place infront`;
};

var player1Choose = function (input) {
  if (input == `1`) {
    gameMode = `player two roll`;
    player1Score = player1Dice1 * 10 + player1Dice2;
    totalPlayer1Score.push(player1Score);
    return `player 1 your score is ${player1Score} <BR>player 2 turn to roll`;
  } else if (input == `2`) {
    gameMode = `player two roll`;
    player1Score = player1Dice2 * 10 + player1Dice1;
    totalPlayer1Score.push(player1Score);
    return `player 1 your score is ${player1Score} <BR>player 2 turn to roll`;
  } else {
    return inputNumber(input);
  }
};

var player2Roll = function () {
  player2Dice1 = diceRoll();
  player2Dice2 = diceRoll();
  gameMode = `player two choose`;
  return `you have rolled <BR>dice one: ${player2Dice1}<BR>dice two: ${player2Dice2} <BR><BR>which dice would you like to place infront`;
};

var player2Choose = function (input) {
  if (input == `1`) {
    gameMode = `winner`;
    player2Score = player2Dice1 * 10 + player2Dice2;
    totalPlayer2Score.push(player2Score);
    return `player 2 your score is ${player2Score} `;
  } else if (input == `2`) {
    gameMode = `winner`;
    player2Score = player2Dice2 * 10 + player2Dice1;
    totalPlayer2Score.push(player2Score);
    return `player 2 your score is ${player2Score} `;
  } else {
    return inputNumber(input);
  }
};

var showWinner = function () {
  if (player1Score < player2Score) {
    gameMode = `leaderboard`;
    return `player1 score: ${player1Score}<BR>player2 score: ${player2Score}<BR><BR>player 2 won!`;
  } else if (player1Score > player2Score) {
    gameMode = `leaderboard`;
    return `player1 score: ${player1Score}<BR>player2 score: ${player2Score}<BR><BR>player 1 won!`;
  }
};

var showTotalScore = function () {
  totalSumPlayer1 = 0;
  totalSumPlayer2 = 0;
  for (a = 0; a < totalPlayer1Score.length; a++) {
    totalSumPlayer1 += totalPlayer1Score[a];
    console.log(totalPlayer1Score);
  }
  for (b = 0; b < totalPlayer2Score.length; b++) {
    totalSumPlayer2 += totalPlayer2Score[b];
    console.log(totalPlayer2Score);
  }
  if (totalSumPlayer1 > totalSumPlayer2) {
    gameMode = `player one roll`;
    return `player 1 is leading! <BR>player 1 has a total score of: ${totalSumPlayer1}<BR>player 2 has a total score of: ${totalSumPlayer2} <BR><BR>past rolls <BR>player 1 : ${totalPlayer1Score}<BR>player 2 : ${totalPlayer2Score} `;
  }
  if (totalSumPlayer1 < totalSumPlayer2) {
    gameMode = `player one roll`;
    return `player 2 is leading! <BR>player 1 has a total score of: ${totalSumPlayer1}<BR>player 2 has a total score of: ${totalSumPlayer2} <BR><BR>past rolls <BR>player 1 : ${totalPlayer1Score}<BR>player 2 : ${totalPlayer2Score}`;
  }
};
