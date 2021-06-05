var numberOfCorrectGuesses = 0;

var rollDice = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;
  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);
  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;
  console.log(diceNumber);
  return diceNumber;
};

var secretWord = function (number) {
  if (number == 1) {
    return "banana";
  } else if (number == 2) {
    return "chisel";
  } else {
    return "faucet";
  }
};
var main = function (input) {
  var myOutputValue = secretWord(rollDice());
  if (input == myOutputValue) {
    numberOfCorrectGuesses = numberOfCorrectGuesses + 1;
    if (numberOfCorrectGuesses == 2) {
      return `You guessed the word ${input} correctly. You win!`;
    } else if (numberOfCorrectGuesses == 1) {
      return `You guessed the word ${input} correctly. You still need 1 more try to win`;
    }
  } else {
    return `You guessed the word ${input}. The correct word is ${myOutputValue}. You have won ${numberOfCorrectGuesses} times. `;
  }
  console.log(`this is myOutputValue ` + myOutputValue);
};
