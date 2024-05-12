/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1, 2, 3, 4, 5];
const target = 5;
const output = 2;

const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const searchInsert2 = function (nums, target) {
  // 定义一个函数 searchInsert，接收两个参数：nums（排序数组）和 target（目标值）
  let left = 0; // 初始化 left 指针，指向数组的起始位置
  let right = nums.length - 1; // 初始化 right 指针，指向数组的结束位置

  while (left <= right) {
    // 当 left 指针小于等于 right 指针时，执行循环
    const mid = Math.floor((left + right) / 2); // 计算中间位置 mid，使用 Math.floor 向下取整

    if (nums[mid] === target) {
      // 如果中间位置的元素等于目标值，返回 mid
      return mid;
    } else if (nums[mid] < target) {
      // 如果中间位置的元素小于目标值，将 left 指针移动到 mid + 1 的位置
      left = mid + 1;
    } else {
      // 如果中间位置的元素大于目标值，将 right 指针移动到 mid - 1 的位置
      right = mid - 1;
    }
  }

  // 循环结束后，如果未找到目标值，返回 left 的位置
  return left; // 这里也就是目标值应该被插入的位置
};

const searchInsert3 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (i == 0 && target <= nums[i]) {
      return 0;
    } else if (i == nums.length - 1 && target > nums[i]) {
      return nums.length;
    } else if (nums[i] <= target && target <= nums[i + 1]) {
      return i + 1;
    }
  }
};

console.log(searchInsert(nums, target));
