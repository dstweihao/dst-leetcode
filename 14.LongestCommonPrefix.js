/**
 * @param {string[]} strs
 * @return {string}
 */


let strs = ["flower","flow","flight"]
var longestCommonPrefix = function (strs) {
    // 如果是[""],直接返回结果为""
    if (strs[0] == "") {
        return ""
    }
    // 如果字符串数组只有一个元素，就返回元素自身。
    if (strs.length == 1) {
        return strs[0]
    }
    // 使用冒泡排序，将字符串数组，长度最短的字符串放在前面。
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs.length - i - 1; j++) {
            if (strs[j].length > strs[j + 1].length) {
                let temp = strs[j]
                strs[j] = strs[j + 1]
                strs[j + 1] = temp
            }
        }
    }
    // 获取最短字符串的值。
    let minStr = strs[0]
    // 遍历最短字符串，依次对比其他字符串的相同下标的字符，是否相等，如果不相等，就返回存在不相等的下标，比如[ 'flow', 'flower', 'flight' ]，
    // 通过 flow 来遍历，然后会在o也就是下标为2时，出现不相等，此时就截取最短字符串的值，minStr.substring(0, i)，最长公共前缀。
    for (let i = 0; i < minStr.length; i++) {
        const minStrValue = minStr[i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== minStrValue) {
                return minStr.substring(0, i)
            }
        }
    }
    return minStr
};

longestCommonPrefix(strs)
