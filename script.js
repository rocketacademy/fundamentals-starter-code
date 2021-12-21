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

// Global variables
// Store player's hand and dealer's hand in a separate array
// Initialize playerScore and dealerScore to 0
var playerHand = [];
var dealerHand = [];
var playerScore = 0;
var dealerScore = 0;
var newDeck = [];
var shuffledDeck = [];
var isThereAce = false;

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
  playerScore = 0;
  dealerScore = 0;

  while (index < playerHand.length) {
    playerScore = playerScore + playerHand[index].value;
    index += 1;
  }
  index = 0;

  while (index < dealerHand.length) {
    dealerScore = dealerScore + dealerHand[index].value;
    index += 1;
  }
  index = 0;

  var showScoreMsg =
    "Player score is " +
    playerScore +
    "<br>" +
    "Dealer score is " +
    dealerScore;
  return showScoreMsg;
};

// Helper function to check if there's an Ace in player's Hand
var checkForAce = function () {
  var index = 0;
  while (index < playerHand.length) {
    if (playerHand[index].name == "ace") {
      isThereAce = true;
    }
    index += 1;
  }
  return isThereAce;
};

// Helper function to count the number of ace in a hand
var countNoAce = function () {
  var index = 0;
  var numOfAce = 0;
  while (index < playerHand.length) {
    if (playerHand[index].name == "ace") {
      numOfAce += 1;
    }
    index += 1;
  }
  return numOfAce;
};

var main = function (input) {
  //Start the game
  if (input == "start") {
    // Create a new deck of cards and shuffle it
    newDeck = makeDeck();
    shuffledDeck = shuffleCards(newDeck);

    //Deal 2 cards each to player and dealer
    var playerCard1 = shuffledDeck.pop();
    playerHand.push(playerCard1);

    var dealerCard1 = shuffledDeck.pop();
    dealerHand.push(dealerCard1);

    var playerCard2 = shuffledDeck.pop();
    playerHand.push(playerCard2);

    var dealerCard2 = shuffledDeck.pop();
    dealerHand.push(dealerCard2);

    var outputMsg = `${showHands()}<br>${showScores()}`;
    return outputMsg;
  }
  // When player hits
  else if (input == "hit") {
    var newCard = shuffledDeck.pop();
    playerHand.push(newCard);
    playerScore = playerScore + newCard.value;

    // Check if player went over 21
    // if player has an Ace and went bust, Ace counts as 1
    var playerHasAce = checkForAce();
    console.log(playerHasAce);
    var numOfAce = countNoAce();
    console.log(numOfAce);

    if (playerScore > 21 && playerHasAce) {
      playerScore = playerScore - 10 * (numOfAce - 1);
      console.log(playerScore);
      //if after changing ace to 1 player is still bust
      if (playerScore > 21) {
        return `Player went bust! Sorry You Lost! <br><br>${showHands()} <br>Player score is ${playerScore}<br>Dealer score is ${dealerScore}`;
      }
      return `${showHands()}<br>Player score is ${playerScore}<br> Dealer score is ${dealerScore}`;
    } else if (playerScore > 21) {
      var bustMsg =
        "You went bust! Sorry You Lost! <br><br>" +
        showHands() +
        "<br>" +
        "Player score is " +
        playerScore +
        "<br>" +
        "Dealer score is " +
        dealerScore;
      return bustMsg;
    }

    var hitMsg = `Player choose to hit <br><br>${showHands()}<br>${showScores()}`;
    return hitMsg;
  } else if (input == "stand") {
    //Dealer need to hit if dealer hand is below 17
    while (dealerScore < 17) {
      var newCard = shuffledDeck.pop();
      dealerHand.push(newCard);
      dealerScore = dealerScore + newCard.value;
    }

    // Check to see if dealer went bust
    if (dealerScore > 21) {
      var bustMsg =
        "Dealer went bust! YOU WIN! <br><br>" +
        showHands() +
        "<br>" +
        "Player score is " +
        playerScore +
        "<br>Dealer score is " +
        dealerScore;
      return bustMsg;
    }

    // Conditions for when it's a draw, lost or win
    if (playerScore == dealerScore) {
      var drawMsg =
        "It's a draw! <br><br>" +
        showHands() +
        "<br>" +
        "Player score is " +
        playerScore +
        "<br>Dealer score is " +
        dealerScore;
      return drawMsg;
    } else if (playerScore < dealerScore) {
      var lostMsg =
        "Player Lost! <br><br>" +
        showHands() +
        "<br>" +
        "Player score is " +
        playerScore +
        "<br>Dealer score is " +
        dealerScore;
      return lostMsg;
    } else if (playerScore > dealerScore) {
      var winMsg =
        "Player WINS! CONGRATULATIONS!<br><br>" +
        showHands() +
        "<br>" +
        "Player score is " +
        playerScore +
        "<br>Dealer score is " +
        dealerScore;
      return winMsg;
    }
  } else if (input == "reset") {
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    newDeck = [];
    shuffledDeck = [];
    var resetMsg = "Game has been reset. <br> Please click Start";
    return resetMsg;
  }
};
