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
  return `"Yabadabadoo!" he said gleefully as he jumped into his convertible Tree Car and drove off with his ${randomAdj} wife.`;
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
 * Mad Libs Multiple Word Types
 */
// Store a global wordType variable to determine what word type gets inputted in input mode
var currWordType = 'exclamations';

// Store different word types in their own global array
var exclamations = [];
var adverbs = [];
var nouns = [];

// Create a feedback message for user input
var generateInputPrompt = function (nextWordType) {
  return `
    Our list of exclamations is ${exclamations} <br/><br/>
    Our list of adverbs is ${adverbs} <br/><br/>
    Our list of nouns is ${nouns} <br/><br/>
    Our list of adjectives is ${adjs} <br/><br/>
    Please input ${nextWordType} separated by commas to fill in our Mad Lib. <br/><br/>
    If you have input words for each word type, type "create" to enter create mode to generate complete Mad Libs.
  `;
};

// Convert user input into an array of words
var parseInputWords = function (inputString) {
  // Assume inputString is a string of words separated by comma
  // return value is an array of each substring separated by a comma in inputString
  return inputString.split(',');
};

// Store the user-inputted words in the relevant global word array
var storeInputWords = function (inputWords) {
  // Initialise empty variable as placeholder for the word array we wish to add to
  var wordArray;
  // Define wordArray to be the relevant array depending on the current input word type
  if (currWordType == 'exclamations') {
    wordArray = exclamations;
  } else if (currWordType == 'adverbs') {
    wordArray = adverbs;
  } else if (currWordType == 'nouns') {
    wordArray = nouns;
  }
  // This assumes anything not any of the word types above is an adjective
  else {
    wordArray = adjs;
  }
  // Add all input words to the relevant word array
  // We could also accomplish this in fewer lines with JS' array concat() method
  // https://www.w3schools.com/jsref/jsref_concat_array.asp
  var counter = 0;
  while (counter < inputWords.length) {
    wordArray.push(inputWords[counter]);
    counter = counter + 1;
  }
};

// Get the next word type that the user should input
// Our hard-coded order is exclamations > adverbs > nouns > adjectives
var getNextWordType = function () {
  if (currWordType == 'exclamations') {
    return 'adverbs';
  }
  if (currWordType == 'adverbs') {
    return 'nouns';
  }
  if (currWordType == 'nouns') {
    return 'adjectives';
  }
  return 'exclamations';
};

// Return a random element in the given array
var getRandomElemInArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var completeMadLibMultipleWords = function () {
  // Get a random word from each word type
  var randomExc = getRandomElemInArray(exclamations);
  var randomAdverb = getRandomElemInArray(adverbs);
  var randomNoun = getRandomElemInArray(nouns);
  var randomAdj = getRandomElemInArray(adjs);
  // Return the completed Mad Lib
  return `
    "${randomExc}!" he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife. <br/><br/>
    Hit Submit to complete the Mad Lib again, or enter "input" to input more words.
  `;
};

var madLibsMultipleWordTypes = function (input) {
  if (input == 'input') {
    mode = 'input';
    // Show user list of adjectives when switching back to input mode
    return `
      You have switched to input mode. <br/><br/>
      ${generateInputPrompt(currWordType)}
    `;
  }

  if (input == 'create') {
    mode = 'create';
    return 'You have switched to create mode. Hit Submit to complete the Mad Lib.';
  }

  if (mode == 'input') {
    // If input is empty, prompt user to input words
    if (input == '') {
      return `Please input ${currWordType} separated by commas to fill in our Mad Lib.`;
    }

    // Otherwise, save the user-inputted words for later
    var inputWords = parseInputWords(input);
    storeInputWords(inputWords);
    // Notice the following logic. We generate the feedback message using currWordType,
    // then set currWordType to nextWordType, then return the feedback message to the user.
    var nextWordType = getNextWordType();
    // Create feedback for the user on input
    var feedbackMessage = `
      You have added ${inputWords} to our list of ${currWordType}.<br/><br/>
      ${generateInputPrompt(nextWordType)}
    `;
    // Cycle to the next word type for the next user input
    currWordType = nextWordType;
    return feedbackMessage;
  }

  if (mode == 'create') {
    // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
    return completeMadLibMultipleWords();
  }

  // If we reach this part of control flow, something went wrong
  return 'Oops, something went wrong!';
};

/**
 * Popular Mad Libs
 */

