
const sumAll = function sumAll(a, b) {
    let sum = 0; // create a variable to hold the final sum
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) { // loop through the given numbers
      sum += i; // on each iteration add the number to the sum
    }
    return sum; // return the sum after finishing the loop
  };
  sumAll(1, 4);

  // Do not edit below this line
  module.exports = sumAll;



