function isPalindrome(word) {
  // Write your algorithm here

    const cleanString = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanString === cleanString.split('').reverse().join('');
}
/* 
  Add your pseudocode here
  Function isPalindrome(word):
    1. Initialize a variable `cleanString`
    2. Remove non-alphanumeric characters from `word` and convert it to lowercase.
    3. Initialize a variable `reverseString` to the reverse of `cleanString`.
    4. If `cleanString` is equal to `reverseString`, return true.
    5. Otherwise, return false.
  
*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
