/*
 * Solution for Number of Characters
 */
// eslint-disable-next-line no-unused-vars
var numberOfCharacters = function (input) {
  var myOutputValue = '';
  var counter = 0;
  while (counter < Number(input)) {
    myOutputValue += '👍';
    counter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Square
 */
// eslint-disable-next-line no-unused-vars
var square = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // Add a 👍 to the current row
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Triangle
 */
// eslint-disable-next-line no-unused-vars
var triangle = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    // Change the inner loop to only run outerCounter number of times
    // This means that we only have as many 👍 on each line as the current row index.
    // To ensure we always print the last emoji on each row, change the inner loop
    // conditional to use <= instead of <.
    while (innerCounter <= outerCounter) {
      // Add a 👍 to the current row
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Modes
 */
// Use global variables in Modes to store data that needs to persist across Submits.
var shape;

// eslint-disable-next-line no-unused-vars
var modes = function (input) {
  // If shape has not been initialised, get user to input the shape they want
  if (!shape) {
    // Only accept square and triangle as shapes
    if (input !== 'square' && input !== 'triangle') {
      return 'Please enter either square or triangle.';
    }
    // Save the shape in the global shape variable for future use.
    shape = input;
    return `You have entered shape ${shape}. Please enter the side length of the shape you want.`;
  }

  // If shape has been initialised, get user to input the side length they want
  var sideLength = Number(input);

  // Only accept valid numbers as side length
  if (Number.isNaN(sideLength)) {
    return 'Please input a valid integer as side length';
  }

  // If shape is square, output a square
  if (shape === 'square') {
    return square(sideLength);
  }

  // If shape is triangle, output a triangle
  if (shape === 'triangle') {
    return triangle(sideLength);
  }

  // If we reach here, something unexpected happened
  return 'Unexpected error';
};

/*
 * Solution for Upside Down Triangle
 */
// eslint-disable-next-line no-unused-vars
var upsideDownTriangle = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    // Update our previous triangle implementation to reference sideLength again and use <
    // to draw the correct number of emojis per line.
    while (innerCounter < sideLength - outerCounter) {
      // Add a 👍 to the current row
      myOutputValue += '👍';
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Outline Square
 */
// eslint-disable-next-line no-unused-vars
var outlineSquare = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      // If current iteration represents a border element, draw ✊ instead.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
      } else {
        // Add a 👍 to the current row
        myOutputValue += '👍';
      }

      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Center Square
 */
// eslint-disable-next-line no-unused-vars
var centerSquare = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  // Do not accept side lengths that are not odd, because
  // non-odd side lengths cannot have a centre character.
  if (sideLength % 2 != 1) {
    return 'Please enter an odd number for side length';
  }
  var outerCounter = 0;
  while (outerCounter < sideLength) {
    var innerCounter = 0;
    while (innerCounter < sideLength) {
      var halfSideLengthIndex = Math.floor(sideLength / 2);
      // If current iteration represents a border element, draw ✊ instead.
      if (outerCounter == 0 || outerCounter == sideLength - 1
        || innerCounter == 0 || innerCounter == sideLength - 1) {
        myOutputValue += '✊';
        // If current iteration represents the middle element, draw 😁.
      } else if (outerCounter === halfSideLengthIndex && innerCounter === halfSideLengthIndex) {
        myOutputValue += '😁';
        // Add a 👍 to the current row
      } else {
        myOutputValue += '👍';
      }
      innerCounter += 1;
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
    outerCounter += 1;
  }
  return myOutputValue;
};

/*
 * Solution for Rings (this was hard!)
 */
// eslint-disable-next-line no-unused-vars
var rings = function (input) {
  var myOutputValue = '';
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  // Initialise 2D array to represent grid to print
  var grid = [];
  for (let i = 0; i < sideLength; i += 1) {
    // Push sideLength arrays of length sideLength into grid
    grid.push(Array(sideLength));
  }

  // Draw halfSideLengthIndex concentric circles in the grid, starting from the outside
  var halfSideLengthIndex = Math.floor(sideLength / 2);
  for (let i = 0; i < halfSideLengthIndex; i += 1) {
    var emoji = i % 2 == 0 ? '✊' : '👍';
    // Fill top and bottom rows of square
    for (let j = i; j < sideLength - i; j += 1) {
      grid[i][j] = emoji;
      grid[sideLength - 1 - i][j] = emoji;
    }
    // Fill sides of middle rows of square
    for (let j = i + 1; j < sideLength - 1 - i; j += 1) {
      grid[j][i] = emoji;
      grid[j][sideLength - 1 - i] = emoji;
    }
  }

  // Add centre element if side length is odd
  if (sideLength % 2 == 1) {
    if (sideLength % 4 == 1) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = '✊';
    } else if (sideLength % 4 == 3) {
      grid[halfSideLengthIndex][halfSideLengthIndex] = '👍';
    }
  }

  // Translate what's in the grid to myOutputValue
  for (let i = 0; i < sideLength; i += 1) {
    for (let j = 0; j < sideLength; j += 1) {
      myOutputValue += grid[i][j];
    }
    // Insert a line break to start a new row
    myOutputValue += '<br>';
  }
}