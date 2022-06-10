/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // METHOD 1
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;

  /*
    
    // METHOD 2
    const words = s.split(" ").filter(i => i != '')
    return words[words.length-1].length
    
    
    // METHOD 3
    let trimmedS = s.trim()
    let count = 0
    
    for(let i=trimmedS.length-1; i>=0; i--) {
        if(trimmedS[i] == " "){
            break
        }
        count++
    }
    return count
    
    */
};
