class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let left = 0
        let total = 0
        let curr = 1

        if(k <=1){
            return 0
        }

        for(let right = 0; right < nums.length; right++){
            curr *= nums[right]
            while(curr >= k){
                curr /= nums[left]
                left++
            }
            total += right - left + 1
        }
            return total
    }
}
