/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (mid == x / mid) {
      return mid;
    } else if (mid > x / mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
