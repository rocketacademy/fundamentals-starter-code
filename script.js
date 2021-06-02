var main = function (input) {
  //Option is Computer Generated Result of RPS
  var assignNumberToOption = randomiser();
  console.log(assignNumberToOption);
  var winMessage = "You Win";
  var drawMessage = "Draw!";
  var loseMessage = "You Lose!";
  var emptyMessage = "Please enter scissors/paper/rock into box";
  var invalidMessage = "Invalid entry!!!!";

  //scissors win paper
  if (input == "scissors" && assignNumberToOption == "paper") {
    return winMessage;
  }
  //paper win rock
  if (input == "paper" && assignNumberToOption == "rock") {
    return winMessage;
  }
  //rock win scissors
  if (input == "rock" && assignNumberToOption == "scissors") {
    return winMessage;
  }
  //scissors draw
  if (input == "scissors" && assignNumberToOption == "scissors") {
    return drawMessage;
  }
  //paper draw
  if (input == "paper" && assignNumberToOption == "paper") {
    return drawMessage;
  }
  //rock draw
  if (input == "rock" && assignNumberToOption == "rock") {
    return drawMessage;
  }
  //scissors lose to rock
  if (input == "scissors" && assignNumberToOption == "rock") {
    return loseMessage;
  }
  //paper lose to scissors
  if (input == "paper" && assignNumberToOption == "scissors") {
    return loseMessage;
  }
  //rock lose to paper
  if (input == "rock" && assignNumberToOption == "paper") {
    return loseMessage;
  }
  if (input != "") {
    return invalidMessage;
  }
  return emptyMessage;
};

//Number randomiser assigned to RPS
var randomiser = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var actualInteger = randomInteger + 1;
  if (actualInteger == 1) {
    return "scissors";
  }
  if (actualInteger == 2) {
    return "paper";
  }
  if (actualInteger == 3) {
    return "rock";
  }
};
