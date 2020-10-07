// Find the longest substring of a continuous letter
// Example: aabbaaaba -> aaa

function longestSubString(input) {
  let prevChar = "";

  let subStrLen = 0;
  let longestSubStrLen = 0;

  let longestSubStr = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] == prevChar) {
      subStrLen++;
    } else {
      subStrLen = 1;
    }
    if (subStrLen > longestSubStrLen) {
      longestSubStrLen = subStrLen;
      longestSubStr = input.substring(i - longestSubStrLen + 1, i + 1);
    }
    prevChar = input[i];
  }
  return longestSubStr;
}

//   console.log(longestSubString("aabbaaaba"));

//   console.log(longestSubString("aabbaaabaaaaaa"));

//   console.log(longestSubString("acccccabbdddcscscscsccccccaaaba"));
