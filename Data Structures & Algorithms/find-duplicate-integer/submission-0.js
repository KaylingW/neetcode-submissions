class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const freqArr = new Map()
        let freq = 0
        let maxKey
        let maxVal = 0
        nums.sort()
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            freq = freq + 1
            freqArr.set(nums[i], freq)
            i++
        }
    }
    for (const [key, value] of freqArr) {
        console.log(freqArr)
    if (value > maxVal) {
        maxVal = value;
        maxKey = key;
    }
} 
    return maxKey
    }
}
