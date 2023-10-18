Set { 1, 2, 3, 4 }

"ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

function hasDuplicate(arr) {
    const seen = new Set();
  
    for (const item of arr) {
      if (seen.has(item)) {
        return true; // A duplicate is found
      }
      seen.add(item);
    }
  
    return false; // No duplicates were found
  }
  console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

function vowelCount(str) {
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    
    // Define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  
    // Create a Map to store the vowel counts
    const vowelMap = new Map();
  
    // Iterate through the characters in the string
    for (let char of str) {
      if (vowels.has(char)) {
        // If the character is a vowel, add it to the Map and update the count
        if (vowelMap.has(char)) {
          vowelMap.set(char, vowelMap.get(char) + 1);
        } else {
          vowelMap.set(char, 1);
        }
      }
    }
  
    return vowelMap;
  }
  
  // Example usage:
  console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
  console.log(vowelCount('Colt'));    // Map { 'o' => 1 }
  