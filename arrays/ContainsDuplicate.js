function containsDuplicate(nums) {
  // Solution 1
  // Solution Steps
  // Brute Force
  // Loop through the array twice starting from index 1 and 2
  // return true if the values in the two indexes are the same
  // Time Complexity 0(n^2) and Space Complexity of 0(1)

  // for(let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] == nums[j]) {
  //             return true
  //         }
  //     }
  // }

  // Solution 2
  // Solution Steps
  // Create an hash map for holding elements of the nums array
  // Loop through the nums array to check if the map already has the number, if it has it then I return true and if it does not have it I will set the number to the map 
  // Time Complexity of 0(n) because of the loop and Space complexity of 0(n) because of the map I created

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }

    map.set(nums[i]);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 1, 2]))