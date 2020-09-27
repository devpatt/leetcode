/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsObj = {}; // makes an object/map with desired numbers as "keys", and indices as the "value"

  // loop through array once, checks if a desird value was found (then done)
  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]] != undefined) {
      return [numsObj[nums[i]], i];
    }
    numsObj[target - nums[i]] = i; // stores the current index with the key of the future desirded value (target - current number)
  }

  // O(n) efficiency
};
