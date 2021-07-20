var correctGuesses = 0;

var main = function (input) {
  var computer = computerWord();
  var myOutputValue = "Please input 'banana', 'chisel' or 'faucet'.";

  if (input != computer) {
    myOutputValue =
      "You guessed wrongly! You picked " +
      input +
      " and the computer picked " +
      computer +
      "!" +
      "<br>" +
      "<br>" +
      "Number of correct guesses obtained = " +
      correctGuesses +
      "<br>" +
      "<br>" +
      "Number of correct guesses required = " +
      (2 - correctGuesses) +
      "<br>" +
      "<br>" +
      "Try again by inputting 'banana', 'chisel' or 'faucet'.";
    console.log("The results are different");
  }
  if (input == computer) {
    correctGuesses = correctGuesses + 1;
    myOutputValue =
      "You guessed correctly! You picked " +
      input +
      " and the computer picked " +
      computer +
      "!" +
      "<br>" +
      "<br>" +
      "Number of correct guesses obtained = " +
      correctGuesses +
      "<br>" +
      "<br>" +
      "Number of correct guesses required = " +
      (2 - correctGuesses) +
      "<br>" +
      "<br>" +
      "Try again by inputting 'banana', 'chisel' or 'faucet'.";
    console.log("The results are similar");
  }
  if (correctGuesses >= 2.1) {
    myOutputValue =
      "You have already beaten the game! Refresh the site to start a new game.";
    console.log("Number of correct guesses");
    console.log(correctGuesses);
  }
  if (correctGuesses == 2) {
    myOutputValue =
      "You guessed correctly! You picked " +
      input +
      " and the computer picked " +
      computer +
      "!" +
      "<br>" +
      "<br>" +
      "Number of correct guesses obtained = " +
      correctGuesses +
      "<br>" +
      "<br>" +
      "Number of correct guesses required = " +
      (2 - correctGuesses) +
      "<br>" +
      "<br>" +
      "You have guessed twice correctly and hence beat the game!";
    console.log("beat twice");
    correctGuesses = 2.1;
  }
  if (input != "banana" && input != "chisel" && input != "faucet") {
    myOutputValue = "Please input 'banana', 'chisel' or 'faucet'.";
  }
  return myOutputValue;
};

// Randomly generated computer word
var computerWord = function () {
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randomRoll = randomInteger + 1;
  console.log("This is the random number");
  console.log(randomRoll);
  var randomComputerWord = randomRoll;
  if (randomComputerWord == 1) {
    randomComputerWord = "banana";
  }
  if (randomComputerWord == 2) {
    randomComputerWord = "chisel";
  }
  if (randomComputerWord == 3) {
    randomComputerWord = "faucet";
  }
  console.log("This is the random word");
  console.log(randomComputerWord);
  return randomComputerWord;
};
