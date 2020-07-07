/* Task #6: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Your code should not use the built-in method .endsWith() to solve the challenge!

function confirmEnding(str, target) {
  return str;
} */


function confirmEnding(str, target) {
  return target === str.slice(-target.length);
}


console.log(confirmEnding("Bastian", "n")); // confirmEnding("Bastian", "n") should return true
console.log(confirmEnding("Congratulation", "on")); // confirmEnding("Congratulation", "on") should return true
console.log(confirmEnding("Connor", "n")); // confirmEnding("Connor", "n") should return false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false
console.log(confirmEnding("He has to give me a new name", "name")); // confirmEnding("He has to give me a new name", "name") should return true
console.log(confirmEnding("Open sesame", "same")); // confirmEnding("Open sesame", "same") should return true
console.log(confirmEnding("Open sesame", "pen")); // confirmEnding("Open sesame", "pen") should return false
console.log(confirmEnding("Open sesame", "game")); // confirmEnding("Open sesame", "game") should return false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")); // confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false
console.log(confirmEnding("Abstraction", "action")); // confirmEnding("Abstraction", "action") should return true