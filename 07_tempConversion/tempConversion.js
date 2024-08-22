const convertToCelsius = (fahrenheit) => Math.round(((fahrenheit - 32 ) * (5 / 9)));
const convertToFahrenheit =  (celsius) => Math.round(((celsius *  (9 / 5)) + 32));

console.log(convertToCelsius(32)); // Output: 0
console.log(convertToFahrenheit(0)); // Output: 32

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
