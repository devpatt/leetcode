/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numElem = nums.length;
    
    var numOne;
    var numTwo;
    
    var a = 0;
     
    for (a; a < numElem; a++){
        var b = 0;
        for (b; b < numElem; b++){
            
            if ((nums[a] + nums[b]) === target && a !== b){
                return [a,b];
            }

        }
    }
    
};
