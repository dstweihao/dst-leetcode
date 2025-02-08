/**
 * @param {string} text
 * @return {number}
 */
let text = "ababa"
// 输出：3
const maxRepOpt1 = function (text) {
    // 统计每个字符的出现次数
    const count = {};
    for (const char of text) {
        if (!count[char]) {
            count[char] = 0;
        }
        count[char]++;
    }

    let max_length = 0;
    const n = text.length;

    for (let i = 0; i < n; i++) {
        const char = text[i];
        let length = 1; // 当前字符的最长连续重复子串长度

        // 向右扩展，找到当前字符的最长连续重复子串
        let j = i + 1;
        while (j < n && text[j] === char) {
            length++;
            j++;
        }

        // 检查是否可以通过交换一个字符来增加长度
        if (length < count[char]) {
            // 检查子串两端是否有相同字符
            if (j < n && text[j] !== char && j + 1 < n && text[j + 1] === char) {
                // 检查是否可以通过交换中间的字符来增加长度
                let k = j + 1;
                while (k < n && text[k] === char) {
                    length++;
                    k++;
                }
                if (length < count[char]) {
                    length++;
                }
            } else {
                length++;
            }
        }

        // 更新最大长度
        max_length = Math.max(max_length, length);
    }

    return max_length;
}
console.log(maxRepOpt1(text))