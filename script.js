//Blackjack game
//Start game

//Create a deck of card
var makeDeck = function () {
  var cardDeck = [];
  var suits = ["diamonds", "hearts", "clubs", "spades"];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    var rankCounter = 1;
    // Loop from 1 to 13 to create all cards for each suit
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardValue = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
        cardValue = 11;
      } else if (cardName == 11) {
        cardName = "jack";
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = "queen";
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = "king";
        cardValue = 10;
      }

      // Create a new card with the current name, suit, rank and value
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        value: cardValue,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
};

//Helper function to generate random index, to be used in the helper function shuffleDeck
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

//Shuffle the deck of cards
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < 52) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(52);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    //var randomCard = cardDeck[1];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//Deal cards to player and dealer
//Give player option to hit or stand
//Calculate score
//Determine who wins

//Global variables
// Store player's hand and dealer's hand in a separate array
var playerHand = [];
var dealerHand = [];
var playerScore = 0;
var dealerScore = 0;
var newDeck = [];
var shuffledDeck = [];

var main = function (input) {
  //Start the game
  if (input == "start") {
    newDeck = makeDeck();
    console.log(newDeck);

    shuffledDeck = shuffleCards(newDeck);
    console.log(shuffledDeck);

    //Deal 2 cards each to player and dealer
    var playerCard1 = shuffledDeck.pop();
    playerHand.push(playerCard1);
    console.log("Player Card 1: " + playerCard1);
    console.log("Player Hand: " + playerHand);
    var dealerCard1 = shuffledDeck.pop();
    dealerHand.push(dealerCard1);
    console.log("Dealer Card 1: " + dealerCard1);
    console.log("Dealer hand: " + dealerHand);

    var playerCard2 = shuffledDeck.pop();
    playerHand.push(playerCard2);
    console.log(playerCard2);
    var dealerCard2 = shuffledDeck.pop();
    dealerHand.push(dealerCard2);
    console.log(dealerCard2);

    myOutputValue = `Player Card 1 is ${playerCard1.name} of ${playerCard1.suit} <br>
  Dealer Card 1 is ${dealerCard1.name} of ${dealerCard1.suit} <br>
  Player Card 2 is ${playerCard2.name} of ${playerCard2.suit} <br>
  Dealer Card 2 is ${dealerCard2.name} of ${dealerCard2.suit}`;
  } else if (input == "hit") {
    var newCard = shuffledDeck.pop();
    playerHand.push(newCard);

    myOutputValue = "The Hit Button has been clicked.";
  } else if (input == "stand") {
    myOutputValue = "Stand button has been selected";
  } else if (input == "reset") {
    myOutputValue = "Reset The Game";
  }
  return myOutputValue;
};
