/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 16, 35, 44, 100, 27, 0]

const sortedNums = [0, 1, 2, 16, 27, 35, 44, 100]

const out = 1

const dominantIndex = function (nums) {
    // 先将数字从小到大排序，生成新数组
    const sortedNums = nums.toSorted((a, b) => a - b);
    // 然后获取最后一位，如果大于等于倒数第二位的数值剩以2，则表示存在满足条件的最大整数，否则返回-1
    if (sortedNums[sortedNums.length - 1] >= sortedNums[sortedNums.length - 2] * 2) {
        // 通过indexOf在原nums数组中获取最大整数下标
        return nums.indexOf(sortedNums[sortedNums.length - 1]);
    } else {
        return -1;
    }
}


