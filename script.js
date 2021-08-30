var winCount = 0;
var lossCount = 0;
var inputCount = 0;
var username;

var main = function (input) {
  if (inputCount != 0 && isInvalidInput(input)) {
    return "There are only 3 input options, please try again";
  }

  if (inputCount == 0) {
    inputCount = inputCount + 1;
    return saveUser(input);
  }

  var computer = generateComputerSelection();

  var winStatus = checkWinStatus(input, computer);
  inputCount = inputCount + 1;

  if (winStatus == "win") {
    winCount = winCount + 1;
  }
  if (winStatus == "loss") {
    lossCount = lossCount + 1;
  }
  return generateOutput(winStatus, input, computer);
};

// Save user name
var saveUser = function (input) {
  username = input;
  return "User name is saved, continue to scissors, paper, stone game!";
};

// Generate Output Statement
var generateOutput = function (winStatus, input, computer) {
  // Computer Selection
  var statement1;
  if (computer == "paper") {
    statement1 = "The computer chose paper 🗒<br>";
  }
  if (computer == "scissors") {
    statement1 = "The computer chose scissors ✂️<br>";
  }
  if (computer == "stone") {
    statement1 = "The computer chose stone 🪨<br>";
  }

  //User Input
  var statement2;
  if (input == "paper") {
    statement2 = "You chose paper 🗒<br>";
  }
  if (input == "scissors") {
    statement2 = "You chose scissors ✂️<br>";
  }
  if (input == "stone") {
    statement2 = "You chose stone 🪨<br>";
  }

  var combinedStatement;
  // Combined Statement
  if (winStatus == "win")
    combinedStatement =
      statement1 +
      statement2 +
      "<br>" +
      "You win<br>" +
      "<br>" +
      `So far ${username}, you've been winning ${winCount}/${lossCount} turns. Pretty good!`;
  if (winStatus == "loss")
    combinedStatement =
      statement1 +
      statement2 +
      "<br>" +
      "You lose! Bummer.<br>" +
      "<br>" +
      `So far ${username}, you've been winning ${winCount}/${lossCount} turns. Pretty good!`;
  if (winStatus == "draw")
    combinedStatement =
      statement1 +
      statement2 +
      "<br>" +
      "It is a draw<br>" +
      "<br>" +
      `So far ${username}, you've been winning ${winCount}/${lossCount} turns. Pretty good!`;

  return combinedStatement;
};

// Check win status, function will return string "win", "loss", "draw"
var checkWinStatus = function (input, computer) {
  if (input == "paper") {
    if (computer == "stone") {
      return "win";
    }
    if (computer == "scissors") {
      return "loss";
    }
  }
  if (input == "scissors") {
    if (computer == "paper") {
      return "win";
    }
    if (computer == "stone") {
      return "loss";
    }
  }
  if (input == "stone") {
    if (computer == "scissors") {
      return "win";
    }
    if (computer == "paper") {
      return "loss";
    }

    if (input == computer) {
      return "draw";
    }
  }
};

//Assign Computer Selection based on random integer generated, 0 = paper, 1 = scissors, 2 = stone
var generateComputerSelection = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);

  if (resultInteger == 0) {
    return "paper";
  }
  if (resultInteger == 1) {
    return "scissors";
  }
  if (resultInteger == 2) {
    return "stone";
  }
};

//To check fo invalid input, return Boolean true if input is invalid
var isInvalidInput = function (input) {
  if (input == "stone" || input == "paper" || input == "scissors") {
    return false;
  } else {
    return true;
  }
};
