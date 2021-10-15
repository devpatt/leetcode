/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	let cols = [];
	let rows = [];
	let sqs = [];
	for (let i = 0; i < 9; i++) {
		cols[i] = {};
		rows[i] = {};
		sqs[i] = {};
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] !== ".") {
				let quad = Math.floor(j / 3) + Math.floor(i / 3) * 3;
				if (
					board[i][j] in cols[j] ||
					board[i][j] in rows[i] ||
					board[i][j] in sqs[quad]
				) {
					return false;
				} else {
					cols[j][board[i][j]] = true;
					rows[i][board[i][j]] = true;
					sqs[quad][board[i][j]] = true;
				}
			}
		}
	}

	return true;
};
