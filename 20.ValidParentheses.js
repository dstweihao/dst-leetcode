/**
 * @param {string} s
 * @return {boolean}
 */

// s ="(]"
// const str = "(){}"
// 6,
// let str = "{[{}]}"
let str = "(([]){})"


let strLeft = '([{'
let strRight = ')]}'

var isValid = function (str) {
    let nextReslut = true
    let symReslut = true

    // 如果字符串长度不是偶数，意味着括号不是成对的，所以结果是false
    if (str.length % 2 !== 0) {
        return nextReslut, symReslut = false
    }
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const next = str[i + 1];
        if (i % 2 == 0) {
            if (strLeft.indexOf(current) == -1 || strRight.indexOf(next) == -1 || next !== strRight.charAt(strLeft.indexOf(current))) {
                nextReslut = false
                break
            }
        }
    }
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const sym = str[str.length - 1 - i]
        if (i < str.length / 2) {
            if (strLeft.indexOf(current) == -1 || strRight.indexOf(sym) == -1 || sym !== strRight.charAt(strLeft.indexOf(current))) {
                symReslut = false
                break
            }
        }
    }
    return nextReslut || symReslut
};

// isValid(str)


