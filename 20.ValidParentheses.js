/**
 * @param {string} s
 * @return {boolean}
 */

const str = "()[]{}"

var isValid = function (str) {

    // 如果字符串长度不是偶数，则说明不是成对的，可直接返回false
    if (str.length % 2 !== 0) {
        return false
    }
    // 左右括号映射关系
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // 创建一个数组
    let stack = []
    for (let i = 0; i < str.length; i++) {
        const s = str[i]
        // 如果是左括号，则入栈
        if (s == '(' || s == '[' || s == '{') {
            stack.push(s)
        } else {
            // 如果是右括号，stack.pop()栈顶的左括号出栈，获取它映射的右括号，进行比较，如果不相等，直接返回false。
            if (s !== map[stack.pop()]) {
                return false
            }
        }
    }
    // 当stack长度为空，说明左右括号一一对应。
    return stack.length == 0

};


