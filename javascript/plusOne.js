/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let ret = digits;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      ret[i] = 0;
      if (i == 0) {
        ret.unshift(1);
      }
    } else {
      ret[i] = ret[i] + 1;
      break;
    }
  }

  return ret;
};
