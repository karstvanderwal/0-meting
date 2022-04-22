'use strict'
let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);

function reverseString(string) {
  var output = '';
  for (var i = string.length - 1; i >= 0; i--)
    output += string[i];
  return output;
}