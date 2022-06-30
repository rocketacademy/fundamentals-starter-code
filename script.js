var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts ❤️", "diamonds ♦️", "clubs ♣️", "spades ♠️"];

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
        cardName = "Ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
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

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(makeDeck());

var dealerTotal = 0;
var playerTotal = 0;
var dealerOutput = "Dealer Hand: <br>";
var playerOutput = "Player Hand: <br>";
var dealerHands = [];
var playerHands = [];
var dealerAceCount = 0;
var playerAceCount = 0;
var myImage = "";

var main = function () {
  // Both dealer and palyer draw 2 cards from the top of the deck

  for (var i = 0; i < 2; i++) {
    //  dealer draw card and put it into "dealerHands"
    var dealerCard = shuffledDeck.pop();
    if (dealerCard.rank == 1) {
      dealerAceCount++;
    }
    var dealerPicked = {
      name: dealerCard.name,
      suit: dealerCard.suit,
      rank: dealerCard.rank,
    };

    dealerHands.push(dealerPicked);

    // record the name and suit of the draw into dealerOutput
    dealerOutput =
      dealerOutput + `${dealerCard.name} of ${dealerCard.suit} <br>`;

    // This is to determine whether the dealer has a BlackJack; if not, then calculate the sum of ranks
    if (
      (dealerCard.rank == 1 && dealerTotal == 10) ||
      (dealerCard.rank >= 10 && dealerTotal == 1)
    ) {
      dealerTotal = "blackJack";
      dealerOutput = dealerOutput + `Dealer had a Black Jack!! 🎉🎉 <br>`;
    } else if (dealerCard.rank < 10) {
      dealerTotal = dealerTotal + dealerCard.rank;
    } else {
      dealerTotal = dealerTotal + 10;
    }
    // (From here, the codes below was repeated as above for playerHands)
    //  player draw card and put it into "playerHands"
    var playerCard = shuffledDeck.pop();
    if (playerCard.rank == 1) {
      playerAceCount++;
    }
    var playerPicked = {
      name: playerCard.name,
      suit: playerCard.suit,
      rank: playerCard.rank,
    };

    playerHands.push(playerPicked);

    // record the name and suit of the draw into playerOutput
    playerOutput =
      playerOutput + `${playerCard.name} of ${playerCard.suit} <br>`;

    // This is to determine whether the player has a BlackJack; if not, then calculate the sum of ranks
    if (
      (playerCard.rank == 1 && playerTotal == 10) ||
      (playerCard.rank >= 10 && playerTotal == 1)
    ) {
      playerTotal = "blackJack";
      playerOutput = playerOutput + `Player had a Black Jack!! 🎉🎉<br>`;
    } else if (playerCard.rank < 10) {
      playerTotal = playerTotal + playerCard.rank;
    } else {
      playerTotal = playerTotal + 10;
    }
  }

  // If there is an Ace in dealer's or player's hand, the Ace will be counted as 11

  if (playerAceCount > 0 || dealerAceCount > 0) {
    if (playerAceCount > 0 && playerTotal != "blackJack") {
      playerTotal = playerTotal + 10;
    } else if (dealerAceCount > 0 && dealerTotal != "blackJack") {
      dealerTotal = dealerTotal + 10;
    }
  }

  // to ensure dealer and player hands total are greater than 15, otherwise draw a card
  if (dealerTotal <= 16 || playerTotal <= 16) {
    for (var a = 0; dealerTotal <= 16; a++) {
      dealerCard = shuffledDeck.pop();
      if (dealerCard.rank == 1) {
        dealerAceCount++;
      }
      var dealerPicked = {
        name: dealerCard.name,
        suit: dealerCard.suit,
        rank: dealerCard.rank,
      };

      dealerHands.push(dealerPicked);

      console.log("dealerCard");
      console.log(dealerCard);

      dealerOutput =
        dealerOutput + `${dealerCard.name} of ${dealerCard.suit} <br>`;
      if (dealerCard.rank == 1) {
        dealerTotal = dealerTotal + 11;
      } else if (dealerCard.rank < 10) {
        dealerTotal = dealerTotal + dealerCard.rank;
      } else {
        dealerTotal = dealerTotal + 10;
      }
    }
    for (var b = 0; playerTotal <= 16; b++) {
      playerCard = shuffledDeck.pop();
      if (playerCard.rank == 1) {
        playerAceCount++;
      }
      var playerPicked = {
        name: playerCard.name,
        suit: playerCard.suit,
        rank: playerCard.rank,
      };

      playerHands.push(playerPicked);

      console.log("playerCard");
      console.log(playerCard);

      playerOutput =
        playerOutput + `${playerCard.name} of ${playerCard.suit} <br>`;
      if (playerCard.rank == 1) {
        playerTotal = playerTotal + 11;
      } else if (playerCard.rank < 10) {
        playerTotal = playerTotal + playerCard.rank;
      } else {
        playerTotal = playerTotal + 10;
      }
    }
  }

  // to mark the bust BUT FOR THOSE WHO HAS ACE IN HAND, -10 points
  if (dealerTotal > 21 || playerTotal > 21) {
    if (
      dealerTotal > 21 &&
      dealerAceCount > 0 &&
      playerTotal > 21 &&
      playerAceCount > 0
    ) {
      dealerTotal = dealerTotal - 10;
      playerTotal = playerTotal - 10;
    } else if (dealerTotal > 21 && dealerAceCount > 0) {
      dealerTotal = dealerTotal - 10;
    } else if (playerTotal > 21 && playerAceCount > 0) {
      playerTotal = playerTotal - 10;
    }
  }

  // to ensure dealer and player hands total are greater than 15 AFTER ALL ACE WAS COUNTED AS 1
  if (dealerTotal <= 16 || playerTotal <= 16) {
    for (var a = 0; dealerTotal <= 16; a++) {
      dealerCard = shuffledDeck.pop();

      var dealerPicked = {
        name: dealerCard.name,
        suit: dealerCard.suit,
        rank: dealerCard.rank,
      };

      dealerHands.push(dealerPicked);

      console.log("dealerCard");
      console.log(dealerCard);

      dealerOutput =
        dealerOutput + `${dealerCard.name} of ${dealerCard.suit} <br>`;
      if (dealerCard.rank < 10) {
        dealerTotal = dealerTotal + dealerCard.rank;
      } else {
        dealerTotal = dealerTotal + 10;
      }
    }
    for (var b = 0; playerTotal <= 16; b++) {
      playerCard = shuffledDeck.pop();

      var playerPicked = {
        name: playerCard.name,
        suit: playerCard.suit,
        rank: playerCard.rank,
      };

      playerHands.push(playerPicked);

      console.log("playerCard");
      console.log(playerCard);

      playerOutput =
        playerOutput + `${playerCard.name} of ${playerCard.suit} <br>`;
      if (playerCard.rank < 10) {
        playerTotal = playerTotal + playerCard.rank;
      } else {
        playerTotal = playerTotal + 10;
      }
    }
  }

  // to mark the bust AFTER ALL ACE WAS COUNTED AS 1
  if (dealerTotal > 21 || playerTotal > 21) {
    if (dealerTotal > 21 && playerTotal <= 21) {
      dealerOutput = dealerOutput + `Dealer busted. 😢 <br>`;
    } else if (playerTotal > 21 && dealerTotal <= 21) {
      playerOutput = playerOutput + `Player busted. 😢 <br> `;
    } else if (dealerTotal > 21 && playerTotal > 21) {
      dealerOutput = dealerOutput + `Dealer busted. 😢 <br>`;
      playerOutput = playerOutput + `Player busted. 😢 <br> `;
    }
  }

  // Construct an output string to communicate which cards were drawn

  myOutputValue = dealerOutput + "<br>" + playerOutput;

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins

  // determine whether the game is over due to black jack or busted.
  if (playerTotal == "blackJack") {
    myOutputValue = myOutputValue + `<br>Player wins by Black Jack.`;
    document.getElementById("submit-button").className = "hidden";
    document.getElementById("refresh-button").className = "show";
    myImage =
      '<img src="https://c.tenor.com/-migHeL9VVcAAAAC/ace-casino.gif"/>';
  } else if (dealerTotal == "blackJack") {
    myOutputValue = myOutputValue + `<br> Dealer wins by Black Jack.`;
    document.getElementById("submit-button").className = "hidden";
    document.getElementById("refresh-button").className = "show";
    myImage =
      '<img src="https://c.tenor.com/IHsmIuB1ntgAAAAd/batman-joker.gif"/>';
  } else if (dealerTotal > 21 && playerTotal > 21) {
    myOutputValue = myOutputValue + "<br>Both dealer and player busted. 😢 😢 ";
    document.getElementById("submit-button").className = "hidden";
    document.getElementById("refresh-button").className = "show";
    myImage =
      '<img src="https://c.tenor.com/CZtF6nyM4uMAAAAM/rounders-teddykgb.gif"/>';
  } else if (dealerTotal > 21 && playerTotal <= 21) {
    myOutputValue = myOutputValue + "<br>Player wins!";
    document.getElementById("submit-button").className = "hidden";
    document.getElementById("refresh-button").className = "show";
    myImage =
      '<img src="https://c.tenor.com/LwLpngEMlAsAAAAM/rounders-teddykgb.gif"/>';
  } else if (playerTotal > 21 && dealerTotal <= 21) {
    myOutputValue = myOutputValue + "<br>Dealer wins!";
    document.getElementById("submit-button").className = "hidden";
    document.getElementById("refresh-button").className = "show";
    myImage =
      '<img src="https://c.tenor.com/I-e5ph9nsdgAAAAM/rounders-win-fantasy-football.gif"/>';
  } else {
    //if the game is not over due to black jack or bust, ask player does he want to hit or stand?
    // Also, reveal one of the dealer's hand to the player
    var revealDealerCard = dealerHands.pop();
    myOutputValue =
      playerOutput +
      `<br>Now your hand totals is ${playerTotal}. <br>Would you like to draw another card? <br>For your information, one of the dealer's card is ${revealDealerCard.name} of ${revealDealerCard.suit}<br>Please click the "Hit" button for another card or click the "Stand" button for the results.`;
    dealerHands.push(revealDealerCard);

    document.getElementById("hit-button").className = "show";
    document.getElementById("stand-button").className = "show";
    document.getElementById("submit-button").className = "hidden";

    myImage =
      '<img src="https://c.tenor.com/RFRPkimHjfcAAAAC/zach-galifianakis-very-bad-trip-meme.gif"/>';
  }
  console.log("dealerHands");
  console.log(dealerHands);
  console.log("playerHands");
  console.log(playerHands);
  console.log("dealerTotal");
  console.log(dealerTotal);
  console.log("playerTotal");
  console.log(playerTotal);
  console.log("playerAceCount");
  console.log(playerAceCount);
  console.log("dealerAceCount");
  console.log(dealerAceCount);
  // Return the fully-constructed output string

  return myOutputValue + "<br>" + myImage;
};

