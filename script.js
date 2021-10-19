var scissors = "scissors";
var paper = "paper";
var stone = "stone";

var noTimesPlayerWin = 0;
var noTimesPlayerLose = 0;
var noTimesDraw = 0;

var userName = "";

var diceRoll = function () {
  randomDice = Math.floor(Math.random) * 3;
  if (randomDice == 0) {
    return scissors;
  }
  if (randomDice == 1) {
    return paper;
  }
  if (randomDice == 2) {
    return stone;
  }
};

var main = function (input) {
  if (!userName) {
    if (!input) {
      return "please input username";
    }
    userName = input;
    return "thank you," + userName + ".you can start playing sps.";
  }
  if (input != scissors && input != paper && input != stone) {
    return "please input scissors,paper or stone.";
  }

  var playerObject = input;
  var computerObject = diceRoll();

  if (playerObject == computerObject) {
    return "draw";
  }
  if (
    (playerObject == scissors && computerObject == paper) ||
    (playerObject == paper && computerObject == stone) ||
    (playerObject == stone && computerObject == scissors)
  ) {
    return "win";
  }
  return "lose";
};
