/* Task #7: Repeat a String

Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
The built-in repeat() method should not be used!

function repeatStringNumTimes(str, num) {
  return str;
} */


function repeatStringNumTimes(str, num) {
  var repStr = '', i;
  if (num > 0) {
    for (i = 0; i < num; i += 1) {
      repStr += str;
    }
  }
  return repStr;
}


console.log(repeatStringNumTimes("*", 3)); // repeatStringNumTimes("*", 3) should return "***"
console.log(repeatStringNumTimes("abc", 3)); // repeatStringNumTimes("abc", 3) should return "abcabcabc"
console.log(repeatStringNumTimes("abc", 4)); // repeatStringNumTimes("abc", 4) should return "abcabcabcabc"
console.log(repeatStringNumTimes("abc", 1)); // repeatStringNumTimes("abc", 1) should return "abc"
console.log(repeatStringNumTimes("*", 8)); // repeatStringNumTimes("*", 8) should return "********"
console.log(repeatStringNumTimes("abc", -2)); // repeatStringNumTimes("abc", -2) should return ""
console.log(repeatStringNumTimes("abc", 0)); // repeatStringNumTimes("abc", 0) should return ""


function repeatStringNumTimesAlt(str, num) {
  if (num <= 0) {
    return '';
  }
  return str + repeatStringNumTimesAlt(str, num -= 1);
}


console.log(repeatStringNumTimesAlt("*", 3)); // repeatStringNumTimes("*", 3) should return "***"
console.log(repeatStringNumTimesAlt("abc", 3)); // repeatStringNumTimes("abc", 3) should return "abcabcabc"
console.log(repeatStringNumTimesAlt("abc", 4)); // repeatStringNumTimes("abc", 4) should return "abcabcabcabc"
console.log(repeatStringNumTimesAlt("abc", 1)); // repeatStringNumTimes("abc", 1) should return "abc"
console.log(repeatStringNumTimesAlt("*", 8)); // repeatStringNumTimes("*", 8) should return "********"
console.log(repeatStringNumTimesAlt("abc", -2)); // repeatStringNumTimes("abc", -2) should return ""
console.log(repeatStringNumTimesAlt("abc", 0)); // repeatStringNumTimes("abc", 0) should return ""