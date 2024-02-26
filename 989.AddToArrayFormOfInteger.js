/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3]
var k = 516
var out1 = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 0, 0]
var out = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]
var addToArrayForm = function (num, k) {
    var numStr = ''
    var outStr = ''
    var outNum = []
    for (let i = 0; i < num.length; i++) {
        numStr = numStr + num[i]

    }
    outStr = BigInt(numStr) + BigInt(k) + ''
    for (let i = 0; i < outStr.length; i++) {
        if (outStr[i] !== 'n') {
            outNum.push(Number(outStr[i]))
        }
    }
    return outNum
};


addToArrayForm(num, k)