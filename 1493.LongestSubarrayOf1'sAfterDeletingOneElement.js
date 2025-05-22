/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 给你一个二进制数组 nums ，你需要从中删掉一个元素
输入：nums = [0,1,1,1,0,1,1,0,1]
输出：5
解释：删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。
 */
/**
 * 思路：
 * 1.将数组转化为字符串
 * 2.先找出左边是1右边也是1的位置是多少，并且有几个？
 * 3.找出这个位置，把它从0变成1，然后切割，获取最长的1的长度
 * 4.替换为1并切割后不比原生的长，就返回原生的长度，并且不用-1，解决方案就是，放宽判断条件，不要0左右都为1时才替换，而是只要0的左右有一个为1就可以替换。那么就同样可以触发-1的情况了。

 */
// const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
const nums = [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1]

const longestSubarray = function (nums) {
    // 检查数组是否全为1
    function isAllOnes(arr) {
        return arr.every(n => n === 1);
    }

    // 检查数组是否全为0
    function isAllZeros(arr) {
        return arr.every(n => n === 0);
    }

    // 处理数组，返回最长连续1的长度
    function processArray(arr) {
        const str = arr.join("");
        const segments = str.split('0');
        let maxLength = 0;
        for (let segment of segments) {
            if (segment.length > maxLength) {
                maxLength = segment.length;
            }
        }
        return maxLength;
    }

    if (isAllOnes(nums)) {
        return nums.length - 1;
    }

    if (isAllZeros(nums)) {
        return 0;
    }

    // 找出所有满足条件的0的位置
    const zeroIndices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && (nums[i - 1] === 1 || nums[i + 1] === 1)) {
            zeroIndices.push(i);
        }
    }
    if (zeroIndices.length === 0) {
        return processArray(nums);
    }

    let maxResult = 0;
    zeroIndices.forEach(index => {
        const modifiedArray = JSON.parse(JSON.stringify(nums));
        modifiedArray[index] = 1;
        const currentMax = processArray(modifiedArray);
        if (currentMax > maxResult) {
            maxResult = currentMax;
        }
    });

    return maxResult - 1;
};

console.log(longestSubarray(nums));