// Store word frequencies in parallel arrays to word arrays. Our program should keep the lengths
// of corresponding arrays the same, e.g. exclamations has same length as exclamationsFrequencies
var exclamationsFrequencies = [];
var adverbsFrequencies = [];
var nounsFrequencies = [];
var adjectivesFrequencies = [];

var generateInputPromptWithPopular = function (nextWordType) {
  return `
    ${generateInputPrompt(nextWordType)} <br/><br/>
    You can also type "popular" to enter create mode with only the most popular words so far
  `;
};

// Store the user-inputted words in the relevant global word array
var storeInputWordsWithFrequency = function (inputWords) {
  // Initialise empty variable as placeholder for the word array we wish to add to
  var wordArray;
  var wordFreqArray;
  // Define wordArray to be the relevant array depending on the current input word type
  if (currWordType == 'exclamations') {
    wordArray = exclamations;
    wordFreqArray = exclamationsFrequencies;
  } else if (currWordType == 'adverbs') {
    wordArray = adverbs;
    wordFreqArray = adverbsFrequencies;
  } else if (currWordType == 'nouns') {
    wordArray = nouns;
    wordFreqArray = nounsFrequencies;
  }
  // This assumes anything not any of the word types above is an adjective
  else {
    wordArray = adjs;
    wordFreqArray = adjectivesFrequencies;
  }
  // Add all input words to the relevant word array
  // We could also accomplish this in fewer lines with JS' array concat() method
  // https://www.w3schools.com/jsref/jsref_concat_array.asp
  var counter = 0;
  while (counter < inputWords.length) {
    wordArray.push(inputWords[counter]);
    // For each new input word, add a 0 frequency for that word in wordFreqArray at the same index
    wordFreqArray.push(0);
    counter = counter + 1;
  }
};

var getRandomElemInArrayAndIncrFreq = function (arr, freqArr) {
  // Choose a random index in the word array
  var randomIndex = Math.floor(Math.random() * arr.length);
  // Increment frequency of element at chosen index
  freqArr[randomIndex] += 1;
  // Return the element at the random index
  return arr[randomIndex];
};

var getPopularElemInArray = function (arr, freqArr) {
  // Find the index of most frequent item in freqArr
  // Indexes in freqArr correspond 1-1 to indexes in arr
  var indexOfMostFrequentElem = freqArr.indexOf(Math.max(...freqArr));
  return arr[indexOfMostFrequentElem];
};

var completeMadLibMultipleWordsWithModes = function (createMode) {
  // If we are in normal create mode, return completed Mad Lib with random words
  if (createMode == 'create') {
    // Get a random word from each word type
    var selectedExc = getRandomElemInArrayAndIncrFreq(exclamations, exclamationsFrequencies);
    var selectedAdverb = getRandomElemInArrayAndIncrFreq(adverbs, adverbsFrequencies);
    var selectedNoun = getRandomElemInArrayAndIncrFreq(nouns, nounsFrequencies);
    var selectedAdj = getRandomElemInArrayAndIncrFreq(adjs, adjectivesFrequencies);
  }
  // Otherwise, if we are in create popular mode, get the most popular word from each word type
  else {
    selectedExc = getPopularElemInArray(exclamations, exclamationsFrequencies);
    selectedAdverb = getPopularElemInArray(adverbs, adverbsFrequencies);
    selectedNoun = getPopularElemInArray(nouns, nounsFrequencies);
    selectedAdj = getPopularElemInArray(adjs, adjectivesFrequencies);
  }
  // Return the completed Mad Lib
  return `
    "${selectedExc}!" he said ${selectedAdverb} as he jumped into his convertible ${selectedNoun} and drove off with his ${selectedAdj} wife. <br/><br/>
    Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.
  `;
};

var popularMadLibs = function (input) {
  if (input == 'input') {
    mode = 'input';
    // Show user list of adjectives when switching back to input mode
    return `
      You have switched to input mode. <br/><br/>
      ${generateInputPromptWithPopular(currWordType)}
    `;
  }

  if (input == 'create') {
    mode = 'create';
    return 'You have switched to create mode. Hit Submit to complete the Mad Lib.';
  }

  // If user specifies popular mode, generate Mad Lib with most frequently chosen words so far.
  if (input == 'popular') {
    mode = 'createPopular';
    return 'You have switched to create popular mode. Hit Submit to complete the Mad Lib.';
  }

  if (mode == 'input') {
    // If input is empty, prompt user to input words
    if (input == '') {
      return `Please input ${currWordType} separated by commas to fill in our Mad Lib.`;
    }

    // Otherwise, save the user-inputted words for later
    var inputWords = parseInputWords(input);
    storeInputWordsWithFrequency(inputWords);
    // Notice the following logic. We generate the feedback message using currWordType,
    // then set currWordType to nextWordType, then return the feedback message to the user.
    var nextWordType = getNextWordType();
    // Create feedback for the user on input
    var feedbackMessage = `
      You have added ${inputWords} to our list of ${currWordType}.<br/><br/>
      ${generateInputPromptWithPopular(nextWordType)}
    `;
    // Cycle to the next word type for the next user input
    currWordType = nextWordType;
    return feedbackMessage;
  }

  if (mode.startsWith('create')) {
    // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
    return completeMadLibMultipleWordsWithModes(mode);
  }

  // If we reach this part of control flow, something went wrong
  return 'Oops, something went wrong!';
};

