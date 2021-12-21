// Create var 'isEven' with the value 'require('is-even') which
// will allow us to use the functionality of is-even, because
// require will import it.
var isEven = require('is-even');

// We export a function called 'isUneven', which will allow
// others (who import this with require) to use the function
// isUneven to greatly improve their code!
module.exports = function isUneven(i) {
  // Since we want to return something, we use the return
  // keyword. With this we check if a number i is uneven and
  // return true if it is and false if it is not.
  return (isEven(i) === true) === false;
};
