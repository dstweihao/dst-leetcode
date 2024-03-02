/**
 * @param {number[]} nums
 * @return {number}
 */


const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]
const value = 3


const findMaxConsecutiveOnes = function (nums) {
    // 数组转换为字符串
    const str = nums.join('')
    // 如果不存在0，则直接返回数组长度即可
    if (str.indexOf('0') === -1) {
        return nums.length
    }
    // 如果不存在1，则直接返回0
    if (str.indexOf('1') === -1) {
        return 0
    }
    // 通过0切割为各字符串数组
    const arr = nums.join('').split('0')
    // 通过比较字符长度，从长到短排序，然后获取索引为0，即可获取最大连续1的个数的值
    const maxValue = arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
    return  maxValue.length
};
console.log(findMaxConsecutiveOnes(nums))


