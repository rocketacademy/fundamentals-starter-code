var winCount = 0;

var main = function (input) {
  var computerOutput = generateRandomWord();

  if (input == computerOutput) {
    console.log("win - check");
    winCount = winCount + 1;
    var myOutputValue = "You win this round. ";
  }
  if (winCount == 2) {
    var winMessage = "You win!";
    winCount = 0;
  }

  if (winCount == 0) {
    var winMessage = "2 more correct guesses left to win.";
  }

  if (winCount == 1) {
    var winMessage = "1 more correct guesses left to win";
  }

  return (
    "Your guess was " +
    input +
    ". Secret word is " +
    computerOutput +
    ". " +
    winMessage
  );
};

//input -- a word
// -- secret words -- banana, chisel, faucet
// -- guess correctly twice in total regardless of how many losses
//output -- Guessed word + secret word + number of correct guesses left to win

// generate random word
var generateRandomWord = function () {
  var generateDecimal = Math.random() * 3;
  var generateInteger = Math.floor(generateDecimal);
  var generateNumber = generateInteger + 1;

  if (generateNumber == 1) {
    return "banana";
  }

  if (generateNumber == 2) {
    return "chisel";
  }

  if (generateNumber == 3) {
    return "faucet";
  }
};
