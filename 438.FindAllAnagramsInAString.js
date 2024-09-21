/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const s = "cbaebabacd"
const p = "abc"
// 输出: [0,6]
let findAnagrams = function (s, p) {

/**
 * 如果p>s，则为空
 * 当p在s上像右滑动时，分别记录p和s对应的字符个数
 * 通过对比滑动窗口的字符个数是否相等来判断，相等则记录，不相等则左移右补
 * 
 */

};
console.log(findAnagrams(s, p))