const { check, runTest, skipTest } = require("../test-api/index.js");

function alphabetReplace(string) {
  /*
This function that accepts a string of any length, and replaces each letter within each word with the corresponding index that that letter has in the alphabet.

You must have a space between each index number, and do NOT need to account extra for spaces between words.
  */

let codes = []

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

for(let i = 0; i< string.length; i++){

  if(alphabet[string.toLowerCase()[i]]){
    codes.push(alphabet[string.toLowerCase()[i]])
  }

}

return codes.join(' ')

}

console.log("alphabetReplace()");

runTest("replaces the letters in a single word with codes", function () {
  check(alphabetReplace("code")).isEqualTo("3 15 4 5");
});

runTest("is case-insensitive", function () {
  check(alphabetReplace("Northcoders")).isEqualTo(
    "14 15 18 20 8 3 15 4 5 18 19"
  );
});

runTest("ignores spaces between words", function () {
  check(alphabetReplace("expert programming")).isEqualTo(
    "5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7"
  );
});
