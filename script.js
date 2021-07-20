// Winrate
var correctGuesses = 0;
var numberOfTries = 0;
var correctGuessesRate = correctGuesses + "/" + numberOfTries;
// Game
var main = function (input) {
  var computer = computerWord();
  // Default output
  var myOutputValue = "Please input 'banana', 'chisel' or 'faucet'.";
  // If the user guesses incorrectly:
  if (input != computer) {
    // Regardless of outcome, number of tries will increase by 1
    numberOfTries = numberOfTries + 1;
    // Computing the guess rate
    correctGuessesRate = correctGuesses + "/" + numberOfTries;
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
      "Your guess rate = " +
      correctGuessesRate +
      "<br>" +
      "<br>" +
      "Try again by inputting 'banana', 'chisel' or 'faucet'.";
    console.log("The results are different");
  }
  // If the user guesses correctly
  if (input == computer) {
    numberOfTries = numberOfTries + 1;
    // Number of correct guesses has increased.
    correctGuesses = correctGuesses + 1;
    correctGuessesRate = correctGuesses + "/" + numberOfTries;
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
      "Your guess rate = " +
      correctGuessesRate +
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
    correctGuessesRate = correctGuesses + "/" + numberOfTries;
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
      "Your guess rate = " +
      correctGuessesRate +
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
