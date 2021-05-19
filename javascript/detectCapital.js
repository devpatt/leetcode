/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	let mustBeLower = false;
	let mustBeUpper = false;

	function isLowerCase(str) {
		return str == str.toLowerCase();
	}

	let strToCheck;

	if (isLowerCase(word.charAt(0))) {
		// 1st letter lowercase
		strToCheck = word.substring(1);
		mustBeLower = true;
	} else {
		// 1st letter uppercase
		if (isLowerCase(word.charAt(1))) {
			// 2nd letter lowercase
			strToCheck = word.substring(2);
			mustBeLower = true;
		} else {
			// 2nd letter uppercase
			strToCheck = word.substring(2);
			mustBeUpper = true;
		}
	}

	for (let i = 0; i < strToCheck.length; i++) {
		if (mustBeLower && !isLowerCase(strToCheck.charAt(i))) {
			return false;
		} else if (mustBeUpper && isLowerCase(strToCheck.charAt(i))) {
			return false;
		}
	}
	return true;
};
