/**
 * @param {string} word
 * @return {number}
 */

/**
 * 
输入：word = "a123bc34d8ef34"
输出：3
解释：不同的整数有 "123"、"34" 和 "8" 。注意，"34" 只计数一次。
 */
// const word = "a123bc34d8ef34"
const word = "u00008"

const numDifferentIntegers = function (word) {
    // 1. 匹配所有的数字，返回一个数组，每个元素是一个数字字符串
    const nums = word.match(/\d+/g);
    // 2. 如果没有匹配到数字，返回0
    if (nums === null) {
        return 0;
    }
    // 3. 去掉前导0，返回一个新的数组，每个元素是一个数字字符串
    nums.forEach((n, i) => {
        nums[i] = n.replace(/^0+/, '');
    });
    // 4. 用Set去重
    const set = new Set(nums); // 去重
    // 5. 返回Set的大小
    return set.size;
};

console.log(numDifferentIntegers(word)) // 3