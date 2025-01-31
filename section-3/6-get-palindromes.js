const { check, runTest, skipTest } = require("../test-api/index.js");

/*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
*/
function getPalindromes(words) {
  let palindromes = []

  for (let i =0; i< words.length; i++){
    if(words[i] === words[i].split('').reverse().join('')){
      
      palindromes.push(words[i])
    }

  }
  return palindromes
}

console.log("getPalindromes()");

runTest("returns [] when passed []", function () {
  check(getPalindromes([])).isEqualTo([]);
});

runTest("identifies palindromes", function () {
  check(getPalindromes(["racecar"])).isEqualTo(["racecar"]);
  check(getPalindromes(["racecar", "racecar"])).isEqualTo([
    "racecar",
    "racecar"
  ]);
});

runTest("ignores non-palindromes", function () {
  check(getPalindromes(["racecar", "kayak", "tacocat"])).isEqualTo([
    "racecar",
    "kayak",
    "tacocat"
  ]);
  check(getPalindromes(["pineapple", "pony", "racecar"])).isEqualTo([
    "racecar"
  ]);
});

runTest("returns [] when passed no palindromes", function () {
  check(getPalindromes(["pineapple", "watermelon", "pony"])).isEqualTo([]);
});
