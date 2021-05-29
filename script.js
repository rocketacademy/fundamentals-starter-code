/*
Title: House Paint
Prompt: Estimate the price of painting your home. Your designer home has windows and doors all of the same size: 90cm x 150cm. There are 8 windows and 3 doors. Each room in your 6-room house is the same size: 3m x 3m. Paint will cover 300 square meters per litre. You want to apply 2 coats. The user will enter a dollar amount of paint per litre and the app will calculate how much it will cost. */

var calcSurfaceArea = function (l, w) {
  return l * w;
};
var convertCmToM = function (lengthInCm) {
  return lengthInCm / 100;
};

var calcCostOfPaintingHouse = function (costOfPaintPerLitre) {
  var numWindows = 8;
  var numDoors = 3;
  var numRooms = 6;
  var surfaceAreaOfRoom = calcSurfaceArea(3, 3);
  var paintCvgPerLitre = 300;
  var numCoats = 2;

  // convert the window and door dimensions from cm to m
  var lenOfWindowsAndDoors = convertCmToM(150);
  var widthOfWindowsAndDoors = convertCmToM(90);

  //  calculate surface area of a window or door
  var surfaceAreaOfWindowOrDoor = calcSurfaceArea(
    lenOfWindowsAndDoors,
    widthOfWindowsAndDoors
  );
  // calculate total surface area of windows and doors
  var totalSurfaceAreaOfWindowsAndDoors =
    surfaceAreaOfWindowOrDoor * numWindows +
    surfaceAreaOfWindowOrDoor * numDoors;
  // calc area that needs to be painted
  var areaToPaint =
    (surfaceAreaOfRoom * numRooms - totalSurfaceAreaOfWindowsAndDoors) *
    numCoats;
  // calc vol of paint needed
  var paintNeeded = areaToPaint / paintCvgPerLitre;
  // calc cost based on paint needed
  var totalCost = paintNeeded * costOfPaintPerLitre;
  // return the total cost. 'toFixed' fixes the output at 2 decimal places
  return totalCost.toFixed(2);
};

var main = function (input) {
  var costOfPaintingHouse = calcCostOfPaintingHouse(input);
  var myOutputValue = `It will cost $${costOfPaintingHouse} to paint the house based on a price of $${input} per litre of paint `;
  return myOutputValue;
};
