/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  // Created a copy of str1 and str2 and stripped symbols
  strA = str1.replace(/[^\w]/g, '').toLowerCase()
  strB = str2.replace(/[^\w]/g, '').toLowerCase()

  // If both the strings are of different length, then they cannot be anagrams
  if(str1.length!=str2.length)
    return false;

  // If the lowercased version of both the sorted strings are equal then they are anagrams
  if(str1.split('').sort().join('').toLowerCase()===str2.split('').sort().join('').toLowerCase())
    return true;

  // If the lowercased stripped-down version of both the sorted strings are equal then they are anagrams
  if(strA.split('').sort().join('').toLowerCase()===strB.split('').sort().join('').toLowerCase())
    return true;

  else 
    return false;
}

module.exports = isAnagram;
