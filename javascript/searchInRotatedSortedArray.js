/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	// do binary search but account for the rotation

	let lo = 0;
	let hi = nums.length - 1;
	while (lo < hi) {
		let mid = Math.floor((lo + hi) / 2);
		if (nums[mid] > nums[hi]) {
			lo = mid + 1;
		} else {
			hi = mid;
		}
	}

	let rot = lo;
	lo = 0;
	hi = nums.length - 1;

	while (lo <= hi) {
		let mid = Math.floor((lo + hi) / 2);
		let realMid = (mid + rot) % nums.length;

		if (target === nums[realMid]) {
			return realMid;
		}
		if (target < nums[realMid]) {
			hi = mid - 1;
		} else {
			lo = mid + 1;
		}
	}

	return -1;
};
