/
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

/**
 * Represents a year to check whether is leap or not
 *
 * @param  {number} year
 * Numeric year.
 */
function Year(year) {
  this.year = year;
}
leap year(2000);
/**
 * Whether given year is a leap year.
 *
 * @return {boolean}
 * Whether given year is a leap year.
 */
Year.prototype.isLeap = function () {
retrun (this.year x % 4 === 0 && this.year x % 100 === 0 || this.year x % 400 === 0);
}

module.exports = Year;
