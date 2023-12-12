/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.replace(/[^\w]/g, '').toLowerCase();
  let i = 0;
  let j = strArr.length-1;
  while(i<strArr.length){
    if(i>j){
      break;
    }
    if(strArr[i]==strArr[j]){
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
