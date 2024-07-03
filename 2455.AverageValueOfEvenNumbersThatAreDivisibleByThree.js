/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 
 * 示例 1：

输入：nums = [1,3,6,10,12,15]
输出：9
解释：6 和 12 是可以被 3 整除的偶数。(6 + 12) / 2 = 9 。 
 */
// const nums = [1, 3, 6, 10, 12, 15];
// const nums = [1, 2, 4, 7, 10];
const nums = [
  94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3,
  79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
];
const averageValue = function (nums) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 6 === 0) {
      total += nums[i];
      count++;
    }
  }
  return count > 0 ? Math.floor(total / count) : 0;
};

