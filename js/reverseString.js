/* Task #2: Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string. 

function reverseString(str) {
  return str;
} */


function reverseString(str) {
  var arr = str.split('');
  str = arr.reverse().join('');
  return str;
}


console.log(typeof reverseString("hello")); // reverseString("hello") should return a string
console.log(reverseString("hello")); // reverseString("hello") should become "olleh"
console.log(reverseString("Howdy")); // reverseString("Howdy") should become "ydwoH"
console.log(reverseString("Greetings from Earth")); // reverseString("Greetings from Earth") should return "htraE morf sgniteerG"


function reverseStringAlt(str) {
  var i, n = str.length - 1, invertedStr = '';
  for (i = n; i >= 0; i -= 1) {
    invertedStr += str[i];
  }
  return invertedStr;
}


console.log(typeof reverseStringAlt("hello")); // reverseString("hello") should return a string
console.log(reverseStringAlt("hello")); // reverseString("hello") should become "olleh"
console.log(reverseStringAlt("Howdy")); // reverseString("Howdy") should become "ydwoH"
console.log(reverseStringAlt("Greetings from Earth")); // reverseString("Greetings from Earth") should return "htraE morf sgniteerG"