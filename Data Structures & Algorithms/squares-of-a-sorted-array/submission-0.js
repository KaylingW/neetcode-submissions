class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
    let arr = []
    let left = 0;
    let right = nums.length - 1
    let i = nums.length - 1

    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            arr[i] = nums[left] * nums[left]
            left++
        }
        else{
            arr[i] = nums[right] * nums[right]
            right--
        }
        i--
    }
    return arr
    }
}