var mode = 'green';

var main = function (input) {
  if (input == 'greenmode') {
    mode = 'green';
  } else if (input == 'bluemode') {
    mode = 'blue';
  } else if (input == 'redmode') {
    mode = 'red';
  }

  var myOutputValue =
    'A fool sees not the same tree that a wise man sees. -William Blake';

  if (mode == 'blue') {
    myOutputValue =
      'The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau';
  }
  if (mode == 'red') {
    myOutputValue = '“A drop of ink may make a million think.” – Lord Byron';
  }

  return myOutputValue;
};
