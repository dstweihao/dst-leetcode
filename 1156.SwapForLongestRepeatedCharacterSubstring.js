/**
 * @param {string} text
 * @return {number}
 */
let text = "ababa"
// 输出：3
let maxRepOpt1 = function (text) {

    // 如果只有一个字符，直接返回1
    if (text.length === 1) {
        return 1
    }
    // 先找到当前最长重复字符子字符串的值是哪个
    
    // 判断如果都是相同的字符，直接返回字符串长度
    for (let i = 0; i < text.length; i++) {
        const t = text[i];
        console.log("🚀 ~ maxRepOpt1 ~ t:", t)
    }
    return text
}
console.log(maxRepOpt1(text))