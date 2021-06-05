var optionsAndEmoji = {
  scissors: "scissors ✌",
  paper: "paper ✋",
  stone: "stone ✊",
};

var mode = "normal";

var randomizeObject = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var message = "";
  if (randomInteger == 0) {
    message = "scissors";
    return message;
  } else if (randomInteger == 1) {
    message = "paper";
    return message;
  } else randomInteger == 2;
  message = "stone";
  return message;
};

var winningconditions = function (
  assignedNumToScissorsPaperStone,
  input,
  scissors,
  paper,
  stone
) {
  if (input == assignedNumToScissorsPaperStone) {
    console.log("draw");
    myOutputValue =
      "The computer chose " +
      optionsAndEmoji[assignedNumToScissorsPaperStone] +
      "<br>" +
      "You chose " +
      optionsAndEmoji[input] +
      "<br>You Draw!" +
      "<br>Now you can type scissors paper or stone to play another round!";
    return myOutputValue;
  } else if (
    (input == "scissors" && assignedNumToScissorsPaperStone == paper) ||
    (input == "stone" && assignedNumToScissorsPaperStone == scissors) ||
    (input == "paper" && assignedNumToScissorsPaperStone == stone)
  ) {
    myOutputValue =
      "The computer chose " +
      optionsAndEmoji[assignedNumToScissorsPaperStone] +
      "<br>" +
      "You chose " +
      optionsAndEmoji[input] +
      "<br>You Win!" +
      "<br>Now you can type scissors paper or stone to play another round!";
    return myOutputValue;
  } else {
    myOutputValue =
      "The computer chose " +
      optionsAndEmoji[assignedNumToScissorsPaperStone] +
      "<br>" +
      "You chose " +
      optionsAndEmoji[input] +
      "<br>You Lose!" +
      "<br>Now you can type scissors paper or stone to play another round!";
    return myOutputValue;
  }
};

var main = function (input) {
  var scissors = "scissors";
  var paper = "paper";
  var stone = "stone";
  var myOutputValue = "bug";
  if (input == "reversed") {
    mode = "reversed";
  }
  if (input == "normal") {
    mode = "normal";
  }
  // type in the options available or else show message in line 106
  if (input == "scissors" || input == "paper" || input == "stone") {
    var assignedNumToScissorsPaperStone = randomizeObject();
    console.log(assignedNumToScissorsPaperStone);
    console.log(optionsAndEmoji[input]);
    //swap the position of the parameter for scissors paper stone for reservsed mode
    // scissor beat stone , stone beat paper and paper beat scissors
    if (mode == "reversed") {
      myOutputValue = winningconditions(
        assignedNumToScissorsPaperStone,
        input,
        paper,
        stone,
        scissors
      );
      return myOutputValue;
    } // default game logic , scissors beat paper , paper beat stone and stone beat scissors
    myOutputValue = winningconditions(
      assignedNumToScissorsPaperStone,
      input,
      scissors,
      paper,
      stone
    );
    return myOutputValue;
  } else {
    myOutputValue = "Please enter 1 of the options: scissors paper stone";
    return myOutputValue;
  }
};
