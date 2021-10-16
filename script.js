//declare global variable
var winCounter = 0;
var loseCounter = 0;

var main = function (input) {
  var myOutputValue = "Please input Rock, Paper or Scissors";

  var computerShows = computerGuess();
  //if user chooses rock,  computer chooses scissors, user wins
  //if user chooses scissors, computer chooses paper, user wins
  //if user chooses paper, computer chooses rock, user wins
  if (
    (input == "rock" && computerShows == "scissors") ||
    (input == "paper" && computerShows == "rock") ||
    (input == "scissors" && computerShows == "paper")
  ) {
    winCounter = winCounter + 1;
    var winPercentage = (
      100 *
      (winCounter / (winCounter + loseCounter))
    ).toFixed(2);
    console.log("winCount");
    console.log(winCounter);
    var myOutputValue =
      "you win! <br><br> you guessed " +
      input +
      " while computer guessed " +
      computerShows +
      "<br> you won " +
      winPercentage +
      " % of the time";
  }

  //if user chooses rock, computer chooses paper, user loses
  //if user chooses scissors, computer chooses rock, user loses
  //if user chooses paper, computer chooses scissors, user loses
  if (
    (input == "rock" && computerShows == "paper") ||
    (input == "paper" && computerShows == "scissors") ||
    (input == "scissors" && computerShows == "rock")
  ) {
    loseCounter = loseCounter + 1;
    console.log("loseCount");
    console.log(loseCounter);
    var winPercentage = (
      100 *
      (winCounter / (winCounter + loseCounter))
    ).toFixed(2);
    var myOutputValue =
      "you lose! <br><br> you guessed " +
      input +
      " while computer guessed " +
      computerShows +
      "<br> you won " +
      winPercentage +
      " % of the time";
  }

  //if user chooses rock, computer chooses rock, they draw
  //if user chooses scissors, computer chooses scissors, they draw
  //if user chooses paper, computer chooses paper, they draw
  if (
    (input == "rock" && computerShows == "rock") ||
    (input == "paper" && computerShows == "paper") ||
    (input == "scissors" && computerShows == "scissors")
  ) {
    var myOutputValue =
      "its a draw! <br><br> you guessed " +
      input +
      " while computer guessed " +
      computerShows;
  }

  return myOutputValue;
};

//computer will generate either rock, scissors or paper
var computerGuess = function () {
  var randomDecimal = Math.random();
  var randomNumber = Math.floor(randomDecimal * 3);
  var randomNumberPlusOne = randomNumber + 1;
  if (randomNumberPlusOne == 1) {
    var computerOutput = "rock";
  }
  if (randomNumberPlusOne == 2) {
    var computerOutput = "paper";
  }
  if (randomNumberPlusOne == 3) {
    var computerOutput = "scissors";
  }
  return computerOutput;
};
