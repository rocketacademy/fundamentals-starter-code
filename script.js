var main = function (input) {
  //To check the validity of the user input
  if (isInvalidInput(input)) {
    return "There are only 3 input options, please try again";
  }

  //Assign Computer Selection; 0 = paper, 1 = scissors, 2 = stone
  var computer = generateRandNum();
  if (computer == 0) {
    var computer = "paper";
  }
  if (computer == 1) {
    var computer = "scissors";
  }
  if (computer == 2) {
    var computer = "stone";
  }

  //Check if there is a winning combination, default result is the user lose
  var result = "You lose! Bummer.<br>";
  if (input == "paper" && computer == "stone") {
    result = "You win<br>";
  }
  if (input == "scissors" && computer == "paper") {
    result = "You win<br>";
  }
  if (input == "stone" && computer == "scissors") {
    result = "You win<br>";
  }
  //Check for a possible draw
  if (input == computer) {
    result = "It is a draw<br>";
  }

  //Formatting
  var output1;
  if (computer == "paper") {
    output1 = "The computer chose paper 🗒<br>";
  }
  if (computer == "scissors") {
    output1 = "The computer chose paper ✂️<br>";
  }
  if (computer == "stone") {
    output1 = "The computer chose stone 🪨<br>";
  }

  //Formatting
  var output2;
  if (input == "paper") {
    output2 = "You chose paper 🗒<br>";
  }
  if (input == "scissors") {
    output2 = "You chose scissors ✂️<br>";
  }
  if (input == "stone") {
    output2 = "You chose stone 🪨<br>";
  }

  //Formatting
  var combinedOutput =
    output1 +
    output2 +
    "<br>" +
    result +
    "<br>" +
    'Now you can type "scissors" "paper" or "stone" to play another round!';

  return combinedOutput;
};

//To generate random number between 0 to 2 inclusive
var generateRandNum = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);
  return resultInteger;
};

//To check fo invalid input, return Boolean true if input is invalid
var isInvalidInput = function (input) {
  if (input == "stone" || input == "paper" || input == "scissors") {
    return false;
  }
  return true;
};
