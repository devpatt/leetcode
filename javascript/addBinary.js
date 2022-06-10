/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let result = "";
  let carry = 0;

  while (aIndex >= 0 || bIndex >= 0) {
    let sum = carry;
    if (aIndex >= 0) sum += parseInt(a[aIndex--], 10);
    if (bIndex >= 0) sum += parseInt(b[bIndex--], 10);
    carry = Math.floor(sum / 2);
    result = (sum % 2).toString().concat(result);
  }
  if (carry != 0) {
    result = carry.toString().concat(result);
  }

  return result;
};
