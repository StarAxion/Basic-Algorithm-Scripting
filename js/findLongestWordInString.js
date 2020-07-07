/* Task #4: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number. 

function findLongestWordLength(str) {
  return str.length;
} */


function findLongestWordLength(str) {
  let arr = str.split(' ').reduce(function (previousValue, currentItem) {
    if (previousValue.length > currentItem.length) {
      return previousValue;
    } else {
      return currentItem;
    }
  });
  return arr.toString().length;
}


console.log(typeof findLongestWordLength("The quick brown fox jumped over the lazy dog")); // findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
console.log(findLongestWordLength("May the force be with you")); // findLongestWordLength("May the force be with you") should return 5
console.log(findLongestWordLength("Google do a barrel roll")); // findLongestWordLength("Google do a barrel roll") should return 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19


function findLongestWordLengthAlt(str) {
  let arr = str.split(' '), i, n = arr.length, max = 0;
  for (i = 0; i < n; i += 1) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
}


console.log(typeof findLongestWordLengthAlt("The quick brown fox jumped over the lazy dog")); // findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number
console.log(findLongestWordLengthAlt("The quick brown fox jumped over the lazy dog")); // findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
console.log(findLongestWordLengthAlt("May the force be with you")); // findLongestWordLength("May the force be with you") should return 5
console.log(findLongestWordLengthAlt("Google do a barrel roll")); // findLongestWordLength("Google do a barrel roll") should return 6
console.log(findLongestWordLengthAlt("What is the average airspeed velocity of an unladen swallow")); // findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
console.log(findLongestWordLengthAlt("What if we try a super-long word such as otorhinolaryngology")); // findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19