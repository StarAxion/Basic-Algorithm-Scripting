/* Task #1: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit. 

function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
} */


function convertToF(celsius) {
  return celsius * (9 / 5) + 32;
}


console.log(typeof convertToF(0)); // convertToF(0) should return a number
console.log(convertToF(-30)); // convertToF(-30) should return a value of -22
console.log(convertToF(-10)); // convertToF(-10) should return a value of 14
console.log(convertToF(0)); // convertToF(0) should return a value of 32
console.log(convertToF(20)); // convertToF(20) should return a value of 68
console.log(convertToF(30)); // convertToF(30) should return a value of 86