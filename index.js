var isEven = require('is-even');

module.exports = function isUneven(i) {
  return !isEven(i);
};