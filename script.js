/**
 * Lucky 11
 */
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// We do not use an input parameter because this game does not depend on input.
var lucky11 = function () {
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var standardMessage = `Dice 1: ${diceRoll1}. Dice 2: ${diceRoll2}.`;
  if (diceRoll1 == 5 && diceRoll2 == 6) {
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose.`;
};

/**
 * Secret Word
 */
var numCorrectGuessesNeededToWin = 2;
var numCorrectGuessesSoFar = 0;

// Randomly return one of banana, chisel or faucet.
var generateSecretWord = function () {
  // Generate random number between 1 and 3
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;

  // Return the word that corresponds to the relevant number
  if (randomNum == 1) {
    return 'banana';
  }
  if (randomNum == 2) {
    return 'chisel';
  }
  return 'faucet';
};

var playSecretWord = function (guessedWord) {
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed twice correctly. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly! You need 1 more correct guess to win.`;
  }
  var numCorrectGuessesRemainingToWin = numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesRemainingToWin} more correct guesses to win.`;
};

/**
 * Secret Word Twice in a Row
 */
var prevSecretWord = '';

// Randomly return banana, chisel or faucet without repeating words across consecutive guesses.
var generateSecretWordNoRepeats = function () {
  var secretWord = prevSecretWord;
  // Keep generating secret words until we get a different word
  while (secretWord == prevSecretWord) {
    // Use generateSecretWord function from previous exercise
    secretWord = generateSecretWord();
  }
  // Keep track of the current secret word as prevSecretWord in the next guess.
  prevSecretWord = secretWord;
  return secretWord;
};

var playSecretWordTwiceInARow = function (guessedWord) {
  var secretWord = generateSecretWordNoRepeats();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    // Use numCorrectGuessesSoFar and numCorrectGuessesNeededToWin variables from prev exercise.
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed correctly twice in a row. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly! You need 1 more correct guess to win.`;
  }
  // Reset counter of correct guesses to 0 to implement 2 in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need 2 more correct guesses to win.`;
};

/**
 * Secret Word X in a Row
 */
// Initialise isStartOfRound to true to generate numCorrectGuessesNeededToWin at start of round.
var isStartOfRound = true;

// Generate random number between 2 and 4
var generateNumCorrectGuessThreshold = function () {
  return Math.floor(Math.random() * 3) + 2;
};

var playSecretWordXInARow = function (guessedWord) {
  // If start of round, re-generate num correct guesses needed to win.
  if (isStartOfRound) {
    numCorrectGuessesNeededToWin = generateNumCorrectGuessThreshold();
    // Set isStartOfRound to false until start of next round.
    isStartOfRound = false;
  }

  // Generate secret word without repeats
  var secretWord = generateSecretWordNoRepeats();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;

  // Guess is correct
  if (secretWord == guessedWord) {
    // Use numCorrectGuessesSoFar and numCorrectGuessesNeededToWin variables from prev exercise.
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      // Reset isStartOfRound to true to generate new num correct guesses threshold the next round.
      isStartOfRound = true;
      return `${standardMessage} You guessed correctly ${numCorrectGuessesNeededToWin} times in a row. You win! Please play again.`;
    }
    var numCorrectGuessesRemainingToWin = numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
    return `${standardMessage} You guessed correctly! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }

  // Guess is incorrect
  // Reset counter of correct guesses to 0 to implement X in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

/**
 * Dice Within
 */
// Store within number as global to persist across guesses.
var withinNum;

// Generate number from 1 to 3
var generateWithinNum = function () {
  return Math.floor(Math.random() * 3) + 1;
};

var diceWithin = function (playerGuess) {
  // Use isStartOfRound variable from previous secret word exercise
  if (isStartOfRound) {
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }
  var diceRoll = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll: ${diceRoll}. Within number: ${withinNum}.`;

  if (playerGuess <= diceRoll + withinNum && playerGuess >= diceRoll - withinNum) {
    isStartOfRound = true;
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose.`;
};

/**
 * Dice Within with 2 Dice
 */
var determineIsWithinRange = function (guess, diceRoll) {
  return guess >= diceRoll - withinNum && guess <= diceRoll + withinNum;
};

// Determine if the guess is within the range of either dice rolls 1 or 2
var determineWin = function (guess, diceRoll1, diceRoll2) {
  return determineIsWithinRange(guess, diceRoll1)
    || determineIsWithinRange(guess, diceRoll2);
};

var diceWithinWith2Dice = function (playerGuess) {
  // Use isStartOfRound variable from previous Secret Word exercise
  if (isStartOfRound) {
    // Use withinNum variable from previous Dice Within exercise
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll 1: ${diceRoll1}. Dice roll 2: ${diceRoll2}. Within number: ${withinNum}.`;

  if (determineWin(playerGuess, diceRoll1, diceRoll2)) {
    isStartOfRound = true;
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose.`;
};

/**
 * Dice 4D
 */
var is4dTime = false;
var numWins = 0;

var play4d = function (playerGuess) {
  var fourDNum = Math.floor(Math.random() * 10000);
  var outputMessage = `Your guess: ${playerGuess}. 4D number: ${fourDNum}.`;
  if (playerGuess == fourDNum) {
    outputMessage += ' You won 4D! Congratulations!';
  } else {
    outputMessage += ' You did not win 4D.';
  }
  return `${outputMessage} Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
};

var dice4d = function (playerGuess) {
  // Play 4D if it's 4D time
  if (is4dTime) {
    is4dTime = false;
    return play4d(playerGuess);
  }

  // Generate new within number if it's the start of a dice round.
  // Use isStartOfRound variable from previous Secret Word exercise
  if (isStartOfRound) {
    // Use withinNum variable from previous Dice Within exercise
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }

  // Generate dice numbers
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll 1: ${diceRoll1}. Dice roll 2: ${diceRoll2}. Within number: ${withinNum}.`;

  // If the player wins, return the appropriate message.
  if (determineWin(playerGuess, diceRoll1, diceRoll2)) {
    isStartOfRound = true;
    // Keep track of number of wins such that the user can play 4D every 2 wins.
    numWins += 1;
    if (numWins >= 2) {
      // Reset number of wins every 2 wins.
      numWins = 0;
      // Set is4dTime to true so player can play 4D at next round.
      is4dTime = true;
      return `${standardMessage} You've won twice! Time to play 4D! Enter your 4D guess.`;
    }
    return `${standardMessage} You win! 1 more win to play 4D!`;
  }

  // Player loses. Output number of wins left to play 4D.
  var numWinsRemainingToPlay4d = 2 - numWins;
  return `${standardMessage} You lose. You need ${numWinsRemainingToPlay4d} more wins to play 4D.`;
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  return lucky11();
  // return playSecretWord(input);
  // return playSecretWordTwiceInARow(input);
  // return playSecretWordXInARow(input);
  // return diceWithin(input);
  // return diceWithinWith2Dice(input);
  // return dice4d(input);
};
