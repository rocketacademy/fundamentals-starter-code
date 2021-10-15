var main = function (input) {
  var randomDiceRoll = diceRoll();
  console.log("dice roll");
  console.log(randomDiceRoll);
  if (input == "scissors") {
    if (randomDiceRoll == 1) {
      myOutputValue = "scissors,draw";
    }
    if (randomDiceRoll == 2) {
      myOutputValue = "paper,win";
    }
    if (randomDiceRoll == 3) {
      myOutputValue = "stone,lose";
    }
  }
  if (input == "paper") {
    if (randomDiceRoll == 1) {
      myOutputValue = "scissors,lose";
    }
    if (randomDiceRoll == 2) {
      myOutputValue = "paper,draw";
    }
    if (randomDiceRoll == 3) {
      myOutputValue = "stone,win";
    }
  }
  if (input == "stone") {
    if (randomDiceRoll == 1) {
      myOutputValue = "scissors,win";
    }
    if (randomDiceRoll == 2) {
      myOutputValue = "paper,lose";
    }
    if (randomDiceRoll == 3) {
      myOutputValue = "stone,draw";
    }
  }
  return myOutputValue;
};

var diceRoll = function () {
  var randomDec = Math.random() * 3;
  var randomInt = Math.floor(randomDec);
  var diceNum = randomInt + 1;
  return diceNum;
};
