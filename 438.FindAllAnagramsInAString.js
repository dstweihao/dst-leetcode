/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const s = "cbaebabacd"
const p = "abc"
// 输出: [0,6]
const findAnagrams = function (s, p) {
    /**
     * 如果p>s，则为空;
     * 当p在s上向右滑动时，分别记录p和s对应的字符个数;
     * 通过对比滑动窗口的字符个数是否相等来判断，相等则记录，不相等则左移右补。
     */
    if (p.length > s.length) {
        return [];
    }

    let pCount = new Array(26).fill(0); 
    let sCount = new Array(26).fill(0);
    let result = [];

    for (let char of p) {
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    for (let i = 0; i < p.length; i++) {
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }

    if (isEqual(pCount, sCount)) {
        result.push(0);
    }
    for (let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)] -= 1;
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        if (isEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }

    function isEqual(count1, count2) {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) {
                return false;
            }
        }
        return true;
    }

    return result;

};
console.log(findAnagrams(s, p))
