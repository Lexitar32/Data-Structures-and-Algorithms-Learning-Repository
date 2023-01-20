// Question Breakdown
// nums - Array of integer
// Problem - Find the subarray with the largest sum and return its sum

function maxSubArray(nums) {
  var max = nums[0];
  var tmp = 0;

  for (var i = 0; i < nums.length; i++) {
    tmp += nums[i];

    if (tmp > max) {
      max = tmp;
    }

    if (tmp < 0) {
      tmp = 0;
    }
  }

  return max;
}