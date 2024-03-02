/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var nums = [1, 2, 2, 3]
// 输出：true

var nums = [6, 5, 4, 4, 4, 4]
// 输出：true

var isMonotonic = function (nums) {
    var isIncreasing = true
    var isDecreasing = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (!(nums[i] <= nums[i + 1])) {
            isIncreasing = false
            break
        }
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (!(nums[i] >= nums[i + 1])) {
            isDecreasing = false
            break
        }
    }
    return isIncreasing || isDecreasing
}

console.log(isMonotonic(nums))