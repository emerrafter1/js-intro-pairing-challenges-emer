const { check, runTest, skipTest } = require("../test-api/index.js");

/*
Implement a function which takes as an argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The function should be able to to work with both strings and arrays, and should return an array.
*/

//loop through the array check that the current characters does not equal to the previous character
//if it is equal slice it out of the array
// loop backwards through array
// start at second last digit


function uniqueAndOrdered(str) {

  if(typeof str == "string"){
    str = str.split('')
  }
  
  for (let i = str.length-2; i>=0; i--){
    if (str[i] === str[i+1]){
      str.splice(i,1)  
    }
  }
  return str
}

console.log("uniqueAndOrdered");

runTest("returns unique ordered numbers from an array", function () {
  check(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).isEqualTo([
    1, 2, 3, 1
  ]);
  check(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4,5 ])).isEqualTo([
    1, 2, 3, 4, 5
  ]);
  check(uniqueAndOrdered([1, 2, 3, 3])).isEqualTo([
    1, 2, 3
  ]);
});

runTest("returns unique ordered letters from a string", function () {
  check(uniqueAndOrdered("nnoorrtthhccooddeerrss")).isEqualTo([
    "n",
    "o",
    "r",
    "t",
    "h",
    "c",
    "o",
    "d",
    "e",
    "r",
    "s"
  ]);
});

runTest("is case sensitive for strings", function () {
  check(uniqueAndOrdered("AaAAABBBCCCc")).isEqualTo([
    "A",
    "a",
    "A",
    "B",
    "C",
    "c"
  ]);
});
