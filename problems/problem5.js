/**
 * Problem #5 - Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of
 * the numbers from 1 to 20?
 *
 * Answer: 232792560
 */

// noprotect

function isDivisible(number) {
  var isEven = true;
  for (var i = 1; i <= 20; i++) {
    isEven = (number % i === 0) && isEven;
  }
  
  return isEven;
}

function findSmallestMultiple() {
  var number = 1, // starting with 1
      foundNumber = false;

  while (!foundNumber) {
    if (isDivisible(number)) {
      foundNumber = true;
      return number;
    }
    number++;
  }
  
}
  
console.log(findSmallestMultiple());
