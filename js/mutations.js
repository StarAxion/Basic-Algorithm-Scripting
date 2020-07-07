/* Task #15: Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  return arr;
} */


function mutation(arr) {
  let firstWord = arr[0].toLowerCase(),
    secondWord = arr[1].toLowerCase(),
    i, secondWordSize = secondWord.length;
  for (i = 0; i < secondWordSize; i += 1) {
    if (firstWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }
  return true;
}


console.log(mutation(["hello", "hey"])); // mutation(["hello", "hey"]) should return false
console.log(mutation(["hello", "Hello"])); // mutation(["hello", "Hello"]) should return true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true
console.log(mutation(["Mary", "Army"])); // mutation(["Mary", "Army"]) should return true
console.log(mutation(["Mary", "Aarmy"])); // mutation(["Mary", "Aarmy"]) should return true
console.log(mutation(["Alien", "line"])); // mutation(["Alien", "line"]) should return true
console.log(mutation(["floor", "for"])); // mutation(["floor", "for"]) should return true
console.log(mutation(["hello", "neo"])); // mutation(["hello", "neo"]) should return false
console.log(mutation(["voodoo", "no"])); // mutation(["voodoo", "no"]) should return false
console.log(mutation(["ate", "date"])); // mutation(["ate", "date"]) should return false
console.log(mutation(["Tiger", "Zebra"])); // mutation(["Tiger", "Zebra"]) should return false
console.log(mutation(["Noel", "Ole"])); // mutation(["Noel", "Ole"]) should return true