var container = document.querySelector("#container");

var colours = ["green", "cyan", "red", "pink", "lightblue", "silver", "lightgreen", "aqua", "maroon"];

var generateRandomNumber = function(max) {
  return Math.floor(Math.random() * max);
}

var generateRandomColour = function() {
  var colour = colours[generateRandomNumber(colours.length)];
  return colour;
}

var main = function(input) {
  var backgroundColour = generateRandomColour();
  container.style = `background-color:${backgroundColour}`;
  return `changed color to ${backgroundColour}!`;
}