/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * 给你一个长度为 n 的整数数组 nums ，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
   我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 */
/**
 * 输入: nums = [4,2,3]
   输出: true
   解释: 你可以通过把第一个 4 变成 1 来使得它成为一个非递减数列。
 */
/**
 * 意味着，在num里最多只能出现一个比后面大的值，而且要都比。
 * 或者就是每次都修改nums[i]为nums[i+1]一样的值，然后再次遍历，是否全都满足 nums[i] <= nums[i + 1]。这个判断条件。
 */
// const nums = [4, 2, 3]

// const nums = [5, 7, 1, 8]
// const nums = [1, 4, 1, 2]
const nums1 = [1, 4, 2, 3]
const nums = [4, 2, 3]
// [4,2,1]
const checkPossibility = function (nums) {

  // 如果数组只有一个元素，则直接返回true
  if (nums.length === 1) {
    return true
  }
  let index = -1
  for (let i = 0; i < nums.length; i++) {
    // 只要有一个不满足的元素，就拿到元素的下标，然后跳出循环。
    if (nums[i] > nums[i + 1]) {
      index = i
      break
    }
  }
  // 如果出现元素A的下一个值A+1大于等于上一个值A-1，则将A赋值为A+1。
  if (index === 0 || nums[index + 1] >= nums[index - 1]) {
    nums[index] = nums[index + 1]
  } else {
    // 否则
    nums[index + 1] = nums[index]
  }

  // 再次遍历,如果修改某个元素后，不满足 nums[i] <= nums[i + 1]，则结果为false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return false
    }
  }

  return true
};
console.log(checkPossibility(nums))
