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
  let firstCount = 0
  let secondCount = 0
  let indexs = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      firstCount++
      indexs.push(i)
    }
  }

  // 如果遍历数组，都是满足nums[i] <= nums[i + 1]，则直接返回结果true
  if (firstCount === 0) {
    return true
  }
  // 因为最多只能改变 1 个元素，所以出现nums[i] > nums[i + 1] 超过2次的，默认为false，只需要继续验证出现一次的情况
  if (firstCount === 1) {
    // 如果出现元素A的下一个值A+1小于上一个值A-1，则将A+1赋值为A。
    if (nums[indexs[0] + 1] < nums[indexs[0] - 1]) {
      nums[indexs[0] + 1] = nums[indexs[0]]
    // 如果出现元素A的下一个值A+1等于上一个值A-1，则将A赋值为A+1。
    } else if (nums[indexs[0] + 1] === nums[indexs[0] - 1]) {
      nums[indexs[0]] = nums[indexs[0] + 1]
    // 如果出现元素A的下一个值A+1大于上一个值A-1，则将A赋值为A+1。
    } else if (nums[indexs[0] + 1] > nums[indexs[0] - 1]) {
      nums[indexs[0]] = nums[indexs[0] + 1]
    // 如果元素A出现位置为第一位，则将A赋值为A+1
    } else if (indexs[0] === 0) {
      nums[indexs[0]] = nums[indexs[0] + 1]
    }
  
    // 再次遍历,如果修改某个元素后，总满足 nums[i] <= nums[i + 1]，则表示结果为true
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        secondCount++
      }
    }
  }
  // 当第一次检测只有一个，第二次检测没有
  return firstCount === 1 && secondCount === 0
};
console.log(checkPossibility(nums))
