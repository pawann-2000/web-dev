/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let splitStr = str.split('');
    let count = 0;
    for(let i=0; i<str.length; i++){
      if(splitStr[i]==='a' || splitStr[i]==='e' || splitStr[i]==='i' || splitStr[i]==='o' || splitStr[i]==='u' || splitStr[i]==='A' || splitStr[i]==='E' || splitStr[i]==='I' || splitStr[i]==='O' || splitStr[i]==='U') {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;