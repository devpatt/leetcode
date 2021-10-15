/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let maxLen = 0;
	let left = 0;
	let right = 0;

	for (let i = 0; i < s.length; i++) {
		let letterCenterLen = getPalindromeLen(s, i, i);
		let spaceCenterLen = getPalindromeLen(s, i, i + 1);

		let currMaxLen = Math.max(letterCenterLen, spaceCenterLen);

		if (currMaxLen > maxLen) {
			left = i - Math.floor((currMaxLen - 1) / 2);
			right = i + Math.floor(currMaxLen / 2);
			maxLen = currMaxLen;
		}
	}
	return s.substring(left, right + 1);
};

function getPalindromeLen(s, left, right) {
	let L = left;
	let R = right;
	while (L >= 0 && R <= s.length && s.charAt(L) == s.charAt(R)) {
		L--;
		R++;
	}
	return R - L - 1;
}