var playerDraw = function () {
  var dealerIndex = 0;
  var playerIndex = 0;
  var dealerOutput = "Dealer Hand: <br>";
  var playerOutput = "Player Hand: <br>";

  // calculate the total of dealerHands and record the name and suit
  while (dealerIndex < dealerHands.length) {
    var dealerCurrent = dealerHands[dealerIndex];
    dealerOutput =
      dealerOutput + `${dealerCurrent.name} of ${dealerCurrent.suit} <br>`;
    if (dealerCurrent.rank < 10) {
      dealerTotal = dealerTotal + dealerCurrent.rank;
    } else {
      dealerTotal = dealerTotal + 10;
    }
    dealerIndex++;
  }

  // calculate the total of playerHands and record the name and suit
  while (playerIndex < playerHands.length) {
    var playerCurrent = playerHands[playerIndex];
    playerOutput =
      playerOutput + `${playerCurrent.name} of ${playerCurrent.suit} <br>`;
    if (playerCurrent.rank < 10) {
      playerTotal = playerTotal + playerCurrent.rank;
    } else {
      playerTotal = playerTotal + 10;
    }
    playerIndex++;
  }

  //Draw an extra card for playerHands as the player's request
  var playerCard = shuffledDeck.pop();

  var playerPicked = {
    name: playerCard.name,
    suit: playerCard.suit,
    rank: playerCard.rank,
  };

  playerHands.push(playerPicked);

  if (playerCard.rank < 10) {
    playerTotal = playerTotal + playerCard.rank;
  } else {
    playerTotal = playerTotal + 10;
  }

  playerOutput =
    playerOutput + `${playerCurrent.name} of ${playerCurrent.suit} <br>`;
  if (playerCurrent.rank < 10) {
    playerTotal = playerTotal + playerCurrent.rank;
  } else {
    playerTotal = playerTotal + 10;
  }

  var myOutputValue = dealerOutput + "<br>" + playerOutput;

  // to determine whether player busted due to the extra card, otherwise compare the dealerTotal and playerTotal
  if (playerTotal > 21) {
    myOutputValue = myOutputValue + "Player busted. 😢 <br><br>Dealer wins.";
    myImage =
      '<img src="https://c.tenor.com/I-e5ph9nsdgAAAAM/rounders-win-fantasy-football.gif"/>';
  } else if (dealerTotal > playerTotal) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "<br>Dealer wins.";
    myImage =
      '<img src="https://c.tenor.com/I-e5ph9nsdgAAAAM/rounders-win-fantasy-football.gif"/>';
    // Else if computer card rank is less than player card rank, player wins
  } else if (dealerTotal < playerTotal) {
    myOutputValue = myOutputValue + "<br>Player wins!";
    myImage =
      '<img src="https://c.tenor.com/LwLpngEMlAsAAAAM/rounders-teddykgb.gif"/>';
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "<br>It's a tie.";
    myImage =
      '<img src="https://c.tenor.com/Eaof1ng90CAAAAAd/poker-partypoker.gif"/>';
  }

  document.getElementById("refresh-button").className = "show";
  document.getElementById("hit-button").className = "hidden";
  document.getElementById("stand-button").className = "hidden";
  // Return the fully-constructed output string

  return myOutputValue + "<br>" + myImage;
};

