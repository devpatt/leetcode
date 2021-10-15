/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// sort array in accending order
	nums.sort((a, b) => a - b);

	let output = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if (i != 0 && nums[i] == nums[i - 1]) continue;

		let lo = i + 1;
		let hi = nums.length - 1;
		let target = -1 * nums[i];

		while (lo < hi) {
			if (nums[lo] + nums[hi] == target) {
				output.push([nums[i], nums[lo], nums[hi]]);
				while (++lo < hi) if (nums[lo] != nums[lo - 1]) break;
				while (lo < --hi) if (nums[hi] != nums[hi + 1]) break;
			} else if (nums[lo] + nums[hi] < target) {
				lo++;
			} else {
				hi--;
			}
		}
	}

	return output;
};
