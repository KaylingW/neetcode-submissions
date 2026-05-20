class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        let left = 0
        let right = 1

    while(right < nums.length){
        if(nums[left] == nums[right]){
            return true
        }
        left++
        right++
    }
    return false
    }
}