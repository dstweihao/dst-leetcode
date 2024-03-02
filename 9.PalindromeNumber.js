/**
 * @param {number} x
 * @return {boolean}
 */

// 输入：x = 121
// 输出：true

let x = 12321


var isPalindrome = function (x) {
    let turnX = ''
    
    let strX = String(x)
    for (let i = strX.length - 1; i >= 0; i--) {
        turnX = turnX + strX[i]
    }
    return Number(turnX) == x
}

isPalindrome(x)
