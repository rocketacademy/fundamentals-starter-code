var words = [];

var getRandomIndex = function(arrayLength){
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor( Math.random() * arrayLength );
  return randomIndex;
};

var main = function (input) {
  if( input == 'create' ){

    // get a random index from the array
    var randomIndex = getRandomIndex(words.length);

    // use the random index to get a random word value from the array
    var randomAdj = words[randomIndex];

    // create the full Mad Lib sentence
    var madLib = '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his '+randomAdj+' wife.';

    return madLib;
  }

  // add a word to the array
  words.push(input);

  // set instructions text
  var myOutputValue = 'Enter an adjective or type "create" to madlib.';
  return myOutputValue;
};
