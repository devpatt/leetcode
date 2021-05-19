/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let maxArea = 0;

	for (let i = 0; i < height.length - 1; i++) {
		for (let j = height.length - 1; j > i; j--) {
			currArea = Math.min(height[i], height[j]) * (j - i);
			if (currArea > maxArea) maxArea = currArea;
			if (height[j] > height[i]) break;
		}
	}

	return maxArea;
};
