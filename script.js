/*
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise.
 * Uncomment each group of functions 1 by 1 (and comment out all others) to
 * execute the code for the relevant exercise.
 */

/**
 * 4D
 */
var generateRandom4dNumber = function () {
  var randomDecimal = Math.random() * 10000;
  var random4dNumber = Math.floor(randomDecimal);
  return random4dNumber;
};

var main = function (fourDGuess) {
  var fourDWinningNumber = generateRandom4dNumber();
  var genericOutput = `Your guess: ${fourDGuess}. Winning number: ${fourDWinningNumber}.`;
  if (fourDGuess == fourDWinningNumber) {
    return `${genericOutput} You win!`;
  }
  // The else statement is implicit because we always return in the
  // above if statement.
  return `${genericOutput} You lose.`;
};

/**
 * Hawker Food Categorisation
 */
// var main = function (hawkerDishName) {
//   if (hawkerDishName == 'chicken rice' || hawkerDishName == 'nasi lemak') {
//     return `${hawkerDishName} has a rice base.`;
//   }
//   // The "else if" is implied because we always return in the previous if statement.
//   if (hawkerDishName == 'hokkien mee' || hawkerDishName == 'laksa') {
//     return `${hawkerDishName} has a noodle base.`;
//   }
//   // The "else" is implied because we always return from the above if statements.
//   return `${hawkerDishName} does not have a rice or noodle base.`;
// };

/**
 * 4D with Single-Digit Comparison
 */
// var generateRandomDigit = function () {
//   var randomDecimal = Math.random() * 10;
//   var randomDigit = Math.floor(randomDecimal);
//   return randomDigit;
// };

// var main = function (fourDGuess) {
//   var randomDigit1 = generateRandomDigit();
//   var randomDigit2 = generateRandomDigit();
//   var randomDigit3 = generateRandomDigit();
//   var randomDigit4 = generateRandomDigit();
//   var genericOutput = `Your guess: ${fourDGuess}. 4D digits: ${randomDigit1}, ${randomDigit2}, ${randomDigit3}, ${randomDigit4}.`;
//   if (fourDGuess == randomDigit1
//     || fourDGuess == randomDigit2
//     || fourDGuess == randomDigit3
//     || fourDGuess == randomDigit4) {
//     return `${genericOutput} You win!`;
//   }
//   return `${genericOutput} You lose.`;
// };

/**
 * Hawker Food Randomness
 */
// // Generate a random integer from 1 to max inclusive
// var generateRandomInteger = function (max) {
//   var randomDecimal = Math.random() * max;
//   var randomInteger = Math.floor(randomDecimal) + 1;
//   return randomInteger;
// };

// var generateRandomHawkerDish = function () {
//   var numDishesInRepertoire = 6;
//   var randomDishNum = generateRandomInteger(numDishesInRepertoire);
//   if (randomDishNum == 1) {
//     return 'chicken rice';
//   }
//   // "else if" is implied in the following if statements because we return in each if statement.
//   if (randomDishNum == 2) {
//     return 'roti prata';
//   }
//   if (randomDishNum == 3) {
//     return 'nasi lemak';
//   }
//   if (randomDishNum == 4) {
//     return 'hokkien mee';
//   }
//   if (randomDishNum == 5) {
//     return 'bak kut teh';
//   }
//   if (randomDishNum == 6) {
//     return 'laksa';
//   }
//   // If we reach this line, randomDishNum was invalid.
//   return 'Oops! There was a bug!';
// };

// var main = function (hawkerDishGuess) {
//   var randomHawkerDish = generateRandomHawkerDish();
//   var genericOutput = `Your guess: ${hawkerDishGuess}. Uncle's dish: ${randomHawkerDish}.`;
//   if (hawkerDishGuess == randomHawkerDish) {
//     return `${genericOutput} You get a free meal!`;
//   }
//   return `${genericOutput} There is no free lunch!`;
// };

/**
 * 4D with Winning Range
 */
// var generateRandom4dNumber = function () {
//   var randomDecimal = Math.random() * 10000;
//   var random4dNumber = Math.floor(randomDecimal);
//   return random4dNumber;
// };

// var calcIfGuessInWinningRange = function (guess, winningNum, range) {
//   if (guess < winningNum - range || guess > winningNum + range) {
//     return false;
//   }
//   return true;
// };

// var main = function (fourDGuess) {
//   var winningNum = generateRandom4dNumber();
//   var winningRange = 1000;
//   var isGuessInWinningRange = calcIfGuessInWinningRange(fourDGuess, winningNum, winningRange);
//   var genericOutput = `Your guess: ${fourDGuess}. Winning range: ${winningNum - winningRange} to ${winningNum + winningRange}.`;
//   if (isGuessInWinningRange) {
//     return `${genericOutput} You win!`;
//   }
//   return `${genericOutput} You lose.`;
// };

