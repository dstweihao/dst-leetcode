/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


let nums = [0, 0, 1]

var moveZeroes = function (nums) {
    // 记录数组中存在0的个数
    let count = 0
    // 使用递归的方式，遍历删除数组中的0，并且记录数组中出现0的次数。
    deleteZeroes(nums)
    function deleteZeroes(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                nums.splice(i, 1)
                count++
                return deleteZeroes(nums)
            }
        }
        return nums
    }
    // 根据数组中出现0的次数，将删除全部0后的数据，在尾部添加count次0元素。
    for (let i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums

};

moveZeroes(nums)