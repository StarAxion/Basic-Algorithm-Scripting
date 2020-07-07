/* Task #13: Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  return arr;
} */


function bouncer(arr) {
  return arr.filter(element => Boolean(element));
  // or:
  // return arr.filter(element => element);
}


console.log(bouncer([7, "ate", "", false, 9])); // bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9]
console.log(bouncer(["a", "b", "c"])); // bouncer(["a", "b", "c"]) should return ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // bouncer([false, null, 0, NaN, undefined, ""]) should return []
console.log(bouncer([null, NaN, 1, 2, undefined])); // bouncer([null, NaN, 1, 2, undefined]) should return [1, 2]