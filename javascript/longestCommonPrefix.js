/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var length = strs.length; 
    if (length === 0){
        return "";
    }
    var output = strs[0];
    
    for (var i = 1; i < length; i++){
        if (strs[i].length === 0){
            return "";
        }
        for (var j = 0; j < strs[i].length; j++) {
            if (strs[i].charAt(j) !== output.charAt(j) ){
                output = output.substring(0, j)
            } else if (j === strs[i].length - 1){
                output = strs[i]
            }
          
        }
    }
    return output
};
