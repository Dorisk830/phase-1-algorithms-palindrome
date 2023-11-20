function isPalindrome(word) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the clean word is equal to its reverse
  return cleanWord === cleanWord.split("").reverse().join("");
}

/* 
  Pseudocode:
  1. Remove non-alphanumeric characters from the input word and convert to lowercase.
  2. Check if the cleaned word is equal to its reverse.
*/

/*
  Explanation:
  - We clean the input word by removing non-alphanumeric characters and converting to lowercase.
  - We compare the cleaned word with its reverse to check if it reads the same backward as forward.
*/

// Custom tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
