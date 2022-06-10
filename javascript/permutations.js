/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let ret = [];

	function dfs(nums, tempArr) {
		if (nums.length == 0) {
			ret.push(tempArr);
			return;
		} else {
			for (let i = 0; i < nums.length; i++) {
				dfs(
					nums.filter((value, index) => index !== i),
					tempArr.concat([nums[i]])
				);
			}
		}
	}

	dfs(nums, []);

	return ret;
};
