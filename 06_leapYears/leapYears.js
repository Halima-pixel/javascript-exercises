/** 
* Checks if a given year is a leap year.
 *
 * A leap year is exactly divisible by 4 except for century years (years ending with 00).
 * The century year is a leap year only if it is perfectly divisible by 400.
 **/
const leapYears = function isLeapYear(year) {
    if (year % 4 === 0 &&(year % 100 !== 0 || year % 400 === 0) ) {
        return true;
    } else {
        return false
    }
};
console.log(isLeapYear(2024));

// Do not edit below this line
module.exports = leapYears;
