/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 *  输入：haystack = "leetcode", needle = "leeto"
    输出：-1
    解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 */

/**
 *  输入：haystack = "sadbutsad", needle = "sad"
    输出：0
    解释："sad" 在下标 0 和 6 处匹配。
    第一个匹配项的下标是 0 ，所以返回 0 。
 */
const haystack = "sadbutsad", needle = "sad"
const strStr = function(haystack, needle) {
   return haystack.indexOf(needle)
};

console.log(strStr(haystack, needle))