/**
 * Hawker Food Omakase
 */
// // Define constants to use in multiple functions to avoid bugs due to typos.
// // Use SCREAM_CASE for constants to differentiate them from local mutable variables.
// var DISH_NAME_CHICKEN_RICE = 'chicken rice';
// var DISH_NAME_NASI_LEMAK = 'nasi lemak';
// var DISH_NAME_BAK_KUT_TEH = 'bak kut teh';
// var DISH_NAME_HOKKIEN_MEE = 'hokkien mee';
// var DISH_NAME_LAKSA = 'laksa';
// var DISH_NAME_BEEF_HOR_FUN = 'beef hor fun';
// var DISH_NAME_ROTI_PRATA = 'roti prata';

// // Generate a random integer from 1 to max inclusive
// var generateRandomInteger = function (max) {
//   var randomDecimal = Math.random() * max;
//   var randomInteger = Math.floor(randomDecimal) + 1;
//   return randomInteger;
// };

// var generateRandomRiceDish = function () {
//   var totalNumRiceDishes = 4;
//   var randomDishNum = generateRandomInteger(totalNumRiceDishes);
//   if (randomDishNum == 1) {
//     return DISH_NAME_CHICKEN_RICE;
//   }
//   if (randomDishNum == 2) {
//     return DISH_NAME_NASI_LEMAK;
//   }
//   if (randomDishNum == 3) {
//     return DISH_NAME_BAK_KUT_TEH;
//   }
//   // Roti prata can be included in either rice or noodle combos
//   return DISH_NAME_ROTI_PRATA;
// };

// var generateRandomNoodleDish = function () {
//   var totalNumNoodleDishes = 4;
//   var randomDishNum = generateRandomInteger(totalNumNoodleDishes);
//   if (randomDishNum == 1) {
//     return DISH_NAME_HOKKIEN_MEE;
//   }
//   if (randomDishNum == 2) {
//     return DISH_NAME_LAKSA;
//   }
//   if (randomDishNum == 3) {
//     return DISH_NAME_BEEF_HOR_FUN;
//   }
//   // Roti prata can be included in either rice or noodle combos
//   return DISH_NAME_ROTI_PRATA;
// };

// var generateDishDescription = function (dishName) {
//   if (dishName == DISH_NAME_CHICKEN_RICE) {
//     return 'Chicken Rice, fatty chicken with oily rice.';
//   }
//   if (dishName == DISH_NAME_NASI_LEMAK) {
//     return 'Nasi Lemak, fried chicken with coconut rice.';
//   }
//   if (dishName == DISH_NAME_BAK_KUT_TEH) {
//     return 'Bak Kut Teh, tender pork rib with simmering broth.';
//   }
//   if (dishName == DISH_NAME_HOKKIEN_MEE) {
//     return 'Hokkien Mee, wok-fried tender prawn noodles.';
//   }
//   if (dishName == DISH_NAME_LAKSA) {
//     return 'Laksa, tender prawn noodles with coconut curry soup.';
//   }
//   if (dishName == DISH_NAME_BEEF_HOR_FUN) {
//     return 'Beef Hor Fun, wok-friend hor fun noodles with juice beef slices';
//   }
//   return 'Roti Prata, a beloved bread.';
// };

// var createMenuFromDishNames = function (dish1, dish2) {
//   var dish1Description = generateDishDescription(dish1);
//   var dish2Description = generateDishDescription(dish2);
//   var menu = `To begin, ${dish1Description} \n\n`;
//   menu += `This will be followed by ${dish2Description}`;
//   if (dish1 == DISH_NAME_NASI_LEMAK
//   || dish2 == DISH_NAME_NASI_LEMAK
//   || dish1 == DISH_NAME_HOKKIEN_MEE
//   || dish2 == DISH_NAME_HOKKIEN_MEE) {
//     menu += '\n\n Chilli sambal will be included.';
//   }
//   return menu;
// };

// var generateRiceDishesOutput = function () {
//   var riceDish1 = generateRandomRiceDish();
//   var riceDish2 = generateRandomRiceDish();
//   return createMenuFromDishNames(riceDish1, riceDish2);
// };

// var generateNoodleDishesOutput = function () {
//   var noodleDish1 = generateRandomNoodleDish();
//   var noodleDish2 = generateRandomNoodleDish();
//   return createMenuFromDishNames(noodleDish1, noodleDish2);
// };

// var main = function (chosenBase) {
//   var menu = 'Uncle has prepared a selection of dishes for you! \n\n';
//   if (chosenBase == 'rice') {
//     return menu + generateRiceDishesOutput();
//   }
//   // If chosen base is not rice, assume noodle
//   return menu + generateNoodleDishesOutput();
// };
