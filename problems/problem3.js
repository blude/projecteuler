/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * Answer: 6857
 */
 
window.log = console.log;
 
function factorize(num) {
  var checker = 2,  // first factor to check
      factors = []; // list of factors
  while (checker <= num) {
    if (num % checker === 0) {
      num = num / checker;
      factors.push(checker);
    } else {
      checker++;
    }
  }

  return factors + " - Largest is " +factors[factors.length - 1];
}

log('Factors: ' +factorize(600851475143));