var showResults = function () {
  var dealerIndex = 0;
  var playerIndex = 0;
  var dealerOutput = "Dealer Hand: <br>";
  var playerOutput = "Player Hand: <br>";

  // calculate the total of dealerHands and record the name and suit
  while (dealerIndex < dealerHands.length) {
    var dealerCurrent = dealerHands[dealerIndex];
    dealerOutput =
      dealerOutput + `${dealerCurrent.name} of ${dealerCurrent.suit} <br>`;
    if (dealerCurrent.rank < 10) {
      dealerTotal = dealerTotal + dealerCurrent.rank;
    } else {
      dealerTotal = dealerTotal + 10;
    }
    dealerIndex++;
  }

  // calculate the total of playerHands and record the name and suit
  while (playerIndex < playerHands.length) {
    var playerCurrent = playerHands[playerIndex];
    playerOutput =
      playerOutput + `${playerCurrent.name} of ${playerCurrent.suit} <br>`;
    if (playerCurrent.rank < 10) {
      playerTotal = playerTotal + playerCurrent.rank;
    } else {
      playerTotal = playerTotal + 10;
    }
    playerIndex++;
  }

  var myOutputValue = dealerOutput + "<br>" + playerOutput;

  // to determine whether player busted due to the extra card, otherwise compare the dealerTotal and playerTotal
  if (dealerTotal > playerTotal) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "<br>Dealer wins.";
    myImage =
      '<img src="https://c.tenor.com/I-e5ph9nsdgAAAAM/rounders-win-fantasy-football.gif"/>';
    // Else if computer card rank is less than player card rank, player wins
  } else if (dealerTotal < playerTotal) {
    myOutputValue = myOutputValue + "<br>Player wins!";
    myImage =
      '<img src="https://c.tenor.com/LwLpngEMlAsAAAAM/rounders-teddykgb.gif"/>';
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "<br>It's a tie.";
    myImage =
      '<img src="https://c.tenor.com/Eaof1ng90CAAAAAd/poker-partypoker.gif"/>';
  }

  document.getElementById("refresh-button").className = "show";
  document.getElementById("hit-button").className = "hidden";
  document.getElementById("stand-button").className = "hidden";

  console.log("dealerHands");
  console.log(dealerHands);
  console.log("playerHands");
  console.log(playerHands);
  console.log("playerAceCount");
  console.log(playerAceCount);
  console.log("dealerAceCount");
  console.log(dealerAceCount);

  // Return the fully-constructed output string
  return myOutputValue + "<br>" + myImage;
};

var refreshPage = function () {
  window.location.reload();
  document.getElementById("submit-button").className = "show";
};
