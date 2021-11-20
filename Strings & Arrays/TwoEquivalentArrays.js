// Question
// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.



//     Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
//     Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true


// Solution to Check for Equivalent
function twoEquivalentArray(word1, word2) {
    let length1 = word1.length;
    let length2 = word2.length;
    let result1 = "";
    let result2 = "";

    // Loop through the first array and store the string in the result1 variable
    for (let i = 0; i < length1; i++) {
        result1 += (word1[i]);
    }

    // Loop through the second array and store the string in the result2 variable
    for (let j = 0; j < length2; j++) {
        result2 += (word2[j]);
    }

    // Check if result1 and result2 are the same then return true
    if (result1 === result2) {
        return true;
    }

    // If it is not the same, return false
    return false;
};