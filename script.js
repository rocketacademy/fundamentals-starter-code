// Counters to keep track of scores
var totalAttempts = 0;
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
// Player's name
var userName = "";
var emptyUserName = true;

var getRandomOutput = function () {
  // Get random integer from 1 to 3
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;

  var randomOutput = "Scissors";

  if (randomInteger == 2) {
    randomOutput = "Stone";
  }

  if (randomInteger == 3) {
    randomOutput = "Paper";
  }

  return randomOutput;
};

var checkInput = function (input) {
  var errorMessage =
    "Incorrect input, please try again. <br > Acceptable Inputs: 'Scissors' / 'Paper' / 'Stone' <br> For reverse game, input 'Reversed ' before your input";

  if (input == "Scissors" || input == "Stone" || input == "Paper") {
    errorMessage = "";
  } else if (
    input == "Reversed Scissors" ||
    input == "Reversed Stone" ||
    input == "Reversed Paper"
  ) {
    errorMessage = "";
  }
  return errorMessage;
};

var checkBattleOutcome = function (userInput, programInput) {
  var reversedGame = false;
  var finalBattleOutcome = "Something went wrong.";
  var userInputForGame = userInput;
  var userWon = true;
  if (userInput.startsWith("Reversed")) {
    userInputForGame = userInputForGame.replace("Reversed ", "");
    reversedGame = true;
  }
  if (userInputForGame == programInput) {
    drawCount += 1;
    finalBattleOutcome = "Draw";
    return finalBattleOutcome;
  }
  if (userInputForGame == "Scissors") {
    if (programInput == "Stone") {
      userWon = false;
    } else {
      userWon = true;
    }
  } else if (userInputForGame == "Stone") {
    if (programInput == "Paper") {
      userWon = false;
    } else {
      userWon = true;
    }
  } else {
    if (programInput == "Scissors") {
      userWon = false;
    } else {
      userWon = true;
    }
  }
  if (reversedGame == true) {
    userWon = !userWon;
  }
  if (userWon == true) {
    userWinCount += 1;
    finalBattleOutcome = `You win! =D`;
  } else {
    computerWinCount += 1;
    finalBattleOutcome = `You lose :(`;
  }
  return finalBattleOutcome;
};

var scissorsPaperStoneGame = function (input) {
  var errorMessage = checkInput(input);

  if (errorMessage != "") {
    return errorMessage;
  }

  totalAttempts += 1;

  var computerDecision = getRandomOutput();
  console.log(computerDecision);

  var battleResult = checkBattleOutcome(input, computerDecision);

  // if ("win" in battleResult) {
  //   userWinCount += 1;
  // } else if ("lose" in battleResult) {
  //   computerWinCount += 1;
  // } else {
  //   drawCount += 1;
  // }

  console.log("user count ---> " + userWinCount);
  console.log("com count ---> " + computerWinCount);
  var userWinPercentage = (userWinCount / totalAttempts) * 100;
  var computerWinPercentage = (computerWinCount / totalAttempts) * 100;

  return `Computer chose ${computerDecision}, you chose ${input}
  <br> Current Result: ${battleResult}
  <br> OVERALL
  <br> ${userName} Won: ${userWinCount} time(s), ${userName} Win Percentage: ${userWinPercentage}%
  <br> Computer Won: ${computerWinCount} time(s), Computer Win Percentage: ${computerWinPercentage}%
  <br> Draw: ${drawCount} time(s)
  `;
};

var checkUserName = function (input) {
  console.log(input);
  userName = input;
  if (userName == "") {
    return "Pls input a username";
  }
  emptyUserName = false;
  return `Hi ${userName}!
  <br> To start the game, input 'Scissors' / 'Paper' / 'Stone'
  <br> If you want to play the reversed game mode, insert 'Reversed ' before your input
  <br> Good luck!`;
};

var main = function (input) {
  var mainOutputValue = "";

  if (emptyUserName == true) {
    mainOutputValue = checkUserName(input);
    return mainOutputValue;
  }

  mainOutputValue = scissorsPaperStoneGame(input);

  return mainOutputValue;
};
