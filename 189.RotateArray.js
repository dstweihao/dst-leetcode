/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// const nums = [1, 2, 3, 4, 5, 6, 7]
// const k = 3
const nums = [1, 2]
const k = 5
const rotate = function (nums, k) {
    let count = 0;
    if (k <= nums.length) {
        count = k;
    } else {
        count = k % nums.length;
    }
    const middlePart = nums.splice(nums.length - count, count);
    nums.unshift(...middlePart);
    return nums;
}
