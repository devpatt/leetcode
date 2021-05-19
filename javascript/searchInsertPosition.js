/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	// recurrive index insert search
	const search = function (arr, x, start, end) {
		if (start > end) {
			return start;
		}

		let mid = Math.floor((start + end) / 2);

		if (arr[mid] === x) {
			return mid;
		}

		if (arr[mid] > x) {
			return search(arr, x, start, mid - 1);
		} else {
			return search(arr, x, mid + 1, end);
		}
	};

	return search(nums, target, 0, nums.length - 1);
};
