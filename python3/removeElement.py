class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
#         # solution 1
#         newLength = 0
        
#         i = 0
#         while i < len(nums):
#             if (nums[i] != val):
#                 newLength+=1
#             else:
#                 del nums[i]
#                 i-=1
#             i+=1
        
#         return newLength

        # solution 2 ( without using del )
        newLength = len(nums)
        
        i = 0
        while i < newLength:
            if (nums[i] == val):
                nums[i] = nums[newLength-1]
                nums[newLength-1] = val
                newLength-=1
                i-=1
            i+=1
        
        return newLength