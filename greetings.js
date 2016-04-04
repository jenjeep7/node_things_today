var hello = require('./hello');
var lambda = require('./lambda');
var math = require('./mordor/theRing');

var wholeMessage = function(){
  console.log(hello() + " " + lambda() + '?');
}

wholeMessage();

console.log(math(1, 2));
// console.log(math.sandwich(7, 6));
// console.log(math.party(5, 4));

module.exports = wholeMessage;
