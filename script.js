//Blackjack game
//Start game
//Create a deck of card
//Shuffle the deck
//Deal cards to player and dealer
//Give player option to hit or stand
//Calculate score
//Determine who wins

var main = function (input) {
  var myOutputValue = "hello world";

  if (input == "hit") {
    myOutputValue = "The Hit Button has been clicked.";
  } else if (input == "stand") {
    myOutputValue = "Stand button has been selected";
  } else if (input == "reset") {
    myOutputValue = "Reset The Game";
  }
  return myOutputValue;
};
