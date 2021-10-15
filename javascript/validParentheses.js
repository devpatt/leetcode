/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let openBrackets = [];

	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) == "(" || s.charAt(i) == "{" || s.charAt(i) == "[") {
			openBrackets.push(s.charAt(i));
		} else {
			let lastOpening = openBrackets.pop();
			if (s.charAt(i) == ")" && lastOpening != "(") {
				return false;
			} else if (s.charAt(i) == "}" && lastOpening != "{") {
				return false;
			} else if (s.charAt(i) == "]" && lastOpening != "[") {
				return false;
			}
		}
	}

	if (openBrackets.length != 0) {
		return false;
	}
	return true;
};
