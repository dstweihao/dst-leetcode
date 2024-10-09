/**
 * @param {string} s
 * @return {string}
 */

let s = "Let's take LeetCode contest"
let output = "s'teL ekat edoCteeL tsetnoc"
let reverseWords = function (s) {
    let result = '';
    // 使用正则表达式匹配单词，这样可以避免将整个字符串拆分为数组
    s.match(/\S+/g).forEach(word => {
        // 直接反转单词并累加到结果字符串中
        result += word.split('').reverse().join('') + ' ';
    });
    // 使用trimEnd移除最后一个空格，并返回结果
    return result.trimEnd();
};
console.log(reverseWords(s))