/**
 * Sets of Mad Libs
 */
var completeRandomMadLibMultipleWordsWithModes = function (createMode) {
  // If we are in normal create mode, return completed Mad Lib with random words
  if (createMode == 'create') {
    // Get a random word from each word type
    var selectedExc = getRandomElemInArrayAndIncrFreq(exclamations, exclamationsFrequencies);
    var selectedAdverb = getRandomElemInArrayAndIncrFreq(adverbs, adverbsFrequencies);
    var selectedNoun = getRandomElemInArrayAndIncrFreq(nouns, nounsFrequencies);
    var selectedAdj = getRandomElemInArrayAndIncrFreq(adjs, adjectivesFrequencies);
  }
  // Otherwise, if we are in create popular mode, get the most popular word from each word type
  else {
    selectedExc = getPopularElemInArray(exclamations, exclamationsFrequencies);
    selectedAdverb = getPopularElemInArray(adverbs, adverbsFrequencies);
    selectedNoun = getPopularElemInArray(nouns, nounsFrequencies);
    selectedAdj = getPopularElemInArray(adjs, adjectivesFrequencies);
  }
  // Select a random Mad Lib
  var madLibs = [
    `"${selectedExc}!" he said ${selectedAdverb} as he jumped into his convertible ${selectedNoun} and drove off with his ${selectedAdj} wife.`,
    `She asked ${selectedAdverb} for the ${selectedNoun} and when they were rude, she said ${selectedExc} and hung up the ${selectedAdj} phone.`,
  ];
  var randomMadLibIndex = Math.floor(Math.random() * madLibs.length);
  var selectedMadLib = madLibs[randomMadLibIndex];

  // Return the completed Mad Lib
  return `
    ${selectedMadLib} <br/><br/>
    Hit Submit to complete the Mad Lib again, enter "input" to input more words, "create" to create random Mad Libs, or "popular" to create the most popular Mad Lib.
  `;
};

var setsOfMadLibs = function (input) {
  if (input == 'input') {
    mode = 'input';
    // Show user list of adjectives when switching back to input mode
    return `
      You have switched to input mode. <br/><br/>
      ${generateInputPromptWithPopular(currWordType)}
    `;
  }

  if (input == 'create') {
    mode = 'create';
    return 'You have switched to create mode. Hit Submit to complete the Mad Lib.';
  }

  // If user specifies popular mode, generate Mad Lib with most frequently chosen words so far.
  if (input == 'popular') {
    mode = 'createPopular';
    return 'You have switched to create popular mode. Hit Submit to complete the Mad Lib.';
  }

  if (mode == 'input') {
    // If input is empty, prompt user to input words
    if (input == '') {
      return `Please input ${currWordType} separated by commas to fill in our Mad Lib.`;
    }

    // Otherwise, save the user-inputted words for later
    var inputWords = parseInputWords(input);
    storeInputWordsWithFrequency(inputWords);
    // Notice the following logic. We generate the feedback message using currWordType,
    // then set currWordType to nextWordType, then return the feedback message to the user.
    var nextWordType = getNextWordType();
    // Create feedback for the user on input
    var feedbackMessage = `
      You have added ${inputWords} to our list of ${currWordType}.<br/><br/>
      ${generateInputPromptWithPopular(nextWordType)}
    `;
    // Cycle to the next word type for the next user input
    currWordType = nextWordType;
    return feedbackMessage;
  }

  if (mode.startsWith('create')) {
    // When user Submits in create mode, return a completed Mad Lib with 1 of the stored adjectives.
    return completeRandomMadLibMultipleWordsWithModes(mode);
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
  // return madLibsMultipleWordTypes(input);
  // return popularMadLibs(input);
  // return setsOfMadLibs(input);
};
