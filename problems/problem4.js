/**
 * Problem 4 - Largest palindrome product
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * Answer: 906609
 */

function reverseNumber(number) {
  var palindrome = number.toString().split('').reverse().join('');
  return parseInt(palindrome, 10);  
}

function hasPalindrome(number) {
  if (reverseNumber(number) === number) {
    return true;
  }
  return false;
}

(function() {
  var numDigits = 3;
  
  var product = 0,
      largPal,
      palList = [],
      maxValue = Math.pow(10, numDigits) - 1, 
      x = maxValue,
      y = maxValue;
  
  while(x >= 100) {
    while(y >= 100) {
      product = x * y;
      if (reverseNumber(product) === product) {
        palList.push(product);
      }
      y--;
    }
    y = maxValue;
    x--;
  }
  
  palList.sort(function(a, b) { return b - a; });

  largPal = palList[0];

  console.info("Largest palindrome is: " + largPal);

})();
