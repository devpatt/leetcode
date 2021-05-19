/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows === 1 || numRows >= s.length) return s;

	let word = [];

	let down = false;
	let row = 0;
	for (let i = 0; i < s.length; i++) {
		if (!word[row]) word[row] = s.charAt(i);
		else word[row] += s.charAt(i);

		if (row === numRows - 1 || row === 0) down = !down;

		if (down) row += 1;
		else row -= 1;
	}

	let output = "";
	for (let i = 0; i < numRows; i++) {
		output += word[i];
	}

	return output;
};
