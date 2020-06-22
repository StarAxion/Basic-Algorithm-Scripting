/* Task #10: Boo Who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

function booWho(bool) {
  return bool;
} */


function booWho(bool) {
  bool = typeof bool === 'boolean';
  return bool;
}


console.log(booWho(true)); // booWho(true) should return true
console.log(booWho(false)); // booWho(false) should return true
console.log(booWho([1, 2, 3])); // booWho([1, 2, 3]) should return false
console.log(booWho([].slice)); // booWho([].slice) should return false
console.log(booWho({ "a": 1 })); // booWho({ "a": 1 }) should return false
console.log(booWho(1)); // booWho(1) should return false
console.log(booWho(NaN)); // booWho(NaN) should return false
console.log(booWho("a")); // booWho("a") should return false
console.log(booWho("true")); // booWho("true") should return false
console.log(booWho("false")); // booWho("false") should return false