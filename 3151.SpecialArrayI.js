/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const nums = [2, 1, 4]
// const nums = [4,3,1,6]
const nums = [1, 5]
const isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums.length - 1 && nums[i] % 2 === nums[i + 1] % 2) {
            return false
        }
    }
    return true
};

console.log('isArraySpecial :', isArraySpecial(nums));
