/* Task #9: Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  return num;
} */


function findElement(arr, func) {
  return arr.find(func);
}


console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })); // findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })); // findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined


function findElementAlt(arr, func) {
  let i, arrSize = arr.length, num = 0;
  for (i = 0; i < arrSize; i += 1) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


console.log(findElementAlt([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })); // findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8
console.log(findElementAlt([1, 3, 5, 9], function (num) { return num % 2 === 0; })); // findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined