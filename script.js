// See comment above main function for instructions on how to use this file

/**
 * Mad Libs Adjectives
 */
// Default to input mode
var mode = 'input';

// Store a global array of adjectives we can use to complete our Mad Lib
var adjs = [];

// Convert user input into an array of adjectives
var parseInputAdjs = function (inputString) {
  // Assume inputString is a string of adjectives separated by comma
  // return value is an array of each substring separated by a comma in inputString
  return inputString.split(',');
};

// Store the user-inputted adjectives in the global adjs array
var storeInputAdjs = function (inputAdjs) {
  var counter = 0;
  while (counter < inputAdjs.length) {
    adjs.push(inputAdjs[counter]);
    counter = counter + 1;
  }
};

// Generate and return a completed Mad Lib
var completeMadLib = function () {
  // Get a random index in the adjs array by getting a random number between 0 and adjs.length - 1
  var randomAdjIndex = Math.floor(Math.random() * adjs.length);
  // Obtain the random adjective from the array
  var randomAdj = adjs[randomAdjIndex];
  // Return the completed Mad Lib
  return `"Yabadabadoo!" he said joyfully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`;
};

var madLibsAdjectives = function (input) {
  if (input == 'input') {
    mode = 'input';
    // Show user list of adjectives when switching back to input mode
    return `You have switched to input mode. Our list of adjectives is now ${adjs}`;
  }

  if (input == 'create') {
    mode = 'create';
    return 'You have switched to create mode.';
  }

  if (mode == 'input') {
    // If input is empty, prompt user to input adjectives
    if (input == '') {
      return 'Please input adjectives separated by commas to fill in our Mad Lib.';
    }

    // Otherwise, save the user-inputted adjectives for later
    var inputAdjs = parseInputAdjs(input);
    storeInputAdjs(inputAdjs);
    return `You have added ${inputAdjs} to our list of adjectives. Our list of adjectives is now ${adjs}`;
  }

  if (mode == 'create') {
    // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
    return completeMadLib();
  }

  // If we reach this part of control flow, something went wrong
  return 'Oops, something went wrong!';
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  return madLibsAdjectives(input);
};
