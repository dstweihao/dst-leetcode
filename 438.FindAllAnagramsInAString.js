/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
<<<<<<< HEAD

const s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// const findAnagrams = function (s, p) {
//     const indexs = []
//     for (let i = 0; i < s.length; i++) {
//         const str = s[i]
//         if (!p.includes(str)) {
//             continue
//         }
//         if (i <= s.length - p.length) {
//             const getStr = s.slice(i, i + p.length)
//              if (getStr.split('').sort().join('') === p.split('').sort().join('')) {
//                  indexs.push(i)
//              }
//         }
//     }
//     return indexs
// };
const findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length;
    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    const pCount = new Map();
    const sCount = new Map();
 

    // 初始化 p 的字符计数
    for (let i = 0; i < pLen; i++) {
        const char = p[i];
        pCount.set(char, (pCount.get(char) || 0) + 1);
    }

    // 初始化 s 的第一个窗口的字符计数
    for (let i = 0; i < pLen; i++) {
        const char = s[i];
        sCount.set(char, (sCount.get(char) || 0) + 1);
    }

    // 检查第一个窗口是否是字谜
    if (isCountEqual(sCount, pCount)) {
        ans.push(0);
    }

    // 滑动窗口
    for (let i = pLen; i < sLen; i++) {
        // 移除左侧字符
        const leftChar = s[i - pLen];
        sCount.set(leftChar, (sCount.get(leftChar) || 1) - 1);
        if (sCount.get(leftChar) === 0) {
            sCount.delete(leftChar);
        }

        // 添加右侧字符
        const rightChar = s[i];
        sCount.set(rightChar, (sCount.get(rightChar) || 0) + 1);

        // 检查当前窗口是否是字谜
        if (isCountEqual(sCount, pCount)) {
            ans.push(i - pLen + 1);
        }
    }
    console.log('pCount :', pCount);
    console.log('sCount :', sCount);

    return ans;
};

// 辅助函数，用于比较两个 Map 是否相等
function isCountEqual(count1, count2) {
    for (const [char, count] of count1) {
        if (count2.get(char) !== count) {
            return false;
        }
    }
    for (const [char, count] of count2) {
        if (count1.get(char) !== count) {
            return false;
        }
    }
    return true;
}

console.log(findAnagrams(s, p))
=======
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
>>>>>>> 266dce49d9caf36138e44fbe545b77880df1064a
