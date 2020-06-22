/* Task #8: Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.

function truncateString(str, num) {
  return str;
} */


function truncateString(str, num) {
  if (str.length > num) {
    str = str.slice(0, num) + '...';
  }
  return str;
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-", 1)); // truncateString("A-", 1) should return "A..."
console.log(truncateString("Absolutely Longer", 2)); // truncateString("Absolutely Longer", 2) should return "Ab..."