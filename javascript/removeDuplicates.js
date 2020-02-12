/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let length = nums.length;
    console.log(length);
    
    for (let i=0; i< length-1; i++){
        // if the next val equals the current, shift the array down
        
        if (nums[i] == nums[i+1]){
            
            // shift the array to the left
            for (let j=i; j < length-1; j++){
                nums[j] = nums[j+1];
            }
            length--;
            i--;
            
            
        }
    }
    
    return length;
    
};
