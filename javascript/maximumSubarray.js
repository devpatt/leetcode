/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = [];
  dp[0] = nums[0];
  let largestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    largestSum = Math.max(largestSum, dp[i]);
  }

  return largestSum;
};

/* subproblem is maxSubArray(nums, i) which is the max subarray from nums[0:i] that contains i as the last element
Then... 
maxSubArray(nums, i) = nums[i] + ( maxSubArray(nums, i-1) > 0 ? maxSubArray(nums, i-1) : 0 ) */
