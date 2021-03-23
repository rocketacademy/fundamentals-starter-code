/**
 * Card Generation and Shuffling helper functions from Basics Course Website
 */
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
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

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
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

/**
 * Display Single Card
 */
var displaySingleCard = function () {
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var drawnCard = shuffledDeck.pop();
  return `You have drawn ${drawnCard.name} of ${drawnCard.suit}.`;
};

/**
 * Low Card
 */
// Generate a shuffled card deck when the page loads
var shuffledCardDeck = shuffleCards(makeDeck());

var lowCard = function () {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledCardDeck.pop();
  var playerCard = shuffledCardDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var genericOutput = `Computer had ${computerCard.name} of ${computerCard.suit}. Player had ${playerCard.name} of ${playerCard.suit}.`;

  // Compare computer and player cards by rank attribute
  // If computer card rank is LESS than player card rank, computer wins
  if (computerCard.rank < playerCard.rank) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank, player wins
  if (computerCard.rank > playerCard.rank) {
    return `${genericOutput} Player wins!`;
  }
  // Otherwise (i.e. ranks are equal), it's a tie
  return `${genericOutput} It's a tie.`;
};

/**
 * Low Card with Queen Winner
 */
var isCardQueen = function (card) {
  return card.rank == 12;
};

var lowCardWithQueenWinner = function () {
  // Draw 2 cards from the top of the deck
  var computerCard = shuffledCardDeck.pop();
  var playerCard = shuffledCardDeck.pop();

  // Construct an output string to communicate which cards were drawn
  var genericOutput = `Computer had ${computerCard.name} of ${computerCard.suit}. Player had ${playerCard.name} of ${playerCard.suit}.`;

  // Compare computer and player cards by rank attribute
  // If computer card rank is LESS than player card rank and player card is not queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < playerCard.rank && !isCardQueen(playerCard))
    || isCardQueen(computerCard)) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player card is queen, player wins
  if (computerCard.rank > playerCard.rank
    || isCardQueen(playerCard)) {
    return `${genericOutput} Player wins!`;
  }
  // Otherwise (i.e. ranks are equal), it's a tie
  return `${genericOutput} It's a tie.`;
};

/**
 * Low Card Hands
 */
// Return a string of ranks and suits of cards in the input cards array
var printCards = function (cards) {
  var returnString = '';
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${currCard.name} of ${currCard.suit}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += `${lastCard.name} of ${lastCard.suit}`;
  return returnString;
};

var getIsCardQueen = function (card) {
  return card.rank == 12;
};

var getIsQueenInHand = function (hand) {
  for (var i = 0; i < hand.length; i += 1) {
    var currCard = hand[i];
    if (currCard.rank == 12) {
      return true;
    }
  }
  return false;
};

var lowCardHands = function (input) {
  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${computerCard.name} of ${computerCard.suit}. <br/><br/>
    Player drew ${printCards(playerCards)}. <br/><br/>
    Player's lowest card was ${lowestPlayerCard.name} of ${lowestPlayerCard.suit}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * Low Card Output
 */
// Convert the word representation of a suit into the suit's emoji
var convertSuitWordToEmoji = function (suitWord) {
  if (suitWord == 'spades') {
    return '♠️';
  }
  if (suitWord == 'hearts') {
    return '♥️';
  }
  if (suitWord == 'clubs') {
    return '♣️';
  }
  if (suitWord == 'diamonds') {
    return '♦️';
  }
  // If we reach here, we entered an invalid suit
  return 'Invalid Suit!';
};

var getCardStringRepresentation = function (card) {
  return `${card.name} of ${convertSuitWordToEmoji(card.suit)}`;
};

var printCardswithEmojiSuits = function (cards) {
  var returnString = '';
  // Iterate until cards.length - 1 so we can avoid the extra comma at the end of return string
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currCard = cards[i];
    returnString += `${getCardStringRepresentation(currCard)}, `;
  }
  var lastCard = cards[cards.length - 1];
  returnString += getCardStringRepresentation(lastCard);
  return returnString;
};

var lowCardSuitOutput = function (input) {
  // If input is empty, prompt user to enter a number of cards to draw
  if (input == '') {
    return 'Please enter a number of cards to draw.';
  }

  // Draw 1 card for the computer
  var computerCard = shuffledCardDeck.pop();

  // Draw numCardToDraw cards for the player, but only store the card with lowest rank.
  var numCardsToDraw = Number(input);
  // Initialise lowest player card rank to 1 above highest possible rank, so that
  // the first card the player draws will replace this lowest rank.
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numCardsToDraw; i += 1) {
    var currPlayerCard = shuffledCardDeck.pop();
    // Add the current card to the player's hand to display later
    playerCards.push(currPlayerCard);
    // If the current card is the lowest of the player's cards so far, mark it as the lowest card.
    if (currPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currPlayerCard.rank;
      var lowestPlayerCard = currPlayerCard;
    }
  }

  // Construct an output string to communicate which cards were drawn
  // Print all the cards the player drew, not just the lowest one.
  var genericOutput = `
    Computer had ${getCardStringRepresentation(computerCard)}. <br/><br/>
    Player drew ${printCardswithEmojiSuits(playerCards)}. <br/><br/>
    Player's lowest card was ${getCardStringRepresentation(lowestPlayerCard)}.
  `;

  // Determine if 1 player has queen and the other doesn't
  var computerHasQueen = getIsCardQueen(computerCard);
  var playerHasQueen = getIsQueenInHand(playerCards);

  // Add to output if 1 player has queen and the other doesn't
  if (computerHasQueen && !playerHasQueen) {
    genericOutput += '<br/><br/> Computer has queen and Player does not.';
  } else if (playerHasQueen && !computerHasQueen) {
    genericOutput += '<br/><br/> Player has queen and Computer does not.';
  } else if (playerHasQueen && computerHasQueen) {
    genericOutput += '<br/><br/> Both Player and Computer have queen.';
  }

  // Compare computer and player cards by rank attribute
  // If computer card rank is EQUAL to lowest player card rank,
  // OR both computer and player have queen, it's a tie
  if (computerCard.rank == lowestPlayerCard.rank || (computerHasQueen && playerHasQueen)) {
    return `${genericOutput} <br/><br/> It's a tie.`;
  }
  // If computer card rank is LESS than player card rank and player's hand does not have queen,
  // OR computer card is queen, computer wins
  if ((computerCard.rank < lowestPlayerCard.rank && !playerHasQueen) || computerHasQueen) {
    // Add conditional-dependent text to the output string
    return `${genericOutput} <br/><br/> Computer wins.`;
  }
  // Else if computer card rank is GREATER than player card rank,
  // OR player's hand has queen, player wins
  if (computerCard.rank > lowestPlayerCard.rank || playerHasQueen) {
    return `${genericOutput} <br/><br/> Player wins!`;
  }
  // If none of the above cases are true, we've reached an unexpected outcome
  return `${genericOutput} <br/><br/> Unexpected outcome.`;
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  return displaySingleCard();
  // return lowCard();
  // return lowCardWithQueenWinner();
  // return lowCardHands(input);
  // return lowCardSuitOutput(input);
};
