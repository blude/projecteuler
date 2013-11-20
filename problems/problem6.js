/**
 * Problem #6 - Sum square difference
 *
 * Answer: 25164150
 */

function sumOfSquares(numOfNumbers) {
  var sum = 0;
  for (var i = 1; i <= numOfNumbers; i++) {
    sum += i * i;
  } 
  return sum;
}

function squareOfSum(numOfNumbers) {
  var sum = 0;
  for (var i = 1; i <= numOfNumbers; i++) {
    sum += i;
  }
  return sum * sum;
}

function findTheDifference(numOfNumbers) {
  return squareOfSum(numOfNumbers) - sumOfSquares(numOfNumbers);
}

findTheDifference(100);
