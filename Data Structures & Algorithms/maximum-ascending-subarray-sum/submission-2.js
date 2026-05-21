class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
    //     let left = 0
    //     let curr = 0
    //     let ans = 0

    //     for(let right = 0; right < nums.length; right++){
    //         if(right > 0 && nums[right] <= nums[right-1]){
    //             left = right
    //             curr = 0
    //         }
    //         curr += nums[right]
    //         ans = Math.max(ans, curr)
    //     }
    // return ans
    // }
        let curr = nums[0];
        let ans = nums[0];

        for (let right = 1; right < nums.length; right++) {
            if (nums[right] > nums[right - 1]) {
                curr += nums[right];
            } else {
                curr = nums[right];
            }

            ans = Math.max(ans, curr);
        }

        return ans;
    }
}
