//Blackjack game

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

//Global variables
// Store player's hand and dealer's hand in a separate array
var playerHand = [];
var dealerHand = [];
var playerScore = 0;
var dealerScore = 0;
var newDeck = [];
var shuffledDeck = [];

//Helper function to show player's hand and dealer's hand
var showHands = function () {
  var index = 0;
  var showPlayerHand = "Player's Hand: <br>";
  var showDealerHand = "Dealer's Hand: <br>";

  //Loop through playerHand and show each card
  while (index < playerHand.length) {
    showPlayerHand =
      showPlayerHand +
      playerHand[index].name +
      " of " +
      playerHand[index].suit +
      "<br>";
    index += 1;
  }

  //re-initialize index
  index = 0;
  //Loop through dealerHand and show each card
  while (index < dealerHand.length) {
    showDealerHand =
      showDealerHand +
      dealerHand[index].name +
      " of " +
      dealerHand[index].suit +
      "<br>";
    index += 1;
  }
  //re-set index back to 0
  index = 0;
  return showPlayerHand + "<br>" + showDealerHand;
};

//Helper function to show player's score and dealer's score
var showScores = function () {
  var index = 0;
  var showPlayerScore = 0;
  var showDealerScore = 0;

  while (index < playerHand.length) {
    showPlayerScore = showPlayerScore + playerHand[index].value;
    index += 1;
  }
  index = 0;

  while (index < dealerHand.length) {
    showDealerScore = showDealerScore + dealerHand[index].value;
    index += 1;
  }
  index = 0;

  var showScoreMsg =
    "Player score is " +
    showPlayerScore +
    "<br>" +
    "Dealer score is " +
    showDealerScore;
  return showScoreMsg;
};

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

    playerScore = playerCard1.value + playerCard2.value;
    dealerScore = dealerCard1.value + dealerCard2.value;

    var outputMsg = showHands() + "<br>" + showScores();
    return outputMsg;
  } else if (input == "hit") {
    var newCard = shuffledDeck.pop();
    playerHand.push(newCard);
    playerScore = playerScore + newCard.value;

    //Check if player went over 21
    if (playerScore > 21) {
      return `You went bust! sorry, you lost! <br> <br>
      Player's Hand: <br>
      ${playerHand[0].name} of ${playerHand[0].suit} <br>
      ${playerHand[1].name} of ${playerHand[1].suit} <br>
      ${playerHand[2].name} of ${playerHand[2].suit} <br><br>
      Player score is ${playerScore}`;
    }

    myOutputValue = `Player additional card is ${newCard.name} of ${newCard.suit} <br>
                    Click Hit again or Stand`;
  } else if (input == "stand") {
    //Dealer need to hit if dealer hand is below 17
    while (dealerScore < 17) {
      var newCard = shuffledDeck.pop();
      dealerHand.push(newCard);
      dealerScore = dealerScore + newCard.value;
    }

    if (dealerScore > 21) {
      return "Dealer went bust! YOU WIN!";
    }

    if (playerScore == dealerScore) {
      return "It's a draw!";
    } else if (playerScore < dealerScore) {
      return `Player score is ${playerScore} <br>
      Dealer score is ${dealerScore} <br>
      <br>
      Player lost`;
    } else if (playerScore > dealerScore) {
      return `Player score is ${playerScore} <br>
      Dealer score is ${dealerScore} <br>
      <br>
      Player WINS! CONGRATULATIONS!`;
    }

    //myOutputValue = `Player Score: ${playerTotal} <br>
    //Dealer Score: ${dealerTotal}`;
  } else if (input == "reset") {
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    newDeck = [];
    shuffledDeck = [];
    myOutputValue = "Game has been reset. <br> Please click Start";
  }
};
