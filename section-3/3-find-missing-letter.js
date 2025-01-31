const { check, runTest, skipTest } = require("../test-api/index.js");

function findMissingLetter(letters) {
  /*
In this function, you need to find out which letter is missing. But you can't use a reference lookup table (i.e. no array or object with the whole alphabet in it) so you will have think outside the box!

This function needs to take a list and needs to return the letter it is missing.

You will always get a sorted array of consecutive letters, and it will always have exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
  */

const alphabet = {
  a: 1, 
  b:2,
  c:3,
  d:4,
  e:5, 
  f:6, 
  g:7, 
  h:8, 
  i:9,
  j:10,
  k:11,
  l:12, 
  m:13, 
  n:14,
  o:15,
  p:16, 
  q:17, 
  r:18, 
  s:19, 
  t: 20, 
  u: 21, 
  v: 22, 
  w: 23, 
  x:24, 
  y:25,
  z: 26
}

let currentValue = alphabet[letters[0].toLowerCase()]
const isLowerCase = (alphabet[letters[0].toLowerCase()] === alphabet[letters[0]])

for (let i = 0; i<letters.length; i++){
  if(alphabet[letters[i].toLowerCase()] != currentValue){
    const missingLetter = Object.keys(alphabet).find(key => alphabet[key] === currentValue)

    if (isLowerCase){
      return missingLetter
    }
    else {
      return missingLetter.toUpperCase()
    }

  }
  else {
    currentValue++
  }
  

}
return ""
}

console.log("findMissingLetter()");

runTest("returns an empty string if no letters are missing", function () {
  check(findMissingLetter(["A", "B", "C", "D", "E"])).isEqualTo("");
});

runTest("returns a missing capital letter", function () {

  check(findMissingLetter(["A", "B", "C", "E"])).isEqualTo("D");
});

runTest("returns a missing lower case letter", function () {
  check(findMissingLetter(["e", "f", "g", "i"])).isEqualTo("h");
});
