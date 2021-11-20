// Question
// Write a function that reverses a string.The input string is given as an array of characters s.

// You must do this by modifying the input array in -place with O(1) extra memory.

//     Example 1:

// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:

// Input: s = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

// Solution to Reverse String
function reverseString(s) {
    // Two Pointers i.e starting from the first and last item of the array of char.
    let left = 0; // First Item
    let right = s.length - 1; // Last Item

    while (left < right) {
        const tempValue = s[left];
        s[left] = s[right];
        s[right] = tempValue;

        left++;
        right--;
    }
};

// Time Complexity - O(n)
// Space Complexity - O(1)