/* Task #11: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  return str;
} */


function titleCase(str) {
  let arr = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  // or:
  // let arr = str.toLowerCase().split(' ').map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  return arr.join(' ');
}


console.log(typeof titleCase("I'm a little tea pot")); // titleCase("I'm a little tea pot") should return a string
console.log(titleCase("I'm a little tea pot")); // titleCase("I'm a little tea pot") should return I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt")); // titleCase("sHoRt AnD sToUt") should return Short And Stout
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout